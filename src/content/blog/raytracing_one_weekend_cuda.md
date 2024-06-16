---
title: "My implemenation of the raytracing in one weekend using CUDA."
description: "A technial post about how I implemented a raytracer using the CUDA API."
pubDate: "June 16 2024"
heroImage: "/rollback_game/gifs/gameplay.gif"
tags: ["Computer Graphics", "Raytracing", "C++", "CUDA"]
---

Intro - contexte

need to install CUDA toolkit

# Content

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

First create the macro to check cuda errors: Each CUDA API call we make returns an error code that we should check. We check the cudaError_t result with a checkCudaErrors macro to output the error to stdout before we reset the CUDA device and exit.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
#define CHECK_CUDA_ERRORS(val) check_cuda((val), #val, __FILE__, __LINE__)

void check_cuda(cudaError_t result, char const* const func,
                const char* const file, int const line) {
  if (result) {
    std::cerr << "CUDA error = " << static_cast<unsigned int>(result) << " at "
              << file << ":" << line << " '" << func << "' \n";

    // Make sure we call CUDA Device Reset before exiting
    cudaDeviceReset();
    std::exit(99);
  }
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

Then we allocate a framebuffer of size image_width * image_height on the unified memory by calling cudaMallocManaged().
The unifided memory is shared by both the GPU to write pixel values into it and the CPU to read from it and output it in the image.ppm file.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
// FrameBuffer
constexpr int kImageWidth = 400;
constexpr int kImageHeight = 225;
constexpr int kNumPixels = kImageWidth * kImageHeight;
constexpr std::size_t kFbSize = 3 * sizeof(float) * kNumPixels;

// Allocate FB
float* fb = nullptr;
CHECK_CUDA_ERRORS(cudaMallocManaged(reinterpret_cast<void**>(&fb), kFbSize));
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

Then we need to define how many thread and blocks we will use. Personally I simply followed the post from Roger Allen which define 8x8 thread for 2 reasons: (1) is a small, square region so the work would be similar.  This should help each pixel do a similar amount of work. If some pixels work much longer than other pixels in a block, the efficiency of that block is impacted.
(2) has a pixel count that is a multiple of 32 in order to fit into warps evenly.

I also added a timer like in the cuda post to measure the time it takes in seconds.

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
constexpr int kTx = 8;
constexpr int kTy = 8;

const std::clock_t start = clock();

// Render our buffer
dim3 blocks(kImageWidth / kTx + 1, kImageHeight / kTy + 1);
dim3 threads(kTx, kTy);

Render<<<blocks, threads>>>(fb, kImageWidth, kImageHeight); // I'll the function right after
CHECK_CUDA_ERRORS(cudaGetLastError());
CHECK_CUDA_ERRORS(cudaDeviceSynchronize());

const std::clock_t stop = clock();
const double timer_seconds = static_cast<double>(stop - start) / CLOCKS_PER_SEC;
std::cerr << "took " << timer_seconds << " seconds.\n";
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

Now we need a Render() function that runs on the GPU to calculates the value of each pixel and write it into the framebuffer but is called by the CPU. Such a function is called a kernel in CUDA. To tell the cuda compiler that a function is a kernel we need to add the __global__ keyword to it:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
__global__ void Render(float *fb, const int image_width, const int image_height) {
    const int i = threadIdx.x + blockIdx.x * blockDim.x;
    const int j = threadIdx.y + blockIdx.y * blockDim.y;
    if((i >= max_x) || (j >= max_y)) 
        return;
    const int pixel_index = j * image_width * 3 + i * 3;
    fb[pixel_index + 0] = static_cast<float>(i) / image_width;
    fb[pixel_index + 1] = static_cast<float>(j) / image_height;
    fb[pixel_index + 2] = 0.2;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

Note that we use the threadIdx and blockIdx CUDA built-in variables to identify the coordinates of each thread in the image (i,j) so it knows how to calculate the final color. It is possible with images of sizes that are not multiples of the block size to have extra threads running that are outside the image. We must make sure these threads do not try to write to the frame buffer and return early.

After the execution of the kernel function, we can read the pixel values on the CPU and write them in the image file like in the book and simply free the frame buffer memory after we finished with it. (I put all the code from the thread creations to be explicit):

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
constexpr int kTx = 8;
constexpr int kTy = 8;

const std::clock_t start = clock();

// Render our buffer
dim3 blocks(kImageWidth / kTx + 1, kImageHeight / kTy + 1);
dim3 threads(kTx, kTy);

Render<<<blocks, threads>>>(fb, kImageWidth, kImageHeight); // I'll the function right after
CHECK_CUDA_ERRORS(cudaGetLastError());
CHECK_CUDA_ERRORS(cudaDeviceSynchronize());

const std::clock_t stop = clock();
const double timer_seconds = static_cast<double>(stop - start) / CLOCKS_PER_SEC;
std::cerr << "took " << timer_seconds << " seconds.\n";

// Output FB as Image
std::cout << "P3\n" << nx << " " << ny << "\n255\n";
for (int j = kImageHeight-1; j >= 0; j--) {
    for (int i = 0; i < kImageWidth; i++) {
        const size_t pixel_index = j * 3 * kImageWidth + i * 3;
        const float r = fb[pixel_index + 0];
        const float g = fb[pixel_index + 1];
        const float b = fb[pixel_index + 2];
        const int ir = int(255.99*r);
        const int ig = int(255.99*g);
        const int ib = int(255.99*b);
        std::cout << ir << " " << ig << " " << ib << "\n";
    }
}
checkCudaErrors(cudaFree(fb));
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

If we open the ppm file (I use ppm viewer online personaly) we should have the first image of the raytracing book:

TODO: Show the right green image.

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
