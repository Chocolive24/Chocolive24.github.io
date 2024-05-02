---
title: "Graphics Engine"
description: "How do I make a final scene with my graphics engine ?"
pubDate: "Feb 29 2024"
heroImage: "/graphics-engine/final_scene.png"
tags: ["Game", "SAE", "Engine", "C++"]
---

# How do I make my final scene ?

## Intro

I've done a lot of different things in this project, and I'm going to use them all to make a final scene. I'm going to
use the following:

- Instancing with rocks
- Deferred shading
- Ssao
- Shadow map
- PBR
    - IBL
    - Directional light
- Bloom

So I'm going to make a scene with 5'000 rocks with rusty PBR material, a skybox, and a sunlight. I'm going to use the
shadow mapping and SSAO to make the scene more realistic.
To see shadows, I'm going to put a ground plane. The ground plane has a hexagonal emissive pattern to make the scene
more interesting, yet completely unrealistic. The shadows are more visible on other rocks than on the ground plane
sadly.

It looks like this:
![Final scene](/graphics-engine/final_scene.png)

## Instancing with rocks

I've already made a rock model, and I've already made an instancing system. I'm going to use the instancing system to
render 5'000 rocks.
I use the same model but with different transformations (as position, rotations, and scales) to make the rocks look
different.

With instancing, I need to put in my shader a model matrix for each instance. I'm going to use a uniform buffer object
to store all the model matrices.
Like these lines in the vertex shader:

```glsl
layout (location = 0) in vec3 aPos;
layout (location = 1) in vec3 aNormal;
layout (location = 2) in vec2 aTexCoords;
layout (location = 3) in vec3 aTangent;
// location 4 = aBitangent.
layout (location = 5) in mat4 aModelMatrix;
```

I use the `aModelMatrix` attribute to get the model matrix for each instance.

In order to do that, at the start of the program, I generate a model matrix buffer object in my model class:

```cpp
void Model::SetModelMatrix(const std::vector<glm::mat4>& model_matrices, GLenum buffer_usage) noexcept {
  glGenBuffers(1, &model_matrix_vbo_);
  glBindBuffer(GL_ARRAY_BUFFER, model_matrix_vbo_);
  glBufferData(GL_ARRAY_BUFFER, model_matrices.size() * sizeof(glm::mat4), &model_matrices[0], buffer_usage);

  for (auto &mesh : meshes_) {
    mesh.vao.Bind();
    std::size_t vec4Size = sizeof(glm::vec4);
    glEnableVertexAttribArray(5);
    glVertexAttribPointer(5, 4, GL_FLOAT, GL_FALSE, 4 * vec4Size, (void *) 0);
    glEnableVertexAttribArray(6);
    glVertexAttribPointer(6, 4, GL_FLOAT, GL_FALSE, 4 * vec4Size, (void *) (vec4Size));
    glEnableVertexAttribArray(7);
    glVertexAttribPointer(7, 4, GL_FLOAT, GL_FALSE, 4 * vec4Size, (void *) (2 * vec4Size));
    glEnableVertexAttribArray(8);
    glVertexAttribPointer(8, 4, GL_FLOAT, GL_FALSE, 4 * vec4Size, (void *) (3 * vec4Size));

    glVertexAttribDivisor(5, 1);
    glVertexAttribDivisor(6, 1);
    glVertexAttribDivisor(7, 1);
    glVertexAttribDivisor(8, 1);

    VertexArrayObject::Unbind();
  }
}
```

I divide the matrix into 4 vec4 and use `glVertexAttribDivisor` to tell OpenGL to update the attribute every 1 instance
because shaders doesn't support arrays of matrices.

On update, I update the model matrix buffer object with the new model matrices.

```cpp
void Model::UpdateModelMatrix(const std::vector<glm::mat4>& model_matrices) const noexcept {
  glBindBuffer(GL_ARRAY_BUFFER, model_matrix_vbo_);
  glBufferSubData(GL_ARRAY_BUFFER, 0, model_matrices.size() * sizeof(glm::mat4), model_matrices.data());
}
```

For other objects, I use another shader that doesn't use instancing.

At start, I was using frustum to only render the rocks that are in the camera view. But I've noticed that the frustum
culling is not necessary because the instancing is already very fast. So I've removed the frustum culling.

## Deferred shading
I use a GBuffer to store information like position, normal, albedo, and metallic/roughness. I use a framebuffer to store
the GBuffer.

The texture with the position and metallicness is stored in the same texture in view space:
![ds-position-metallic-view_space.png](/graphics-engine/ds-position-metallic-view_space.png)

The normal and roughness (in alpha) are stored in the same texture:
![ds-normal-roughness.png](/graphics-engine/ds-normal-roughness-in-alpha.png)

The albedo and ao are stored in the same texture:
![ds-albedo-ao.png](/graphics-engine/ds-albedo-ao.png)

The emissive texture is stored in this texture:
![ds-emissive.png](/graphics-engine/ds-emissive.png)

To finish, I store the depth in this texture:
![ds-depth.png](/graphics-engine/ds-depth_map.png)

I use them later to calculate the lighting when all the objects are rendered.

## SSAO
I use SSAO to make the scene more realistic. I use a framebuffer to store the SSAO texture.

It's used to calculate the ambient occlusion for each fragment and apply it to the final image with a small noise texture.

The first pass:
![ssao-first_pass.png](/graphics-engine/ssao-first_pass.png)

Then, the second pass, it's blurred a bit from the first pass:
![ssao-second_pass.png](/graphics-engine/ssao-second_pass.png)

## Shadows

For shadows, I use shadow mapping.

So first, I render all objects in the scene in a framebuffer with the depth texture attached.
Then, I create the shadow map as a texture from the depth texture.

![Shadow map](/graphics-engine/shadow_map.png)

Then, I render the scene using the shadow map to calculate the shadows for each fragment.

Since my scene is huge, I use shadow map of 24'576x24'576 pixels because otherwise, the shadows are too pixelated.

I only need to calculate it one time since every object are static.

## PBR
I use PBR to make the rocks look realistic by calculating the lighting with the IBL and the directional light.
Cube map lighting is used to calculate the IBL.

All the textures are send to the shader to calculate the lighting for each fragment, it output these textures:
![pbr1.png](/graphics-engine/pbr1.png)
![pbr2.png](/graphics-engine/pbr2.png)

### IBL
I use a cube map to store the lighting information for the IBL and use it to calculate the lighting for each fragment.

### Directional light
I use a directional light to simulate the sunlight. I use the shadow map to calculate the shadows for the directional
light.

## Bloom
After all the lighting, I apply a bloom effect to the final image to make the scene more interesting.
The bloom effect is applied to the final image with a small threshold to make the bright parts of the image glow.

The blur pass:
![blur1.png](/graphics-engine/blur1.png)
![blur2.png](/graphics-engine/blur2.png)
![blur3.png](/graphics-engine/blur3.png)
![blur4.png](/graphics-engine/blur4.png)
![blur5.png](/graphics-engine/blur5.png)

The bloom effect is applied to the final image:
![bloom1.png](/graphics-engine/bloom1.png)
![bloom2.png](/graphics-engine/bloom2.png)
![bloom3.png](/graphics-engine/bloom3.png)
![bloom4.png](/graphics-engine/bloom4.png)