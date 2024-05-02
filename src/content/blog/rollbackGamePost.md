---
title: "Rollback Game"
description: "How I implemented rollback in my game"
pubDate: "May 01 2024"
heroImage: "/splotch/icon.png"
tags: ["Game", "SAE", "Network", "C++"]
---

## Introduction

Dans quel cadre - module - école - projet - contexte de temps - repo git

Rollback is a technique used in fighting games to ensure that the game state is consistent between both players. 
This is done by rewinding the game state to a previous point in time and replaying the game from that point. 

In this post, I will explain how I implemented rollback with the network in my game, Splotch.

Les choses expliquées ou question posée doivent être répondue dans le post, donc mettre en avant les points importants déjà écrits

## Game

-> add a gameplay video here with split screen

-> Tell what gameplay is about, conditions of victory, etc.

-> tell about all different executable files (server, client, split screen)

## Architecture

### Client

How I implemented the client with SFML, the game loop, and the input system.

### Server

How I implemented the server with SFML, the game loop, and the input system.

## Rollback

### Why use rollback ?

Rollback is used in fighting games to ensure that the game state is consistent between both players.

### How I implemented rollback

I implemented rollback by using a fixed time step and a fixed frame rate.

## Network

### How I implemented the network using SFML

I implemented the network using SFML by using the `sf::TcpSocket` and `sf::UdpSocket` classes and multithreading.

### Network model

Network model is based on the client-server model.

### Network protocol

The network protocol is used in TCP and UDP.

## Problems

### Un-sync

I got un-sync when I was switching players because of the different inputs that were sent to the server.

## Conclusion

Résumer la problématique et les solutions apportées