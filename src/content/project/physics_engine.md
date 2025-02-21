---
title: "2D Physics Engine"
description: "A 2D physics engine made in C++ designed for performance and realtime safety"
startDate: "04 October 2023"
endDate: "11 November 2023"
top: "1"
type: "academic"
state: "completed"
heroImage: "/physics_engine_opti/gifs/bouncing_shapes.gif"
infos:
  "/icones/people.svg": "1"
  "/icones/clock.svg": "1.5 months"
  "/icones/tools.svg": "C++/SDL2/Tracy"
  "/icones/calendar.svg": "November 2024"
tags:
  - "Physics"
  - "Optimization"
  - "C++"
  - "Engine"
  - "2D"
  - "SAE"
---

import YoutubePlayer from '/src/components/YoutubePlayer.astro';

## Context

## Showcase
Here is a short showcase video:
<iframe width="750" height="420" src="https://www.youtube.com/embed/rNb0OLZd4wg?si=K-_6U8cB3IAWXdEx" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<YoutubePlayer id="rNb0OLZd4wg" />

<button id="playButton">Play Physics Engine 2D</button>

<div id="gameContainer" style="display:none;">
  <iframe frameborder="0" src="https://itch.io/embed-upload/9943561?color=04476f" allowfullscreen="" width="750" height="750">
    <a href="https://chocolive.itch.io/physics-engine-2d">Play Physics Engine 2D on itch.io</a>
  </iframe>
</div>

<style>
  /* Style the button */
  #playButton {
    width: 200px;         /* Set width to make it square */
    height: 200px;        /* Set height to match the width */
    background-color: #04476f;  /* Set background color */
    color: white;         /* White text color */
    border: 2px solid #033c4c; /* Border to define the square shape */
    border-radius: 15px;  /* Optional: rounded corners */
    font-size: 18px;      /* Adjust font size */
    text-align: center;   /* Center text */
    cursor: pointer;     /* Change cursor to pointer */
    display: flex;        /* Use flex to center content */
    justify-content: center; /* Center horizontally */
    align-items: center;  /* Center vertically */
    transition: background-color 0.3s ease; /* Smooth color transition */
  }

  /* Hover effect */
  #playButton:hover {
    background-color: #033c4c; /* Darken the button on hover */
  }
</style>

<script>
  // Get the button and the container where the game iframe will appear
  const playButton = document.getElementById('playButton');
  const gameContainer = document.getElementById('gameContainer');

  // Add an event listener to show the iframe when the button is clicked
  playButton.addEventListener('click', () => {
    gameContainer.style.display = 'block'; // Show the iframe
    playButton.style.display = 'none';    // Hide the button
  });
</script>


<iframe frameborder="0" src="https://itch.io/embed/2219858" width="552" height="167"><a href="https://chocolive.itch.io/card-master-penguin">Card Master Penguin by Chocolive</a></iframe>

## What did I learn ?