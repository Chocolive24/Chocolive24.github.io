---
title: "2D Physics Engine"
description: "A 2D physics engine made in C++ designed for performance and realtime safety"
startDate: "04 October 2023"
endDate: "11 November 2023"
top: "2"
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
  - "Low Level"
  - "Engine"
  - "2D"
  - "SAE"
relatedBlogs: ["The optimisations I made to my 2D C++ physics engine"]
---

# <div class="text-center mt-16">Context</div>

<div class="max-w-4xl mx-auto text-justify">

This physics engine was programmed during a **course module** on **physics**, **maths**, **optimisation**, **CPU architecture**, **Assembly** and **profiling** at **SAE Institut Geneva** in the **2nd year of a bachelor's degree in Games Programming**.

The **aim** was to **write** the engine as an **API** that anyone could use, and to **optimise it** accordingly. The engine had to be capable of **running** a sample with **1000 colliders in trigger** mode at a minimum of **60fps**.

We wrote our **own maths library** as well as **standard C++ classes** such as **smart pointers** in order to use our **custom allocators** to **profile** the **program's memory management**.

</div>

# <div class="text-center mt-16">Showcase</div>

<div class="max-w-4xl mx-auto text-center">

Here is a short showcase video:

</div>

<iframe width="100%" height="608" src="https://www.youtube.com/embed/Z83k0WTJZsk?si=22S3ad54ErI-Jlrm" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="max-w-4xl mx-auto text-justify">

The main optimisations made to my engine are:
- The creation of a broadphase with a Quadtree
- Pre-allocate as much memory as possible whenever possible
- Use stack memory as much as possible
- Use data structures that store objects linearly in memory to speed up memory accesses.

Here is a comparison of the performance of the sample of 1000 trigger colliders before and after optimisations:

</div>

<div style="text-align:center;">
    <table>
    <tr>
        <td> <img src="/physics_engine_opti/gifs/1000Circles.gif" width=575/>
        <p style="margin-top: -30px"><em>1000 circle colliders before optimizations.</em></p></td>
        <td>  <img src="/physics_engine_opti/gifs/FullOpti.gif" width=575/>
        <p style="margin-top: -30px"><em>1000 circle colliders after optimizations.</em></p></td>
    </tr>
    </table>
    <p style="margin-top: -60px"><em>GIFs are at 30 fps, so it's hard to tell whether the right-hand version is actually fluid. </em></p></td>
</div>

<div class="max-w-4xl mx-auto text-center">

Let's have a look at some frame images from Tracy:

</div>

<div style="text-align:center">
  <img src="/physics_engine_opti/images/noBroadFrame.png">
  <p style="margin-top: -30px"><em>One frame of the version without optimizations.</em></p>
</div>

<div style="text-align:center">
  <img src="/physics_engine_opti/images/FullOptiFrame.png">
  <p style="margin-top: -30px"><em>One frame with the final version with optimizations.</em></p>
</div>

<div class="max-w-4xl mx-auto text-center">

Let's take a look at the time saved when executing the world's "Update" function:

</div>

| **World Update**       | **Mean (ms)** | **Median (ms)** | **Std Dev (ms)** | **Observations** |
|------------------------|---------------|-----------------|------------------|------------------|
| Without optimizations  | 792.32        | 828.95          | 157.16           | 16               |
| With optimizations     | 2.64          | 2.44            | 0.622            | 1291             |
**Table: Comparison of World Update Time with and without Optimizations**

| **Mean Difference (ms)** | **Standard Error (ms)** | **Margin of Error (ms)** | **Lower Limit (ms)** | **Greater Limit (ms)** |
|--------------------------|-------------------------|--------------------------|----------------------|------------------------|
| 808.32                   | 23.21                   | 47.71                    | 760.61               | 856.03                 |
**Table: Difference of Means and Confidence Interval (95% Confidence Level)**

<div class="max-w-4xl mx-auto text-center">

With all the changes made to my engine I saved between 760ms and 856ms.

</div>

# <div class="text-center mt-16">Features</div>

<div class="max-w-4xl mx-auto text-justify">

- Creation of bodies.
  - Attributes:
    - Position
    - Velocity
    - Mass
  - Dynamic bodies:
    - Forces can be applied to them.
    - Physical collision calculations.
  - Kinematic bodies
    - Not impacted by forces.
    - No physical collisions.
  - Static bodies
    - Don't move.
    - Physical collision calculations.
- Creation of collider:
  - Attributes
    - Shape
      - Circle
      - Rectangle
      - Convex Polygon (only work for trigger for now)
  - Restitution
  - Trigger mode
- Broad Phase with Quadtree

</div>

# <div class="text-center mt-16">Web version (still in prototype)</div>

<div class="mb-5 flex flex-col items-center mt-4" style="position: relative;">
  <!-- Button -->
  <button 
    id="launchButton"
    class="btn btn-outline text-lg w-full max-w-xs mb-4"
    onclick="document.getElementById('iframeContainer').style.display = 'block'; this.style.display = 'none';"
  >
    Launch Physics Engine 2D
  </button>

  <!-- Hidden iframe container -->
  <div id="iframeContainer" style="display: none; width: 100%;">
    <iframe
      frameborder="0"
      src="https://itch.io/embed-upload/9943561?color=04476f"
      width="100%"
      height="800"
    >
    </iframe>
  </div>
</div>


<!-- <div id="gameContainer" style="display:none;">
  <iframe frameborder="0" src="https://itch.io/embed-upload/9943561?color=04476f" allowfullscreen="" width="100%" height="750">
    <a href=>Play Physics Engine 2D on itch.io</a>
  </iframe>
</div> -->

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


<!-- <iframe frameborder="0" src="https://itch.io/embed/2219858" width="552" height="167"><a href="https://chocolive.itch.io/card-master-penguin">Card Master Penguin by Chocolive</a></iframe> -->

# <div class="text-center mt-16">What did I learn ?</div>

<div class="max-w-4xl mx-auto text-justify">

- Basics of Calculus
- Basics of Linear Algebra
- Basics of Physics
- Basics of Assembly language
- Choose and use the right C++ data structures in a given context
- Low level C++ API programming
- Template programming
- Writing custom allocators
- Profiling code and memory management
- Optimisation tricks
  - Memory layout
  - Cache hit
  - Quadtree
- How a modern CPU works
- Performing statistical tests

</div>