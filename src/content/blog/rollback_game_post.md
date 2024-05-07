---
title: "How did I implement rollback for my online C++ game."
description: "A post about my online game made in C++ using rollback technique."
pubDate: "May 01 2024"
heroImage: "/rollback_game/images/rollback_project_architecture.png"
tags: ["Rollback", "Network", "C++", "Game", "2D", "SAE"]
---

Hi welcome, I recently managed to create an online C++ game using rollback balalal
le jeu rollback utilise notre propre moteur physique
projet SAE
etc 

# Table of Contents

- [Technical direction](#Technical-direction.)
- [Project architecture](#Project-architecture.)
  - [Game module](#Game-module.)
- [Center](#center)
- [Color](#color)

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
But as mentioned above, inputs must not be read directly into the game update, otherwise the rollback won't be able to read old inputs. That's why I've created a separate input system for my game, which will read the inputs and pass them on to the RollbackManager, which will give the right inputs for the frame being simulated/resimulated.

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

So that my game doesn't depend directly on inputs, I've chosen to store them in my RollbackManager. The latter has an array of arrays storing all the inputs from all the players. Two methods are used to add values to this array: SetLocalPlayerInput() and SetRemotePlayerInput().<br>
My RollbackManager also has an array containing the latest inputs received from each player. If the player is local, his last input will always be the input of the current frame. If the player is remote, his last input will be the last one received from the network, assuming it hasn't changed.

So now the OnlineGameManager can read the local input through the GetPlayerInput() function, give it to the RollbackManager and then give the last input of each player to the game before calling FixedUpdate:
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

Now that the game update function has been isolated, we can move on to the next step, which is to send the inputs over the network. The aim is for each player to send his inputs every frame, and for the other player to receive them as quickly as possible. This is why the UDP protocol is an ideal candidate for a scenario like this. However, we need to take into account the non-reliability of UDP so that the game can run correctly. 
We need to anticipate two cases:
1. Packets not arriving in the right order
2. Packet loss

This means that when we receive an input from the network, in both cases we have no way of ensuring that this input is the one we need and not another. This is why we need a way of differentiating inputs by their frame number, so that we don't miss a single one. In my code, I have a class called [FrameInput](https://github.com/Chocolive24/rollback_game/blob/master/game/include/input.h) which has an input and a frame number as attributes. I've made sure that this class is serializable by photon events, which makes for a terrifying piece of code that I'll let you take a look at if you feel like it.

Then, to prevent packet loss, I've decided that I won't send just one input per frame, but all the inputs I'm not sure have been received. This way, if a packet is lost, the next packet contains the lost inputs as well as the new ones. 
This technique has the advantage of solving the lost packet problem easily but has the disadvantage of sending a lot of data over the network because a lot of input will be sent multiple times.

Now, let's take a closer look at how I manage network input.<br>
As I said above, my RollbackManager is responsible for all player inputs. But it also has the frame information needed to track the inputs correctly, as follows:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
  // FrameNbr is a typedef for a short.
  // I initialize them to -1 to put them in a disabled state at the start of the program.

  /**
   * \brief The frame nbr of the local client.
   */
  FrameNbr current_frame_ = -1;

  /**
   * \brief The frame number of the last time a remote input was received.
   */
  FrameNbr last_remote_input_frame_ = -1;
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

Once an input array has been received from the network and decoded, a simple check is made by comparing the frame number of the last input in the received array with the frame number of the last frame in which inputs were received. If the frame number is smaller than or equal to the number of the last frame where inputs were received, this means that the network event is older and therefore contains no new inputs. In this case, we don't give this array to the RollbackManager.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
  if (remote_frame_inputs.back().frame_nbr() <
      rollback_manager_.last_remote_input_frame()) {
    // received old input, no need to give it to the RollbackManager.
    return;
  }

  rollback_manager_.SetRemotePlayerInput(remote_frame_inputs, other_client_id);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 
If the frame number of the last input in the array is larger, then we have at least one new input. As we don't know how many inputs are missing, I give the entire input array as a parameter to the SetRemotePlayerInput method, which will then perform the necessary operations to retrieve the correct inputs.<br>
The method begins by retrieving the last FrameInput in the array. In the easiest scenario, I simply call my array's back() method to retrieve this input, since it's smaller than the current frame. However, if the latter is larger than the current frame, then I'll assume that the last input is the one at the current frame location, so as not to store inputs that are ahead of the local simulation. I solved the problem in this way for ease of use, as I didn't want to have to deal with inputs that were ahead of time.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
// Retrieve the last new remote frame input.
auto last_new_remote_input = new_remote_inputs.back();

// If the last remote input frame is greater than the current frame, adjust
// last_new_remote_input.
if (last_new_remote_input.frame_nbr() > current_frame_) {
  const auto& current_frame_it =
      std::find_if(new_remote_inputs.begin(), new_remote_inputs.end(),
                   [this](const input::FrameInput& frame_input) {
                     return frame_input.frame_nbr() == current_frame_;
                   });
  last_new_remote_input = *current_frame_it;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

Now that I know the last input I'm missing, I need to know the first one I'm missing in order to have the complete range of missing inputs. Since I know the number of the last frame in which an input was received, all I have to do is add 1 to this value and do a std::find_if on the remote input array to find the iterator of the first input I'm missing. 
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
// Find the position of the first missing input
auto missing_input_it = std::find_if(
    new_remote_inputs.begin(), new_remote_inputs.end(),
    [this](const input::FrameInput& frame_input) {
    return frame_input.frame_nbr() == last_remote_input_frame_ + 1;
});
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

I'll then use this iterator in a for loop going from last_remote_input_frame_ + 1 to the frame number of the last input I'm missing in the remote table, in order to add all these inputs to the corresponding slots in my huge input array in my RollbackManager. It's also at this point that I can check whether the new inputs differ from the last ones I stored. If all the new inputs are identical to the last received, then there's no need to rollback. In the opposite case, a rollback is necessary because we've simulated the game with wrong inputs.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
bool must_rollback = false;

// Iterate over the missing inputs and update the inputs array
for (FrameNbr frame = last_remote_input_frame_ + 1;
    frame <= last_new_remote_input.frame_nbr(); frame++) {
    // Get the input for the current frame
    const auto input = missing_input_it->input();

    // Check if rollback is necessary
    if (last_remote_input_frame_ > -1 && input != last_inputs_[player_id].input()) {
        must_rollback = true;
    }

    // Update the inputs array
    inputs_[player_id][frame] = *missing_input_it;

    // Move to the next missing input
    ++missing_input_it;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

Subsequently, I fill in my table of inputs for the game from the frame number of the last remote input taken into account up to the current frame in order to be able to correctly resimulate the game up to the latter in the event of a rollback.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
// Predict inputs for frames up to the current frame with the last remote input.
for (FrameNbr frame = last_new_remote_input.frame_nbr(); frame <= current_frame_; frame++) {
    inputs_[player_id][frame] = last_new_remote_input;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

Finally I resimulate the game up to the current frame if a rollback is necessary (We will see it later) and I update the values ​​of the last inputs received.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
// Rollback if necessary.
if (must_rollback) {
    SimulateUntilCurrentFrame();
}

// Update last inputs and last remote input frame.
last_inputs_[player_id] = last_new_remote_input;
last_remote_input_frame_ = last_new_remote_input.frame_nbr();
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

In this way I am able to compensate for the non-reliability of UDP and I am able to trace my inputs through time to go back if necessary.

## Resimulate the game.

So far I have setup my code so that it is easy to rollback. It's time to find out if all my work was really worth it. Since I have properly separated the different systems of my program, I should be easily able to resimulate old frames to correct the simulation in the event that inputs have been incorrectly anticipated.<br>
First of all I need to change the variables that describe the state of my game so that they correspond to the last state that could be confirmed in order to simulate a return in time. For this I store in my RollbackManager a pointer to my LocalGameManager which I named "current_game_manager_"

Then I need to store the last confirmed state of the game to be able to copy its values ​​when a rollback is performed.
To do this I have an instance of LocalGameManager which is only updated when a frame confirmation is performed. Since frame confirmation is not yet coded, this means that rollbacks will currently take place from frame 0 to the current frame.

My implementation for copying values ​​from confirmed state is quite naive. I created a Rollback() method for each of my systems which takes a parameter of the confirmed state of the game to copy the values:
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
void LocalGameManager::Rollback(const LocalGameManager& game_manager) noexcept {
  game_state_.world = game_manager.game_state_.world;
  game_state_.world.SetContactListener(this);
  game_state_.player_manager.Rollback(game_manager.game_state_.player_manager);
  game_state_.projectile_manager.Rollback(game_manager.game_state_.projectile_manager);

  game_state_.is_game_finished = game_manager.game_state_.is_game_finished;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

It is therefore very easy for me to resimulate the frames going from the last confirmed frame to the current frame when a rollback is necessary.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
void RollbackManager::SimulateUntilCurrentFrame() const noexcept {
  current_game_manager_->Rollback(confirmed_game_manager_);

  for (FrameNbr frame = static_cast<FrameNbr>(confirmed_frame_ + 1); 
      frame < current_frame_; frame++) {
    for (PlayerId player_id = 0; player_id < game_constants::kMaxPlayerCount;
         player_id++) {
      const auto input = inputs_[player_id][frame];
      current_game_manager_->SetPlayerInput(input, player_id);
    }

    current_game_manager_->FixedUpdate();
  }

  // The Fixed update of the current frame is made in the main loop after polling
  // received events from network.
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

It was therefore indeed useful to make a clear distinction between the different systems of my game, this makes the rollback code much simpler to create.

Now that the code is done let's open Tracy Profiler to take a closer look at how rollback is handled in the program:
<div style="text-align:center">
  <img src="/rollback_game/images/no_confirm_frame.png" alt="One frame with rollback but..." />
  <p style="margin-top: -10px">One frame with rollback but...</p>
</div>


Ah yes it's true, I don't confirm any frame, which means that I constantly rollback from frame 0...
Here my program crashed because too many inputs were sent over the network, otherwise the 700 updates that you see on the screen would have been carried out without problem in 3.57ms which means that I am far from having performance problems with my game despite huge rollback. It's better than nothing...

## Confirm frames.

The last step for the rollback to work correctly is frame confirmation. This will fix the problem linked to the fact that the rollback resimulates from frame 0 constantly. 
To be able to confirm a frame, you must have received all the inputs for the said frame. Because I use photon, my network architecture is peer-to-peer. This is why I decided that it is up to the master client to confirm the frames when it receives input from the network.

The only things I had to add to my RollbackManager are the frame number of the last confirmed frame, the frame number of the frame that needs to be confirmed and a function that advances the state of the confirmed game manager.

This makes frame confirmation quite simple on the master client side since it can directly confirm all the frames until the frame number of last remote input received. Its only additional responsibility is to send the checksum of its simulation by the confirmed frame to the other client.
The frame confirmation code is very simple, just simulate a frame with the confirmed_game_manager and update the frame numbers of the confirmed frame and the frame to confirm
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
Checksum RollbackManager::ConfirmFrame() noexcept {
  for (PlayerId player_id = 0; player_id < game_constants::kMaxPlayerCount;
       player_id++) {
    const auto input = inputs_[player_id][frame_to_confirm_];
    confirmed_game_manager_.SetPlayerInput(input, player_id);
  }

  confirmed_game_manager_.FixedUpdate();
  const auto checksum = confirmed_game_manager_.ComputeChecksum();

  confirmed_frame_++;
  frame_to_confirm_++;

  return checksum;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

As with the Rollback() methods, I created one ComputeChecksum() method per subsystem. This allows you to have greater control when you want to debug the case where a checksum does not match between the two clients.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
Checksum LocalGameManager::ComputeChecksum() const noexcept {
  Checksum checksum = 0;

  checksum += game_state_.player_manager.ComputeChecksum();
  checksum += game_state_.projectile_manager.ComputeChecksum();

  return checksum;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

So once the checksum has been calculated, the naive implementation would like us to directly send a frame confirmation packet in TCP with the checksum value and the frame number. However, this would mean that we would have to be careful on the other client's side to be sure to have received all the inputs up to this frame to be confirmed before actually confirming it. To avoid having to deal with this problem, I decided that the master client would add its inputs since the last confirmed frame to its frame confirmation packet. This allows the other client to catch up on the inputs and be able to directly confirm the frame.

Now on the other client's side, a simple check is carried out to find out if it has all the inputs necessary for confirmation of the frame. If this is not the case, it will add them to its RollbackManager via the SetRemotePlayerInput() method and will perform a rollback if necessary.
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
// If we did not receive the inputs before the frame to confirm, add them.
if (rollback_manager_.last_remote_input_frame() < frame_inputs.back().frame_nbr()) {
    rollback_manager_.SetRemotePlayerInput(frame_inputs, other_client_id);
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

Once up to date, it will confirm its frame and compare its checksum with that of the master client. If the checksum does not match, the client will crash which will end the game because the integrity of the simulation is not respected. Otherwise it will simply continue its simulation.

Now that the confirm frame code is there, let's look again at a screen of a frame where the rollback is executed:
![A frame where rollback was applied (correctly this time)](/rollback_game/images/rollback_frame.png)

Ah there you go, it's clearly better like that. <br>
The rollback is indeed executed in the OnInputReceived function which is the function called when a remote input is received. The state returns to the last state confirmed via the Rollback method then we can see that the program resimulates four frames on this screenshot. <br>
After correcting the simulation, we confirm the frames to be confirmed (two in the case of this screenshot) then we send the frame confirmation events. After taking care of the received events, it's time to send our inputs to the network via the SendInputEvent method.<br>
Finally the update of the current frame is executed at the very end.

Let's take a closer look at the statistics of the SimulateUntilCurrentFrame() method.
![stats](/rollback_game/images/rollback_stats.png)

The function takes on average 64.22 microseconds to execute which is not bad given that my implementation is quite naive and does not seek to be as optimized as possible. It's not nothing either especially since my game is not very demanding in terms of logic but it is also part of the rollback overhead. Regardless, I still have some room to run before I have performance issues.

# Conclusion