---
title: "Bachelor's Project: Fluid Simulation Raytracing Rendering"
description: "A SPH fluid simulation rendered with a DXR raytracing pipeline."
startDate: "14 Mars 2025"
endDate: "18 July 2025"
top: "2"
type: "featured"
state: "active"
heroImage: "/fluid_simul_rendering/gifs/raymarching.gif"
infos: {
  "/icones/people.svg": "1",
  "/icones/clock.svg": "5 months",
  "/icones/tools.svg": "C++/DX12/DXR/HLSL/Compute Shaders",
  "/icones/calendar.svg": "July 2025",
}
tags: ["Computer Graphics", "C++", "DirectX12", "DXR", "3D", "HLSL", "Compute Shaders", "Raytracing", "SAE"]
---

# <div class="text-center mt-16">Context</div>

<div class="max-w-4xl mx-auto text-justify">

This project is the **practical component** of my **bachelor’s thesis**.
Its goal was to explore **how to represent dynamic implicit fluids (SPH simulation) inside a real-time raytracing pipeline using the DXR API**.
I compared **two rendering strategies**: **volumetric raymarching** and **surface reconstruction with marching cubes**. Both were fully integrated into a **DXR pipeline with recursive ray tracing** for realistic **reflection, refraction, and absorption.**

The **SPH** simulation was originally **developed by fellow Games Programming student** at SAE Institute Geneva, **Constantin Verine**, as part of his bachelor's project.  
[Click here to view his project](https://cochta.github.io/work/nested/sph/)  

**Together**, we **converted his CPU-based simulation into a compute shader**, enabling me to render it using **DXR ray tracing**.

</div>

# <div class="text-center mt-16">Raymarching</div>

<div class="max-w-4xl mx-auto text-justifiy">

The raymarching approach directly samples the 3D density field of the SPH fluid, capturing fine volumetric details such as soft shadows, absorption, and smooth refractions.
It produces visually rich results, though at a higher performance cost due to heavy sampling.

Here is a video showcasing the final result of the Raymarching approach:

</div>

<iframe width="100%" height="608" src="https://www.youtube.com/embed/Pw_ZO3yZ1KA?si=nrDLmG1IJ5lLWNSa" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="max-w-4xl mx-auto text-justify">

# <div class="text-center mt-16">Marching Cubes</div>

The marching cubes approach reconstructs a dynamic mesh from the density field each frame.
This method leverages DXR’s hardware-accelerated ray–triangle intersections, making it more efficient, but at the cost of less volumetric detail and flatter shadows.

Here is a video showcasing the final result of the Marching Cubes approach:

</div>

<iframe width="100%" height="608" src="https://www.youtube.com/embed/p1g26_zB8Lo?si=l71Fzxm5sCajZ9rH" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# <div class="text-center mt-16">Rendering Comparison</div>

<div style="text-align:center">
    <table>
    <tr>
        <td> <img src="/fluid_simul_rendering/images/raymarching1.png" width=550/>
        <td>  <img src="/fluid_simul_rendering/images/marchingcubes1.png" width=550/>
    </tr>
    <tr>
        <td> <img src="/fluid_simul_rendering/images/raymarching2.png" width=550/>
        <td>  <img src="/fluid_simul_rendering/images/marchingcubes2.png" width=550/>
    </tr>
    </table>
</div>

# <div class="text-center mt-16">What did I learn ?</div>

<div class="max-w-4xl mx-auto text-justify">

- Using the DXR raytracing pipeline
- Creating custom intersection shaders to define a surface intersection.
- Creating custom anyhit shaders to render volumetric shadows.
- The main optical properties of a fluid and their implementation in raytracing
  - Reflection
  - Refraction
  - Absorption
- The raymarching algorithm
- The Marching Cubes algorithm
- Change the values of a mesh's vertices in real time in the DXR acceleration structure
- Use compute shaders with DirectX
  - Using StructuredBuffer and AppendBuffer
- Storing and sampling physical simulation data in 3D textures 
- Adapting a particle-based CPU physical simulation to the GPU in Compute Shaders
- Creating a bitonic sort iterative algorithm on the GPU

</div>