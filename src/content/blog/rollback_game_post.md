---
title: "How did I implement rollback for my online game in C++."
description: "description"
pubDate: "May 01 2024"
heroImage: "/splotch/icon.png"
tags: ["Game", "SAE", "Network", "C++"]
---

# How did I implement rollback for my online game in C++ ?

## Intro

## Technical direction.

    les library utilisées
    le type de jeu.


## Project architecture.

### Different executables

intro qui parle de la class Engine.

#### Simulation application.

#### Client application.

#### Split screen application.

### Systems.

    parler du local et online game manager.
    parler du game render qui point le local game manager.

### Network.

    parler des packets et autre

## Rollback implementation.

### Systems separation.

    Input system
    LocalGameManager
    PlayerManager
    ProjectileManager
    Rappel sur le game renderer qui est à part.

### Resimulate the game.

    Why not une frame sans confirm frame qui prouve le probleme de ressimuler depuis la frame 0.
    Show tracy frames.

### Confirm frames.

    Show tracy frames.

## Conclusion