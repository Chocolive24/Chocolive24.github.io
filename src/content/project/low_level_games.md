---
title: "Bopy's Puzzle Adventure + Runner Game"
description: "Two games developed using a custom low-level C++ engine, featuring image, UI, and text rendering, audio decoding and playback, a built-in tile editor and Emscripten for web builds."
startDate: "24 May 2023"
endDate: "21 June 2023"
top: "5"
type: "academic"
state: "completed"
heroImage: "/low_level_games/gifs/showcase.gif"
infos: {
  "/icones/people.svg": "1",
  "/icones/clock.svg": "1 months",
  "/icones/tools.svg": "C++/MiniFB",
  "/icones/calendar.svg": "June 2023",
}
tags: ["C++", "Low-Level Programming", "Game", "Engine", "Tools", "SAE"]
---

## Context
These **two games** were created during a **course module on low-level C++ programming** and the creation of **game tools and engines** at **SAE Institut Geneva** in the **1st year of the Games Programming bachelor's degree**.

During the module, **we learned** how to **manually load images**, **render text** from a **.ttf font file**, **decode and play audio files**, **save and read binary files** and finally make a **tilemap level editor**. We also needed to **make our game playable on the web** by using **Emscripten** to compile our **C++ to WebGL**. Our **game engine** does **not contain any dependencies except the MiniFB library** for drawing on screen **and stb_image** header file

The **two games** we had to create **served as a test of** our **game engine functionalities** and as a sample to show off our skills.

## Showcase
### Runner Game 
This first Game I made with my custom game engine is a simple runner game. 
Apart from the game music, which is a hand-decoded .wav file, all sounds were made manually by sending frequencies (Hz) to the computer speakers (e.g. 440Hz to make the note A)

Here is a short gameplay video of the game running on the web:
<iframe width="100%" height="420" src="https://www.youtube.com/embed/Zedc5LV1wis?si=gq9xvxYm2tIFNYjB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

### Bopy's Puzzle Adventure
This Second Game I made with the custom game engine is a puzzle game where you have to create a path using the tilemap editor of my game engine. I found the idea of ​​reusing my level editor within the gameplay of the game very funny.

Here is a short video demonstrating my tilemap editor running on the web:
<iframe width="100%" height="420" src="https://www.youtube.com/embed/JeDvzgQOT0o?si=DDkkDsoQycle3qlt" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Here is a short gameplay video of the game running on the web:
<iframe width="100%" height="420" src="https://www.youtube.com/embed/e4Zd-XKW_zc?si=T9ct8GYQKrH3vPL3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## What did I learn ?
- Programming in low-level C++
- Manually loading images
- Displaying text by decoding a .ttf file
- Decoding .wav files
- Creating a loop and assigning sound frequencies to a computer speaker
- Creating a tilemap editor from scratch
- Saving data in binary files
- Creating web builds for C++ projects using Emscripten