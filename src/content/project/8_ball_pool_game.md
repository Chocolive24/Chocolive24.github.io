---
title: "Multiplayer online 8-ball pool game in C++."
description: "A 8-ball pool game playable online made in C++ with SFML."
startDate: "15 March 2024"
endDate: "05 April 2024"
top: "4"
type: "academic"
state: "completed"
heroImage: "/network_turn_based_game/gifs/gameplay.gif"
infos: {
  "/icones/people.svg": "1",
  "/icones/clock.svg": "3 weeks",
  "/icones/tools.svg": "C++/Python/FastAPI/Docker/SFML",
  "/icones/calendar.svg": "March 2024",
}
tags: ["Network", "Game", "2D", "C++", "Python", "FastAPI", "Docker", "SFML", "SAE"]
relatedBlogs: ["The network protocol of my C++ turn-based game."]
---

## Context
This project was carried out during the **first half of a course module on Computer Network** at **SAE Institut Geneva** as part of the **second year of the Bachelor's degree in Games Programming**. This half of the module **focused on** **programming network applications (packets, protocols, lobbies, etc.) communicating with a database**.

We had to make an **online turn-based game** **using** our [**from scratch physics engine**](/project/2d-physics-engine) created during the first course module of the same year. We had to **create a network protocol** for the gameplay, add a **basic ranking system with a database** and add a **lobby system**.

I decided to create a **8 ball pool game** where each **victory increases** the player's **elo** while each **defeat decreases** his **elo**.

## Showcase
<div style="text-align:center">
  <video controls>
    <source src="/network_turn_based_game/videos/demo.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p style="margin-top: -30px"><em>Demo of my 8-ball pool. It shows two players (blue and red windows) playing a network game</em></p>
</div>

### Client connection and identification.
If the **player already has a name** in the game, they can **log in directly**. **Otherwise**, they must **create a new name** to be **added to the database** containing the player rankings.
<div style="text-align:center">
  <img src="/network_turn_based_game/gifs/client_identification.gif" width="400" height="200" alt="Demo of client identification in my app." />
  <p style="margin-top: -30px"><em>Demo of client identification in my app.</em></p>
</div>

### Joining a lobby.
When the player presses the ‘Play’ button, the **server searches for the first available lobby** and puts the client on hold for another player.
<div style="text-align:center">
  <img src="/network_turn_based_game/gifs/lobby.gif" alt="Demo of two clients joining a lobby." />
  <p style="margin-top: -30px"><em>Demo of two clients joining a lobby.</em></p>
</div>

### End of game and update of players' elo.
When the **game ends**, the **winner gains elo points** and the **loser loses elo points**. Players are then redirected to the main menu, where they can **quickly start a new game**.
<div style="text-align:center">
  <video controls>
    <source src="/network_turn_based_game/videos/end_game.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <p style="margin-top: -30px"><em>Demo of a player winning the game + the ability to restart a game easily.</em></p>
</div>

## Network code documentation.

If you are intersted in the network code I made for my game, you can check the documentation : <br>
[turn-based game network code documentation](/network_api_doc/html/index.html)

## What did I learn ?
- The basics of network programming.
  - sending and receiving packets.
  - making and handling HTTP requests using FastAPI (in python) and SFML (in C++).
  - The theoretical basis of network layers
- Creating my own network protocol for gameplay.
- Implementing a simple lobby system.
- Using a SQL database through an Object-Relational Mapper (ORM).
- Creating a graphical interface to test my database with PySide (Qt binding for Python).
- Containerizing the project using Docker to ensure consistent development and deployment environments.
- Document my API using Doxygen.