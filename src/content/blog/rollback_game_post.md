---
title: "How did I implement rollback for my online game in C++."
description: "A post about my online game made in C++ using rollback technique."
pubDate: "May 01 2024"
heroImage: "/rollback_game/images/rollback_project_architecture.png"
tags: ["Rollback", "Network", "C++", "Game", "2D", "SAE"]
---

# Technical direction.

For the network part of my game, I decided to use the [photon realtime](https://www.photonengine.com/realtime) library. I chose it because photon provides free servers that we can use via their library. But also because the library provides ready-made rooms and a ready-made client. Given that the project focuses on the implementation of a rollback system, this aspect of the library appealed to me in order to reduce the network code workload.

For the graphics and audio of my game, I chose raylib as my library. My aim is to make my game playable on a web browser, and raylib is compatible with HTML5 like the emscripten version of photon realtime. What's more, raylib is easy to learn and use.

# Project architecture.

Before talking about how I implemented rollback in my game, I'd like to present the architecture of my project. Rollback requires a clean code architecture that clearly separates the different systems in the program. During rollback, only the game's logic systems need to be resimulated, while graphics, audio and other systems must be managed separately so as not to encroach on the rollback. You also need to be able to create tools and applications to easily debug your code when you're networking, and even more so when you're rollback. That's why I've included 3 separate executables in my project, simulating the game in different ways, to help me debug my code. I'll talk briefly about each one below.<br>
So here's what my project's code architecture looks like:

![My project architecture.](/rollback_game/images/rollback_project_architecture.png)

From a global point of view, 4 main modules stand out. The game module (red/green/yellow) follows a Model-View-Controller design pattern. The network module (blue) is isolated in its own corner, and it's up to the other modules of the program to communicate with it. The client module (khaki), which brings together the logic of the game, the network and the graphics. Finally, there's the application module (gray), which is at the top of the hierarchy and will execute one of the available applications.<br>
I'll go through each of these modules in a little more detail.

## Game module.

![The game module.](/rollback_game/images/game_module.png)

The game module follows the Model-View-Controller architecture to clearly separate the different systems in my game.

The controller part consists of an input manager whose role is to transmit user inputs to the model so that it can update itself. I'll come back to this in more detail when I talk about implementing rollback. 

The Model part refers to all the code controlling the logic and state of the game. The basis of this model is a LocalGameManager, which is a class responsible for updating the state of the game via its various systems. This class only works for local games, and has no dependencies on network code.<br>
The entire network code layer is added via the OnlineGameManager class, which inherits directly from LocalGameManager by adding a pointer to a network interface and a RollbackManager, which I'll talk about later.
This separation between the network code and the game logic code allows me to have a game that can be played online as well as locally. This is very useful for testing and debugging the game without being dependent on an Internet connection.

Finally, the View section consists of a GameRender with a pointer to a LocalGameManager to be able to directly read all game state data and draw it on screen.

## Network module.

![The network module.](/rollback_game/images/network_module.png)

The network module is quite small, not least because photon encapsulates all the code that sets up the network connections. What's important in this module is the NetworkInterface. Indeed, if a class or module in my program needs to communicate via the network, it will pass through a pointer to an interface rather than directly to an implementation. This allows me to have several possible network implementations without having to change the rest of my program. 

The first implementation of the interface is called "SimulationNetwork" and is a mock. It's a fake network that I simulate by modifying the network delay and the percentage of lost packets. This allows me to test my game without an Internet connection, but also to test the robustness of my rollback code in more or less extreme scenarios.

The second implementation is called NetworkManager and is simply the network code used to run the online game via the photon realtime API.

## Client module.

![The client module.](/rollback_game/images/client_module.png)

The client module simply consists of a single class linking the various systems seen so far. Its main attributes are the OnlineGameManager, the GameRenderer and a pointer to the network interface. Here too, the network interface pointer enables the client to act in exactly the same way, regardless of the behavior of the network implementation it is given. The client class acts globally as a kind of application. The advantage of this design choice is that I can instantiate two clients in a single executable without having to run two separate ones.

## Application module and its different executables.

![The application module.](/rollback_game/images/app_module.png)

The last module in my program is the application module. This consists of an interface called Application and an Engine class which owns the program window and a pointer to an application. The Engine is therefore the program's main class, which can execute any application given to it. So, in a simple, modular way, I can code several application uses for my game. I'm going to describe the three applications I used to develop my game.

### Simulation application.

The SimulationApplication is an application that runs two client instances using the SimulationNetwork implementation. The application has two render textures to give one to each client, which in turn gives it to its GameRenderer, so that each client's game is drawn separately but from the same window. This application is essential for debugging and testing the game, as it requires no Internet connection and can simulate extreme network scenarios.

<video controls>
  <source src="/rollback_game/videos/simul_app.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<p>The simulationApplication running two clients in the same window using the mock network.</p>

By the way, this application was extremely useful when I was making my rollback prototypes, so I could access the debugger on both clients at the same time.

<video controls>
  <source src="/rollback_game/videos/test_rollback.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<p>The rollback prototype using the SimulationApplication.</p>

### Split screen application.

The SplitScreenApplication is very similar to the SimulationApplication in that it also instantiates two clients in the same window, but this time the clients have the network implementation using photon. This allows me to test my game in the real-life scenario for which it was originally designed, locally on one machine without having to open two separate executable files.

<video controls>
  <source src="/rollback_game/videos/split_screen_app.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<p>The SplitScreenApplication running two clients in the same window using the network.</p>

### Client application.

Finally the ClientApplication is the target build application which consists of a client using the photon network implementation. This is the executable that is built in release and put online for anyone to play with.

# Rollback implementation.

Now let's talk about the main topic: rollback.
To implement this technique in a program, there are, in my opinion, 4 prerequisites.

1. The game's update function(s) should not depend on any graphics or audio system as mentioned above, but should also not depend directly on the input system. It's not up to the game to go and read the inputs; the game must rely on the inputs it's given to update itself, without knowing whether this input is an old input or a new one. By isolating the update from the game, the same function can be used to either rollback to the past or simulate the current frame to advance the simulation.

2. Be able to store inputs with the frame number at which they were made, so as to be able to read old inputs during a rollback. The protocol used to send inputs to the network must also have low latency and ensure that all inputs are received.

3. Be able to copy the state of the game and all the systems influencing it. During a rollback, we want to resimulate the game from a past state, so we need to copy the values of this state to be able to go back in time correctly.

4. Be able to confirm frames once all inputs to a frame have been received. This will allow 
the simulation to move forward and avoid rollbacks from the very first frame of the game.<br>
It is also important to perform a checksum of the state of the game between the different clients during frame confirmation, to ensure that the integrity of the simulation is preserved.

## Isolate the game update and seperate the different game logic systems.

I've already shown and explained the separation of the graphics and logic parts of my game, but I've also taken the trouble to separate my game's logic into several subsystems to make it easier to implement rollback. So I have a PlayerManager which updates players according to their inputs, and a ProjectileManager which updates projectiles. Both are managed by the LocalGameManager, which also adds the physical layer to the game logic.
But as mentioned above, inputs must not be read directly into the game update, otherwise the rollback won't be able to read old inputs. That's why I've created a separate input system for my game, which will read the inputs and pass them on to the RollbackManager, which will give it the right inputs for the frame being simulated/resimulated.

I decided to store the inputs in a std::uint8_t, assigning each input to a different bit, for two reasons. The first is that storing the value of all inputs in different bits of a single number makes it easy to read the inputs using the bitwise "&" operator while giving my game only one number to read. <br>
The second is that a std::uint8_t only takes up a single byte of memory, which is important given that the inputs will be sent to the network every frame.

I use an enum to assign one bit per input type and to be more explicit when I read the inputs:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
/**
* \brief PlayerInputs is an uint8 which stores all the inputs value of a player
* in a frame.
*/
using PlayerInput = std::uint8_t;

enum class PlayerInputType : std::uint8_t {
  kUp = 1 << 0,
  kDown = 1 << 1,
  kRight = 1 << 2,
  kLeft = 1 << 3,
  kShoot = 1 << 4,
};
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Then I retrieve the total value of the frame's inputs using a function that assigns the correct values according to the keys pressed.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
PlayerInput GetPlayerInput(int input_profile_id) noexcept {
  switch (input_profile_id) {
    case 0: {
      PlayerInput player_1_inputs = 0;

      if (IsKeyDown(KEY_W)) {
        player_1_inputs |= static_cast<std::uint8_t>(PlayerInputType::kUp);
      }
      if (IsKeyDown(KEY_A)) {
        player_1_inputs |= static_cast<std::uint8_t>(PlayerInputType::kLeft);
      }
      if (IsKeyDown(KEY_S)) {
        player_1_inputs |= static_cast<std::uint8_t>(PlayerInputType::kDown);
      }
      if (IsKeyDown(KEY_D)) {
        player_1_inputs |= static_cast<std::uint8_t>(PlayerInputType::kRight);
      }
      if (IsMouseButtonDown(MOUSE_BUTTON_LEFT) && Engine::are_mouse_inputs_enabled()) {
        // Check if the mouse is not being used for window move.
        if (!IsWindowResized() && !IsWindowMinimized()) {
          player_1_inputs |= static_cast<std::uint8_t>(PlayerInputType::kShoot);
        }
      }

      return player_1_inputs;
    }

    case 1: {
      PlayerInput player_2_inputs = 0;

      if (IsKeyDown(KEY_UP)) {
        player_2_inputs |= static_cast<std::uint8_t>(PlayerInputType::kUp);
      }
      if (IsKeyDown(KEY_LEFT)) {
        player_2_inputs |= static_cast<std::uint8_t>(PlayerInputType::kLeft);
      }
      if (IsKeyDown(KEY_DOWN)) {
        player_2_inputs |= static_cast<std::uint8_t>(PlayerInputType::kDown);
      }
      if (IsKeyDown(KEY_RIGHT)) {
        player_2_inputs |= static_cast<std::uint8_t>(PlayerInputType::kRight);
      }
      if (IsMouseButtonDown(MOUSE_BUTTON_RIGHT) &&
          Engine::are_mouse_inputs_enabled()) {
        player_2_inputs |= static_cast<std::uint8_t>(PlayerInputType::kShoot);
      }

      return player_2_inputs;
    }
    default:
      return PlayerInput();
  }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

This function is based on the id of the input profile used to determine which keyboard keys and mouse buttons are associated with game actions. This allows me to play both players in a game locally with a single keyboard. By using the bitwise operator "|=" I'm able to encode all the frame's actions in a single number that I return and give to my game as well as sending it over the network.

Now the OnlineGameManager can read the local inputs through this function, give them to the RollbackManager and then give them to the game before calling FixedUpdate:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
// This is a pseudo-code example of how it globally works.

const auto input = input::GetPlayerInput(input_profile_id_); // Read inputs from input system.
rollback_manager_.SetLocalPlayerInput(input, player_id_); // Give them to the rollback

for (PlayerId player_id = 0; player_id < game_constants::kMaxPlayerCount;
    player_id++) {
    const auto input = rollback_manager_.GetLastPlayerInput(player_id); // Retreive inputs from the rollback.
    SetPlayerInput(input, player_id); // Give the inputs to the game.
}

LocalGameManager::FixedUpdate(); // Update the game now that the inputs are set.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
I always use the RollbackManager to set the game's inputs, as it knows both local inputs and remotes. The rollback's GetLastPlayerInput method gives me a player's last input. If it's a remote player, then it gives me the last input received, assuming it hasn't changed.

So now in the LocalGameManager's FixeUpdate, the PlayerManager can update players based on the inputs set for it.
Here I'll show you the PlayerManager's Move method, which is just one of several player update methods:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
void PlayerManager::Move(const Player& player) const noexcept {
  auto move_direction = Math::Vec2F::Zero();

  if (player.input &
      static_cast<input::PlayerInput>(input::PlayerInputType::kUp)) {
    move_direction += Math::Vec2F::Down();
  }
  if (player.input &
      static_cast<input::PlayerInput>(input::PlayerInputType::kLeft)) {
    move_direction += Math::Vec2F::Left();
  }
  if (player.input &
      static_cast<input::PlayerInput>(input::PlayerInputType::kDown)) {
    move_direction += Math::Vec2F::Up();
  }
  if (player.input &
      static_cast<input::PlayerInput>(input::PlayerInputType::kRight)) {
    move_direction += Math::Vec2F::Right();
  }

  if (move_direction.Length() >= Math::Epsilon) {
    
    const auto& body_ref =
        world_->GetCollider(player.main_col_ref).GetBodyRef();
    auto& body = world_->GetBody(body_ref);
 
    // Clamp the velocity
    if (body.Velocity().Length() >= kMaxVelocityMagnitude)
    {
      return;
    }

    const auto dir = move_direction.Length() >= Math::Epsilon
                         ? move_direction.Normalized()
                         : move_direction;
    const auto val = dir * game_constants::kPlayerSpeedMoveFactor;
    body.ApplyForce(val);
  }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
I've thus separated the input system from the game, allowing me to reuse the same FixedUpdate function no matter which frame is being simulated. In this way, during a rollback, the RollbackManager can set player inputs to old inputs without the PlayerManager having to worry about which input to read. 

## Trace inputs and send them to the network

parler de FrameInput
parler de comment ils sont envoyés et lu via le réseau.

## Resimulate the game.

parler des methodes Rollback pour copier un ancien état.

Why not une frame sans confirm frame qui prouve le probleme de ressimuler depuis la frame 0.
Show tracy frames.

## Confirm frames.

Show tracy frames.

# Conclusion