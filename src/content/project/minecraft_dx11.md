---
title: "Minecraft clone in DirectX11"
description: "A minecraft clone that I made by myself in C++ and DirectX11 in two weeks."
startDate: "15 December 2023"
endDate: "29 December 2023"
top: "2"
type: "personal"
state: "active"
heroImage: "/personal/minecraft_dx11/gifs/showcase.gif"
infos: {
  "/icones/people.svg": "1",
  "/icones/clock.svg": "2 weeks",
  "/icones/tools.svg": "C++/DX11/HLSL",
  "/icones/calendar.svg": "December 2023",
}
tags: ["Computer Graphics", "Game", "C++", "DirectX11", "HLSL", "3D", "Personal project"]
---

## Context
I created this project during my **personal time**, inspired by an assignment from our computer graphics course. The goal was to build a simple first-person 3D scene in DirectX 11 with collision detection against cubes. I decided to take it a step further and **recreate a minimalist Minecraft-like world with a player controller**. Over **two weeks**, I developed this scene on top of the code base we had built in class.

## Showcase
Here is a short video of the scene (The water rendering is not finished but the physics is here):
<iframe width="100%" height="420" src="https://www.youtube.com/embed/IjXiVTGUb8o?si=RgZeCKEr11z78YsO" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## What did I learn ?
- DirectX 11 window creation and management
- Writing shaders in HLSL
- Using an atlas to store textures
- Using perlin noise to generated procedural envrionnement
- Developping a first person player controller which collides with cubes