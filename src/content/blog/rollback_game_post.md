---
title: "How did I implement rollback for my online game in C++."
description: "A post about my online game made in C++ using rollback technique."
pubDate: "May 01 2024"
heroImage: "/rollback_game/images/rollback_project_architecture.png"
tags: ["Rollback", "Game", "SAE", "Network", "C++"]
---

# Technical direction.

For the network part of my game, I decided to use the [photon realtime](https://www.photonengine.com/realtime) library. I chose it because photon provides free servers that we can use via their library. But also because the library provides ready-made rooms and a ready-made client. Given that the project focuses on the implementation of a rollback system, this aspect of the library appealed to me in order to reduce the network code workload.

For the graphics and audio of my game, I chose raylib as my library. My aim is to make my game playable on a web browser, and raylib is compatible with HTML5 like the emscripten version of photon realtime. What's more, raylib is easy to learn and use.

# Project architecture.

Before talking about how I implemented rollback in my game, I'd like to present the architecture of my project. Rollback requires a clean code architecture that clearly separates the different systems in the program. During rollback, only the game's logic systems need to be resimulated, while graphics, audio and other systems must be managed separately so as not to encroach on the rollback.<br>
Here's how I've organized my program:

![My project architecture.](/rollback_game/images/rollback_project_architecture.png)

From a global point of view, 4 main modules stand out. The game module follows a Model-View-Controller design pattern. The network module is isolated in its own corner, and it's up to the other modules of the program to communicate with it. The client module, which brings together the logic of the game, the network and the graphics. Finally, there's the application execution module, which is at the top of the hierarchy and will execute one of the available applications.<br>
I'll go through each of these modules in a little more detail.

## Game.

![The game module.](/rollback_game/images/game_module.png)

The game module follows the Model-View-Controller architecture to clearly separate the different systems in my game.

The controller part consists of an input manager whose role is to transmit user inputs to the model so that it can update itself. I'll come back to this in more detail when I talk about implementing rollback. 

The Model part refers to all the code controlling the logic and state of the game. The basis of this model is a LocalGameManager, which is a class responsible for updating the state of the game via its various systems. This class only works for local games, and has no dependencies on network code.<br>
The entire network code layer is added via the OnlineGameManager class, which inherits directly from LocalGameManager by adding a pointer to a network interface and a RollbackManager, which I'll talk about later.
This separation between the network code and the game logic code allows me to have a game that can be played online as well as locally. This is very useful for testing and debugging the game without being dependent on an Internet connection.

Finally, the View section consists of a GameRender with a pointer to a LocalGameManager to be able to directly read all game state data and draw it on screen.

## Network.

![The network module.](/rollback_game/images/network_module.png)

The network module is quite small, not least because photon encapsulates all the code that sets up the network connections. What's important in this module is the NetworkInterface. Indeed, if a class or module in my program needs to communicate via the network, it will pass through a pointer to an interface rather than directly to an implementation. This allows me to have several possible network implementations without having to change the rest of my program. 

The first implementation of the interface is called "SimulationNetwork" and is a mock. It's a fake network that I simulate by modifying the network delay and the percentage of lost packets. This allows me to test my game without an Internet connection, but also to test the robustness of my rollback code in more or less extreme scenarios.

The second implementation is called NetworkManager and is simply the network code used to run the online game via the photon realtime API.

## Client.

![The client module.](/rollback_game/images/client_module.png)

The client module simply consists of a single class linking the various systems seen so far. Its main attributes are the OnlineGameManager, the GameRenderer and a pointer to the network interface. Here too, the network interface pointer enables the client to act in exactly the same way, regardless of the behavior of the network implementation it is given. The client class acts globally as a kind of application. The advantage of this design choice is that I can instantiate two clients in a single executable without having to run two separate ones.

## Different executables.

![The application module.](/rollback_game/images/app_module.png)

The last module in my program is the application module. This consists of an interface called Application and an Engine class which owns the program window and a pointer to an application. The Engine is therefore the program's main class, which can execute any application given to it. So, in a simple, modular way, I can code several application uses for my game. I'm going to describe the three applications I used to develop my game.

### Simulation application.

The SimulationApplication is an application that runs two client instances using the SimulationNetwork implementation. The application has two render textures to give one to each client, which in turn gives it to its GameRenderer, so that each client's game is drawn separately but from the same window. This application is essential for debugging and testing the game, as it requires no Internet connection and can simulate extreme network scenarios.

<video controls>
  <source src="/rollback_game/videos/simul_app.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<p>The simulationApplication running two clients in the same window.</p>

By the way, this application was extremely useful when I was making my rollback prototypes, so I could access the debugger on both clients at the same time.

<video controls>
  <source src="/rollback_game/videos/test_rollback.mp4" type="video/mp4">
  Your browser does not support the video tag.
</video>
<p>The rollback prototype using the SimulationApplication.</p>

### Split screen application.

The SplitScreenApplication is very similar to the SimulationApplication in that it also instantiates two clients in the same window, but this time the clients have the network implementation using photon. This allows me to test my game in the real-life scenario for which it was originally designed, without having to open two separate executable files.

### Client application.

Finally the ClientApplication is the target build application which consists of a client using the photon network implementation. This is the executable that is built in release and put online for anyone to play with.

# Rollback implementation.

## Systems separation.

Input system
LocalGameManager
PlayerManager
ProjectileManager

frame tracy qui montre les différents system update

## Resimulate the game.

parler des methodes Rollback pour copier un ancien état.

Why not une frame sans confirm frame qui prouve le probleme de ressimuler depuis la frame 0.
Show tracy frames.

## Confirm frames.

Show tracy frames.

# Conclusion