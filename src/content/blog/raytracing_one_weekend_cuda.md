---
title: "My implemenation of the raytracing in one weekend using CUDA."
description: "A technial post about how I implemented a raytracer using the CUDA API."
pubDate: "June 16 2024"
heroImage: "/rollback_game/gifs/gameplay.gif"
tags: ["Computer Graphics", "Raytracing", "C++", "CUDA"]
---

Intro - contexte

# Contents

- [First step into CUDA](#first-step-into-cuda)
- [CMake setup](#cmake-setup)
- [Render the first image](#render-the-first-image)
- [Create classes that can be used on both the CPU and GPU](#create-classes-that-can-be-used-on-both-the-cpu-and-gpu)
- [First rays](#first-rays)
- [Hit sphere](#hit-sphere)
- [World creation](#world-creation)
- [Camera class](#camera-class)
- [Random numbers with CUDA for the Anti-Aliasing](#random-number-swith-cuda-for-the-anti-aliasing)
- [Conclusion](#conclusion)

# First step into CUDA

# CMake setup

# Render the first image

# Create classes that can be used on both the CPU and GPU

# First rays

# Hit sphere

# World creation

# Camera class

# Random numbers with CUDA for the Anti-Aliasing

Montrer le profiling de ma fonction add test CUDA.

How to setup Cmake and perhaps vcpkg to work with CUDA

Render the First image
	CHECK_CUDA_ERRORS
	création du framebuffer avec CUDA sur la mémoire partagée entre CPU et GPU
	fonction __global__ Render()

Create classes that can be used on both the CPU and GPU
	J'ai fais des template classes en plus

First rays 
	parler de la boucle de cout inversée en y
	montrer comment j'ai utiliser le fb du CUDA blog avec les calculs pixels du livre de base:
		__global__ void render(vec3 *fb, int max_x, int max_y,
                       vec3 lower_left_corner, vec3 horizontal, vec3 vertical, vec3 origin,
                       hitable **world) {
  const int i = threadIdx.x + blockIdx.x * blockDim.x;
  const int j = threadIdx.y + blockIdx.y * blockDim.y;
  if ((i >= max_x) || (j >= max_y)) return;
  const int pixel_index = j * max_x + i;
  const auto pixel_center = pixel_00_loc + (i * pixel_delta_u) +
                            (j * pixel_delta_v);
  const auto ray_direction = pixel_center - origin;
  const RayF r(origin, ray_direction);

  fb[pixel_index] = GetRayColor(r, world);
}

Hit Sphere
	montrer que le cercle était tout raplati

Création du World
	Mémoire allouée sur le GPU pour les Hittable**
	Les malloc, free, checkdevice etc...

Camera class
	montrer comment j'ai fais la classe caméra
		j'ai laissé l'opportunité d'être host et device
		j'ai créé la camera localement dans le code device pour me simplifier la vie car j'en ai pas besoin de le code host.

Random and AA
	montrer le curand et ma manière de gérer l'anti aliasing (la méthode du livre fusionnée au curand)
