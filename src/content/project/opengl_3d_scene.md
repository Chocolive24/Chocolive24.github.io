---
title: "OpenGL 3D Scene in PBR"
description: "A 3D scene made in C++ with OpenGL with many computer graphics techniques including PBR"
startDate: "22 November 2023"
endDate: "14 February 2024"
top: "3"
type: "featured"
state: "completed"
heroImage: "/3d_scene/gifs/showcase.gif"
infos: {
  "/icones/people.svg": "1",
  "/icones/clock.svg": "2.5 months",
  "/icones/tools.svg": "C++/OpenGL",
  "/icones/calendar.svg": "February 2024",
}
tags: ["Computer Graphics", "OpenGL", "C++", "Engine", "3D", "SAE"]
relatedBlogs: ["How I created an OpenGL 3D scene."]
---

# <div class="text-center mt-16">Context</div>

<div class="max-w-4xl mx-auto text-justify">

This project is a **deferred rendering 3D scene** with **Physically Based Rendering** (PBR) and **Image-Based Lighting** (IBL), built with a **custom engine from scratch** using **OpenGL**. I developed it during my **second-year** Computer Graphics module at **SAE Institute Geneva**.

The **goal** was to explore **rasterization-based rendering**. We **started with basics** like rendering a **triangle** and  **matrix operations**, **then** advanced to techniques such as **shadow mapping**, **deferred shading**, **PBR**, and **IBL**. **By the end**, we combined these to **create a complete 3D scene**, showcasing our understanding of graphics rendering.

</div>

# <div class="text-center mt-16">Showcase</div>

<div class="max-w-4xl mx-auto text-center">

Here is a short showcase video of my scene:

</div>

<iframe width="100%" height="608" src="https://www.youtube.com/embed/0zDGHmd1_Dg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="max-w-4xl mx-auto text-center">

Here's a video showing the different samples I created while learning OpenGL during the course module:

</div>

<iframe width="100%" height="608" src="https://www.youtube.com/embed/a2DS3KvjSz0?si=bJU4o-kN1ZQF0ibe" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="max-w-4xl mx-auto text-center">

Here are different renderings of my scene:

</div>

<div style="text-align:center">
  <img src="/3d_scene/images/scene_cover.png" alt="" />
  <img src="/3d_scene/images/gold_sphere_cover.png" alt="" />
  <img src="/3d_scene/images/chest_cover.png" alt="" />
  <p style="margin-top: -30px"><em></em></p>
</div>

# <div class="text-center mt-16">Features</div>

<div class="max-w-4xl mx-auto text-justify">

- OBJ Model Loading
- Instancing
- Face and Frustum Culling
- Cubemap
- Deferred Shading
- Screen Space Ambient Occlusion (SSAO)
- Shadow Mapping
    - Directional Light Shadow Map
    - Point Light Shadow Cubemap
- Physically Based Rendering (PBR)
    - Image Based Lighting (IBL)
    - Directional Light
    - Point Light
- Emissive Textures Mapping
- Physically Based Bloom
- High Dynamic Range (HDR) + Tone Mapping + Gamma Correction

</div>

# <div class="text-center mt-16">What did I learn ?</div>

<div class="max-w-4xl mx-auto text-justify">

- The basics of graphics programming
- The OpenGL API
- Rasterisation-based 3D rendering
- Deferred Rendering 
- Physically Based Rendering (PBR) and Image Based Lighting (IBL)
- The rendering equation and a way to solve it using PBR
- A better understanding and use of abstractions
- Use of RAII in C++ to throw error logs and ensure proper resource cleanup by allowing the programmer to control destruction order

</div>