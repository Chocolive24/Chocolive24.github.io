---
title: "Physics Engine"
description: "How do I make a physics engine from scratch ?"
pubDate: "Nov 13 2023"
heroImage: "/physics-engine/planet.gif"
tags: ["Game", "SAE", "Engine", "C++"]
---

It's a physics engine created during the [SAE Games Programming](https://www.sae.edu/ch-ge/games-programming-diploma-bachelor) formation, by [Alexis Haldy aka Tryliom](https://github.com/Tryliom).<br>

What's the meaning of this engine ?
==============================================================

Goal : Create a physics engine from scratch in C++.<br>
* Understand Physics basics
* Track our code
* Understand how to optimize it

Demo scenes
==============================================================
## Planet scene

Planets orbiting around a sun, the small circles are the planets and the center one (in yellow) is the sun.

You can see the gravitational force applied to the planets, the closer they are of the sun, the faster they go.
You can spawn planets with different masses and suns, by clicking on the screen.

![](/physics-engine/planet.gif)

## Trigger scene

Circles, rectangles and polygons will change color depending on whether they overlap, enter or exit a trigger.

- Yellow corresponds to on overlap
- Green outside border corresponds to enter
- Red outside border corresponds to exit

You can see the quadtree in the background (square borders), it's used to optimize the collision detection.

![](/physics-engine/triggers.gif)

## Collision scene

Circles and rectangles collide with each other, adapt their velocity and position.
At each collision, the shapes take on the same new color and change their interior color according to the state (enter and exit).

- Green inside corresponds to enter
- Red inside corresponds to exit

![](/physics-engine/collisions.gif)

## Gravity scene

You can spawn dynamic circles and rectangles, they are attracted by gravity.<br>
You can edit the gravity force and the bounce factor of future spawned shapes.<br>
There is a static ground that can't be moved and that will collide with the shapes.

![](/physics-engine/gravity.gif)

Quadtree
==============================================================

## What is a quadtree ?

A quadtree is a tree data structure in which each internal node has exactly four children.
Quadtrees are the two-dimensional analog of octrees and are most often used to partition a two-dimensional space by
recursively subdividing it into four quadrants or regions. The data associated with a leaf cell varies by application,
but the leaf cell represents a "unit of interesting spatial information".

This means that the quadtree will divide the screen into 4 parts, and each of these parts will be divided into 4 parts,
and so on up to a certain depth defined by the user.<br>
In the engine, the quadtree is used to optimize the collision detection,
it will only check the shapes that are in the same quadtree node (and children) as the shape that we want to check.<br>

In the engine, the max depth is 5 and max number of shape per node is 8.<br>

![](/physics-engine/quadtree.png)

The Node 0 is the root node, it's the first node that will be created, it will be divided into 4 nodes (Node 1, Node 2, Node 3, Node 4) if there is more than 8 shapes (max shape per nodes) in the root node.<br>

## Advantages

Reduce the number of collision check, the time complexity go through O(n) -> Olog(n) with this method as we divided the space in four.

## How I made it ?

I store all children in a simple vector, so I don't have to deal with pointers.<br>
The children index of a node index can be found by multiplying the node index by 4 and adding 1, 2, 3 or 4.<br>

### Insertion

First, the world update the bodies position and velocity.<br>
Then, the world insert all colliders in the quadtree.

The quadtree check if the collider overlap the node, if it's the case, the collider is inserted in the node.<br>
If the node is full, it will be divided into 4 nodes and all colliders will be inserted in the new nodes.<br>
If the collider overlap multiple children, it will be inserted in the parent node.<br>
The maximum limit of colliders in a node will be ignored if the node is a leaf node (it doesn't have children).<br>

### Calculate all possible pairs (simplified)

After inserting all colliders in the quadtree, the world will ask the quadtree to calculate all possible pairs.<br>
It will take all colliders in the root node and the children, check if they overlap with simplified bound (rectangle), if it's the case, it will add them to the possible pairs list.<br>
It will do this recursively until it reach the leaf nodes.<br>

Allocators
==============================================================

## What is an allocator ?

An allocator is a class that will allocate memory for you.<br>
It's used to avoid memory fragmentation and to improve the performance.<br>
This is mainly used to monitor the memory usage and to avoid memory fragmentation.<br>

I made a heap, linear and free list allocator.<br>

Memory and performance tracking
==============================================================

Memory and performance tracking is done with the [Tracy profiler](https://github.com/wolfpld/tracy/tree/master) library.<br>
Here is a frame with the *trigger scene* with 500 circles and 500 rectangles.<br>

![](/physics-engine/tracyFrame.png)

You can see that the engine is using 2MB of memory and that the CPU usage is around 12% (on a 3.8GHz CPU).<br>
The engine is running at 165FPS (vsync), the frame time is around 9ms and the physics time take around 80% of the total time.<br>

## Memory tracking

There is small allocations when inserting colliders each times a node size increase. The nodes then remain the same size, which reduces future allocations.

![](/physics-engine/insertColliders.png)


There is a large allocation when all possible pairs are placed on the list of new collider pairs (with verified collision).<br>
This is deallocated at the end of the collision detection.<br>

![](/physics-engine/10secProfile.png)

The allocations grow with the time since nodes are not deallocated, the engine is using 2MB of memory after 10 seconds.<br>
All memory is deallocated when the engine is closed.<br>

Performance tracking over the development of the engine
==============================================================

I will start by showing how the engine worked using Tracy at the beginning of the project, without any optimization nor quadtree.<br>
And continue with all the optimization that I made and how it improved the performances.<br>
The samples will last 10sec each with a focus on frame with the *collision scene* with 500 circles and 500 rectangles every time.<br>

## Without quadtree

At the beginning, I didn't implement the quadtree, so the engine was checking all possible pairs at each frame.<br>
I also haven't implemented the memory tracking yet.<br>

![A frame](/physics-engine/history1.png)
![The stats of the updateColliders](/physics-engine/history1Stats.png)

We can see that a frame take around 30ms to be processed, the physics part take around 80% of the total time.<br>
At that moment, I had a bug with a double rendering, so the engine was rendering twice the same frame, but it doesn't affect the performance.<br>

## With basic quadtree

I've implemented the quadtree, but I haven't optimised it yet, and it has a few problems.<br>
Colliders have been inserted into each node that they overlap, so that a collider can be inserted several times into the quadtree.<br>
I used an `unordered_set` to store the colliders in the quadtree.<br>

![A frame](/physics-engine/history2.png)
![The stats of the updateColliders](/physics-engine/history2Stats.png)

### Raw difference with the previous frame

Frame time: 30ms -> 18ms<br>
Physics part: 80% -> 50%<br>

![Student t-test](/physics-engine/ttest1-2.png)

I have a 95% confidence interval of difference from 20ms to 28ms, so the difference is significant.<br>

## With optimized quadtree

- I optimized the quadtree, so a collider can only be inserted once in the quadtree.
- I still get all colliders using recursive calls and insert with the same vector.
- I still use an `unordered_set` to store the colliders in the quadtree.
- It uses now a FreeList allocator to allocate the colliders inside the quadtree, it created a small memory leak.
- I implemented the memory tracking.
- I fixed the double rendering bug.

![A frame](/physics-engine/history3.png)
![The stats of the updateColliders](/physics-engine/history3Stats.png)

We can see a lot of allocations, it's the free list allocator that allocate memory for the colliders.<br>

### Raw difference with the previous frame

Frame time: 18ms -> 8ms<br>
Physics part: 50% -> 70%<br>

![Student t-test](/physics-engine/ttest2-3.png)

I have a 95% confidence interval of difference from 3.5 to 3.7, so the difference is significant.<br>

## Now, with the optimized quadtree and the optimized collision detection

- I removed the use of `unordered_set`, I use now a vector to store the colliders in the quadtree with a method to only insert a collider pair once.<br>
- I optimized the collision detection, I don't check anymore if the colliders are in the same quadtree node, I check if they overlap with simplified bound (rectangle).<br>
- I use a heap allocator to allocate the colliders inside the quadtree, it doesn't create memory leak anymore, but it's slower.<br>
- It's stable now, there is no more allocations.<br>

![A frame](/physics-engine/history4.png)
![The stats of the updateColliders](/physics-engine/history4Stats.png)

### Raw difference with the previous frame

Frame time: 8ms -> 9ms<br>
Physics part: 70% -> 73%<br>

A frame take more time to be processed, but the getColliderPairs function take less time.<br>

![Student t-test](/physics-engine/ttest3-4.png)

I have a 95% confidence interval of difference from -1 to -0.8, so the difference is significant. It's slower than before, probably because of the heap allocator.<br>

Conclusion
==============================================================

Thanks to this project, I learned a lot about physics and how to optimize code.<br>
It will be useful for my future projects.<br>