---
title: "Penguin battle !"
description: "A multiplayer online brawler-style game with rollback made in C++ where two penguins fight with snowballs. The game's physics engine is my own from scratch engine"
startDate: "05 April 2024"
endDate: "26 April 2024"
top: "1"
type: "academic"
state: "completed"
heroImage: "/rollback_game/gifs/gameplay.gif"
infos: {
  "/icones/people.svg": "1",
  "/icones/clock.svg": "3 weeks",
  "/icones/tools.svg": "C++/Photon Realtime/Raylib",
  "/icones/calendar.svg": "April 2024",
}
tags: ["Network", "Rollback", "Game", "2D", "C++", "Photon Realtime", "SAE"]
relatedBlogs: ["How did I implement rollback for my online C++ game."]
---

## Context
This project was carried out during the **second half of a course module on Computer Network** at **SAE Institut Geneva** as part of the **second year of the Bachelor's degree in Games Programming**. This half of the module **focused on** **rollback and determinism in game simulation**.

We had to make an **online game** **using** our [**from scratch physics engine**](/project/2d-physics-engine) created during the first course module of the same year. We had to **add rollback over our network protocol** and a **checksum** to **ensure** the **integrity of our simulation**.

I decided to create a **brawler-style game** where you take on another player by **shooting snowballs** at them, with the aim of **pushing your opponent** to the **sharp edges** of the arena.

## Showcase
Here's a quick gameplay of my game in real conditions:
<div style="text-align:center">
  <video controls>
    <source src="/rollback_game/videos/gameplay.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
</div>

## Project Architecture
I've put a lot of effort into having a well-structured code architecture so that I can easily create test and debug applications to lighten the complexity of implementing the rollback system:
<div style="text-align:center">
  <img src="/rollback_game/images/rollback_project_architecture.png" alt="My project architecture" />
  <p style="margin-top: -30px"><em>My project architecture</em></p>
</div>

The architecture is divided into 4 modules:
- The Game module, which follows a Model-View-Controller architecture
- The Network module, which uses an interface to play the game with a mock network for debugging or simply playing online.
- The Client module, which provides the link between the game module and the network module
- The Application module, which uses an interface to create several types of application, in particular to create debugging applications.

### Simulation Application
This application contains both clients in the same window and uses a mock network implementation to create any type of network condition:
<div style="text-align:center">
  <video controls>
    <source src="/rollback_game/videos/simul_app.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p style="margin-top: -30px"><em>The simulationApplication running two clients in the same window using the mock network.</em></p>
</div>

By the way, this application was extremely useful when I was making my rollback prototypes, so I could access the debugger on both clients at the same time.
<div style="text-align:center">
  <video controls>
    <source src="/rollback_game/videos/test_rollback.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p style="margin-top: -30px"><em>The rollback prototype using the SimulationApplication.</em></p>
</div>

### Split Screen Application
This application is similar to the simulation application, but uses the implementation of the real network to test the game under real network conditions.
<div style="text-align:center">
  <video controls>
    <source src="/rollback_game/videos/split_screen_app.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p style="margin-top: -30px"><em>The SplitScreenApplication running two clients in the same window using the network.<br>
  I can easily change the delay and packet loss values to test my game in very poor network conditions.</em></p>
</div>

### Client Application
Finally the ClientApplication is the target build application which consists of a client using the real network implementation. This is the executable that is built in release and put online for anyone to play with.
<div style="text-align:center">
  <video controls>
    <source src="/rollback_game/videos/client_app.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p style="margin-top: -30px"><em>Two ClientApplication each running one client using the network.</em></p>
</div>

## What did I learn ?
- Implement a rollback system
- Ensure the integrity of a simulation via a checksum
- Separate the various game systems to resimulate them individually
- Separate graphics logic from game logic.
- Use interfaces to create mock implementations or different types of applications
- Use photon real time
- Use raylib

## Blog Post
I've written a blog post on my rollback implementation and my code architecture.
[Read it here](/blog/how-did-i-implement-rollback-for-my-online-c-game)