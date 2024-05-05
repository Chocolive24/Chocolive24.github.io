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

![My project architecture.](/rollback_game/images/rollback_project_architecture.png)

My project follows the Model-View-Controller architecture to clearly separate the different systems in my game.

## Game.

## Network.

## Client.

The controller part consists of an input manager whose role is to transmit user inputs to the model so that it can update itself. I'll come back to this in more detail when I talk about implementing rollback. 

The Model part refers to all the code controlling the logic and state of the game. The basis of this model is a LocalGameManager, which is a class responsible for updating the state of the game via its various systems. This class only works for local games, and has no dependencies on network code.<br>
The entire network code layer is added via the OnlineGameManager class, which inherits directly from LocalGameManager by adding a pointer to a network interface and a RollbackManager, which I'll talk about later.
This separation between the network code and the game logic code allows me to have a game that can be played online as well as locally. This is very useful for testing and debugging the game without being dependent on an Internet connection.

Finally, the View section consists of a GameRender with a pointer to a LocalGameManager, to be able to directly read all game state data and draw it on screen.

render qui point game

## Different executables.

intro qui parle de la class Engine.

### Simulation application.

### Client application.

### Split screen application.

# Rollback implementation.

## Systems separation.

Input system
LocalGameManager
PlayerManager
ProjectileManager
Rappel sur le game renderer qui est à part.

## Resimulate the game.

Why not une frame sans confirm frame qui prouve le probleme de ressimuler depuis la frame 0.
Show tracy frames.

## Confirm frames.

Show tracy frames.

# Conclusion