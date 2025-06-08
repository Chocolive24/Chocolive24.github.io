---
title: "Bachelor's Project: Fluid Simulation Raytracing Rendering"
description: "A SPH fluid simulation rendered with a DXR raytracing pipeline."
startDate: "14 Mars 2025"
endDate: "18 July 2025"
top: "2"
type: "featured"
state: "active"
heroImage: "/fluid_simul_rendering/gifs/fluid_pp.gif"
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

The **aim** of the project is to **evaluate** the **feasibility** and **limitations of** using the **DXR API** for **implicit surface rendering in real time**, and to better understand the **strengths and weaknesses of this new technology**.

## Showcase
To investigate the question, I implemented **two distinct algorithmic approaches**. <br>
The **first** uses a **raymarching algorithm** within a **custom intersection shader**, enabling fluid rendering without the need to build a mesh.

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