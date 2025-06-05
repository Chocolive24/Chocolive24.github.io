---
title: "Penguin Card Master"
description: "A card-based roguelite prototype where you battle through a procedurally generated dungeon using your deck to defeat enemies."
startDate: "14 April 2023"
endDate: "12 May 2023"
top: "3"
type: "academic"
state: "completed"
heroImage: "/penguin_card_master/showcase.gif"
infos: {
  "/icones/people.svg": "1",
  "/icones/clock.svg": "1 month",
  "/icones/tools.svg": "Unity/C#",
  "/icones/calendar.svg": "May 2023",
}
tags: ["Game", "Procedural Generation", "IA", "Game Design", "2D", "Unity", "Unity EditorScripting", "Tools", "SAE", "C-Sharp"]
---

## Context
This project was carried out during a **course module** on **procedural generation** and **IAs** at **SAE Institut Geneva** in the **1st year of the Games Programming bachelor's degree**.

The **constraints** on which we were noted were:
- Create a **rogue lite** game
- Create a **procedural dungeon generation tool** in the **Unity inspector**
- Create **IAs**
- Maintain a **GDD**

For the game, I decided to make a **rogue lite deck builder with turn-based combat inspired by tactical RPG games** like Fire Emblem.

## Showcase
Here is a **gameplay** video of my game:
<iframe width="100%" height="420" src="https://www.youtube.com/embed/PDqA6sDO2w4?si=_1s4FAUVp0fVSD3q" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Procedural Generation
My **procedural generation algorithm** is **inspired** by the one of **"The Binding of Isaac"**, which takes the form of the **dungeons** in the **2D Zelda games**. In short, it's a set of square rooms that connect to each other. **Several rooms** are special - there's always a **shop** and a **boss** on each floor, and a few other special rooms are also chosen at random.

To understand and implement the algorithm for the Binding of Isaac game I took **inspiration** from the **blog post** by ‘BorisTheBrave’: [Read it here](https://www.boristhebrave.com/2020/09/12/dungeon-generation-in-binding-of-isaac/)

Here is a short **showcase** video of my **procedural dungeon generation tool in the Unity inspector**:
<iframe width="100%" height="420" src="https://www.youtube.com/embed/tpkQND3AeNM?si=SzvakA5QO-oIHU8P" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## IAs
For the behaviour of my AIs, I chose to code **behaviour trees** because this is a mathematical model widely used in the behaviour of AIs in the video game industry. What's more, this type of model adapts very well to the turn-based combat gameplay of my game. The behaviour tree was **coded 100% by myself in C#** with the help of my teacher Sébastien Albert.

<div style="text-align:center">
  <img src="/penguin_card_master/images/behavior_tree.png">
  <p style="margin-top: -30px"><em>Diagram of the parent behaviour tree for my IAs.<br> 
  Each AI inherits this behaviour tree and can override each leaf node function or add nodes if necessary, like the ‘Spawner’ enemy which adds a ‘SpawnEnnemy’ leaf node.</em></p>
</div>

For the **pathfinding algorithm** I've coded an **A-Star** because it's one of the most popular and efficient pathfinding algorithms.

Here's a short **video** showing the **behaviour of several AIs** in combat:
<iframe width="100%" height="420" src="https://www.youtube.com/embed/Tc9xUMNvHec?si=B8jkFocYBZLCjGmN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>


## GDD
You can **read** the **GDD** I wrote for my game with Google Slide [here](https://docs.google.com/presentation/d/1fE0QNsrwNdopKeYQXiia2O8aiCSJ8eZCEZVGQlP1yRI/edit?usp=sharing).

<div style="text-align:center">
  <img src="/penguin_card_master/images/gdd_screen.png">
  <p style="margin-top: -30px"><em>Screenshot of a diagram I made in my GDD to explain the gameplay of combat in the game.</em></p>
</div>

## What did I learn ?
- Several procedural generation algorithms are currently in use, such as:
  - Binary Space Partitioning
  - Markov Chain
  - ‘The Binding of Isaac’ like dungeon generation (the one I implemtented)
- How the mathematical model behind graphs and trees works
- How a Behaviour Tree works and is implemented from scratch
- Several pathfinding algorithms seen in class:
  - BFS
  - Dijkstra
  - A* (the one I implemented)
- Unity Editor Scripting to create tools
- The usefulness of ScriptableObjects
- Avoiding dependencies between game objects
- Using Managers and Controllers
- Creating a card and deck building system
- Create a turn-based combat system on a grid