---
title: "PathTracer in CUDA"
description: "A basic pathtracer made in CUDA in a few months during my free time."
startDate: "08 June 2024"
top: "1"
type: "personal"
state: "active"
heroImage: "/raytracing_next_week_cuda/images/final_HD_16_9.png"
infos: {
  "/icones/people.svg": "1",
  "/icones/clock.svg": "2 months",
  "/icones/tools.svg": "C++/CUDA",
  "/icones/calendar.svg": "January 2025",
}
tags: ["Computer Graphics", "Raytracing", "CUDA", "C++", "3D", "Low-Level Programming", "Personal project"]
relatedBlogs: ["My implementation of the raytracing in one weekend using CUDA."]
---

## Context
I made this project in my **spare time** in order to **improve my knowledge in Computer Graphics** by **learning** the **mathematical** and **algorithmic** bases **behind** the so-called **offline photorealistic rendering** techniques.

I first **started** by reading the **book** [Ray Tracing in One Weekend](https://raytracing.github.io/books/RayTracingInOneWeekend.html) to implement my first pathtracer. **Then** I decided to reimplement the same pathtracer, but this time **using CUDA technology** to speed up its computation time. To this end, I followed **Roger Allen's blog post**, [Accelerated Ray Tracing in One Weekend in CUDA](https://developer.nvidia.com/blog/accelerated-ray-tracing-cuda/).

I then **continued** my pathtracing journey by **reading the second book**  [Raytracing The Next Week](https://raytracing.github.io/books/RayTracingTheNextWeek.html) **but implementing** the code **in CUDA**.

## Showcase

Here are some renders I was able to create using CUDA
<div style="text-align:center">
  <img src="/raytracing_one_weekend_cuda/images/final_16min.png" alt="" />
    <img src="/raytracing_next_week_cuda/images/final_HD.png" alt="" />
  <img src="/raytracing_one_weekend_cuda/images/first_metal.png" alt="" width=750/>
  <img src="/raytracing_one_weekend_cuda/images/light.png" alt="" width=750/>
  <img src="/raytracing_one_weekend_cuda/images/cornel_box.png" alt="" width = 750/>
  <p style="margin-top: -30px"><em></em></p>
</div>

## What did I learn ?
- The algorithms and math behind a path tracer
- Using CUDA
  - Using device code
  - Using kernels
  - Transfering CPU memory to GPU
- Creating a Bouding Volume Hierarchy
- Performing lighting calculations based on material properties

<!-- ## Blog Post
I've written a blog post about implementing the book pathtracer using CUDA:  
[Read it here](/blog/my-implementation-of-the-raytracing-in-one-weekend-using-cuda/) -->