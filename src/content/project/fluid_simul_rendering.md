---
title: "Bachelor's Project: DXR Fluid Simulation Rendering"
description: "An SPH fluid simulation rendered with Raymarching and Marching Cubes in a custom DXR Pipeline."
startDate: "14 Mars 2025"
endDate: "18 July 2025"
top: "2"
type: "featured"
state: "completed"
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

<iframe width="100%" height="608" src="https://www.youtube.com/embed/qefyXbBzkko?si=EJM_JlENdojwnl-R" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="max-w-4xl mx-auto text-justify">

# <div class="text-center mt-16">Rendering Comparison</div>

The images below highlight the contrast between the two methods.
Raymarching (left) delivers a smoother, more volumetric appearance with realistic refractions and shading, while Marching Cubes (right) provides sharper geometry and more stable performance, but with flatter visual detail.

</div>

<div style="text-align:center;">
  <table style="margin:0 auto; border-collapse:separate; border-spacing:6px 2px; table-layout:fixed;">
    <thead>
      <tr>
        <th style="font-style:bold; font-weight:600; padding-bottom:2px;">Raymarching</th>
        <th style="font-style:bold; font-weight:600; padding-bottom:2px;">Marching Cubes</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>
          <img src="/fluid_simul_rendering/images/raymarching1.png"
               alt="Raymarching view 1"
               style="width:100%; max-width:550px; height:auto; border-radius:8px;">
        </td>
        <td>
          <img src="/fluid_simul_rendering/images/marchingcubes1.png"
               alt="Marching Cubes view 1"
               style="width:100%; max-width:550px; height:auto; border-radius:8px;">
        </td>
      </tr>
      <tr>
        <td>
          <img src="/fluid_simul_rendering/images/raymarching2.png"
               alt="Raymarching view 2"
               style="width:100%; max-width:550px; height:auto; border-radius:8px;">
        </td>
        <td>
          <img src="/fluid_simul_rendering/images/marchingcubes2.png"
               alt="Marching Cubes view 2"
               style="width:100%; max-width:550px; height:auto; border-radius:8px;">
        </td>
      </tr>
    </tbody>
    <thead>
      <tr>
        <th style="font-style:bold; font-weight:600; padding-bottom:2px;">Raymarching</th>
        <th style="font-style:bold; font-weight:600; padding-bottom:2px;">Marching Cubes</th>
      </tr>
    </thead>
  </table>
</div>

<div class="max-w-4xl mx-auto text-justify">

# <div class="text-center mt-16">SPH Simulation</div>

The SPH fluid simulation was originally developed by Constantin Verine as part of his bachelor’s project. Together, we adapted his CPU implementation into a GPU compute shader, enabling real-time execution within the DXR pipeline. To optimize performance, we introduced a hash grid for neighbor search and implemented an iterative bitonic sort, which efficiently reorders particles in parallel to accelerate spatial queries and interaction calculations.

Here is a video showcasing the simulation with 20'000 particles:

</div>

<iframe width="100%" height="608" src="https://www.youtube.com/embed/5ejY0I5tawA?si=NJTB5f2vZ6wVWHRN" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="max-w-4xl mx-auto text-justify">

# <div class="text-center mt-16">Performance Evaluation</div>

As part of my bachelor’s thesis, I established a testing protocol to measure the average frame time of both algorithms at different rendering quality levels. The table below summarizes these results, offering a concise overview of how performance scales with visual fidelity for each approach.<br>
The complete performance study can be found in the chapter 5 of my [thesis document (PDF)](/fluid_simul_rendering/Pachoud_Olivier_BachelorThesis.pdf#page=59).

</div>

<style>
  .perf-wrap {
    max-width: 900px;
    margin: 24px auto;
  }
  .perf-table {
    width: 100%;
    border-collapse: collapse;
    border-radius: 12px;
    overflow: hidden;
  }
  .perf-table thead th {
    background: rgba(255,255,255,.06);
  }
  .perf-table th,
  .perf-table td {
    padding: 12px 16px;
    border-bottom: 1px solid rgba(255,255,255,.08);
    text-align: center;
    vertical-align: middle;
  }
  .perf-table th:first-child,
  .perf-table td:first-child {
    text-align: left;
    font-weight: 600;
  }
  .perf-table tr:last-child td {
    border-bottom: none;
  }
  .perf-table td small {
    display: block;
    font-size: 0.8em;
    opacity: 0.8;
  }
  .perf-caption {
    margin-top: 8px;
    text-align: center;
    font-style: italic;
    opacity: .85;
  }
  /* Observations colonne plus étroite */
  .perf-table td:last-child,
  .perf-table th:last-child {
    width: 28%;
    text-align: left;
  }
</style>

<div class="perf-wrap">
  <table class="perf-table">
    <thead>
      <tr>
        <th>Algorithm</th>
        <th>Low Quality</th>
        <th>Medium Quality</th>
        <th>High Quality</th>
        <th>Observations</th>
      </tr>
    </thead>
    <tbody>
      <tr>
        <td>Raymarching</td>
        <td>~35 ms <small>(3 ray bounces)</small></td>
        <td>~63 ms <small>(4 ray bounces)</small></td>
        <td>~103 ms <small>(5 ray bounces)</small></td>
        <td>Visual fidelity scales with recursion depth; cost grows with density sampling.</td>
      </tr>
      <tr>
        <td>Marching Cubes</td>
        <td>~7 ms <small>(low-res mesh)</small></td>
        <td>~23 ms <small>(mid-res mesh)</small></td>
        <td>~440 ms <small>(high-res mesh)</small></td>
        <td>Fast at low/medium resolutions; high-res meshes become prohibitive (mesh update + BLAS rebuild).</td>
      </tr>
    </tbody>
  </table>

  <div class="perf-caption">
    Average frame time at three quality levels.
  </div>
</div>


# <div class="text-center mt-16">What did I learn ?</div>

<div class="max-w-4xl mx-auto text-justify">

- Built a full DXR raytracing pipeline with custom shaders (intersection, any-hit).
- Implemented fluid optical effects: reflection, refraction, absorption.
- Explored two rendering approaches: Raymarching and Marching Cubes.
- Updated mesh vertices dynamically inside DXR acceleration structures.
- Ported a CPU-based SPH simulation to GPU using compute shaders.
- Optimized simulation with hash grids and a GPU bitonic sort.
- Stored and sampled simulation data in 3D textures.
- Conducted a quantitative performance analysis comparing both methods.

</div>

# <div class="text-center mt-16">Bachelor's Thesis</div>

<div class="mb-5 flex justify-center mt-4" style="position: relative;">
  <a href="/fluid_simul_rendering/Pachoud_Olivier_BachelorThesis.pdf" class="btn btn-outline text-lg">
    Download my Bachelor's Thesis (PDF)
  </a>
</div>
 
<object data='/fluid_simul_rendering/Pachoud_Olivier_BachelorThesis.pdf#toolbar=1' 
  type='application/pdf' 
  width='100%' height='1240px'>
</object>