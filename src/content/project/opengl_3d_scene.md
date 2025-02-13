---
title: "OpenGL 3D scene in PBR"
description: "A 3D scene made in C++ with OpenGL with many computer graphics techniques including PBR"
startDate: "22 November 2023"
endDate: "14 February 2024"
top: "1"
type: "featured"
state: "completed"
heroImage: "/3d_scene/images/scene_cover.png"
infos: {
  "/icones/people.svg": "1",
  "/icones/clock.svg": "2.5 months",
  "/icones/tools.svg": "C++/OpenGL",
  "/icones/calendar.svg": "February 2024",
}
tags: ["Computer Graphics", "OpenGL", "C++", "Engine", "3D", "SAE"]
---

## Context
This project is a deferred rendering 3D scene featuring Physically Based Rendering (PBR) and Image-Based Lighting (IBL), developed using a custom graphics engine built from scratch with OpenGL. I completed this project during a Computer Graphics module in the second year of my bachelor's degree at SAE Institute Geneva.

The primary goal of the project was to explore and implement various rasterization-based rendering techniques. We began with fundamental tasks, such as rendering a simple triangle and learning matrix operations for 3D transformations. Gradually, we progressed to advanced shading techniques, including shadow mapping, deferred shading, PBR, and IBL. By the end of the module, we applied all these techniques to create a full 3D scene, demonstrating our understanding of graphics rendering workflows.

## Showcase
Here is a short showcase video:
<iframe width="750" height="420" src="https://www.youtube.com/embed/0zDGHmd1_Dg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Here are different renderings of my scene:
<div style="text-align:center">
  <img src="/3d_scene/images/scene_cover.png" alt="" />
  <img src="/3d_scene/images/gold_sphere_cover.png" alt="" />
  <img src="/3d_scene/images/chest_cover.png" alt="" />
  <p style="margin-top: -30px"><em></em></p>
</div>

<br>Here are all the techniques and functionalities contained in my scene:
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

## What did I learn ?
- The basics of graphics programming
- The OpenGL API
- Rasterisation-based 3D rendering
- Deferred Rendering 
- Physically Based Rendering (PBR) and Image Based Lighting (IBL)
- The rendering equation and a way to solve it using PBR
- A better understanding and use of abstractions