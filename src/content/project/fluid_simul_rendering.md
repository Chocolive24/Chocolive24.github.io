---
title: "Bachelor's Project: Fluid Simulation Raytracing Rendering"
description: "A SPH fluid simulation rendered with a DXR raytracing pipeline."
startDate: "14 Mars 2025"
endDate: "18 July 2025"
top: "2"
type: "featured"
state: "active"
heroImage: "/fluid_simul_rendering/gifs/fluid_pp2.gif"
infos: {
  "/icones/people.svg": "1",
  "/icones/clock.svg": "5 months",
  "/icones/tools.svg": "C++/DX12/DXR/HLSL/Compute Shaders",
  "/icones/calendar.svg": "July 2025",
}
tags: ["Computer Graphics", "C++", "DirectX12", "DXR", "3D", "HLSL", "Compute Shaders", "Raytracing", "SAE"]
---

## Context
This project is the **practical part** of my **bachelor's thesis**, which explores the question:<br>
"**What are the challenges of representing a dynamic and implicit fluid in a raytracing pipeline using the DXR API?**"
The analysis is **based on a particle-based fluid simulation**.

The project is **still under development**.

The **aim** of the project is to **evaluate** the **feasibility** and **limitations of** using the **DXR API** for **implicit surface rendering in real time**, and to better understand the **strengths and weaknesses of this new technology**.

The **SPH** simulation was originally **developed by fellow Games Programming student** at SAE Institute Geneva, **Constantin Verine**, as part of his bachelor's project.  
[Click here to view his project](https://cochta.github.io/work/nested/sph/)  
**Together**, we **converted his CPU-based simulation into a compute shader**, enabling me to render it using **DXR ray tracing**.

## Showcase
To investigate the question, I implemented **two distinct algorithmic approaches**. <br>
The **first** uses a **raymarching algorithm** within a **custom intersection shader**, enabling fluid rendering without the need to build a mesh.

Here is a **raymarching rendering** with a **large smoothing radius** for the particles:
<iframe width="100%" height="420" src="https://www.youtube.com/embed/i1z3RcGXBNA?si=gUeDuqKPVRSd2x3X" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Here is another  **raymarching rendering** with a **smaller smoothing radius** for the particles.<br>
The **physical simulation doesn't work very well**, but the **raymarching rendering is more realistic**:
<iframe width="100%" height="420" src="https://www.youtube.com/embed/jyAWnqkJfKQ?si=Js-CVOdkKFeZpufq" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

The **second approach** constructs a mesh using the **marching cubes algorithm**, allowing the pipeline to leverage **hardware-accelerated ray-triangle intersections**.

## What did I learn ?
- Using the DXR raytracing pipeline
- Creating custom intersection shaders
- The main optical properties of a fluid and their implementation in raytracing
  - Reflection
  - Refraction
  - Absorption
  - Scattering
- The raymarching algorithm
- The Marching Cubes algorithm
- Change the values of a mesh's vertices in real time in the DXR acceleration structure
- Use compute shaders with DirectX
  - Using StructuredBuffer and AppendBuffer
- Storing and sampling physical simulation data in 3D textures 
- Adapting a particle-based CPU physical simulation to the GPU in Compute Shaders
- Creating a bitonic sort iterative algorithm on the GPU