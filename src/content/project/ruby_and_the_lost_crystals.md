---
title: "Ruby and The Lost Crystals"
description: "A 3D stylized puzzle shooter set in the ancient ruins of the Crystalins, a lost race of living stones. Solve puzzles and use magic projectiles to restore their scattered crystals."
startDate: "04 September 2024"
endDate: "10 March 2025"
top: "1"
type: "featured"
state: "active"
heroImage: "/ruby/gifs/showcase.gif"
infos: {
  "/icones/people.svg": "6",
  "/icones/clock.svg": "6 months",
  "/icones/tools.svg": "Unreal/Perforce/Wwise",
  "/icones/calendar.svg": "10 March 2025",
}
tags: ["Game", "3D", "Unreal", "Perforce", "Wwise", "SAE", "Group"]
relatedBlogs: ["Ruby and the Lost Crystals: Project Debrief",
  "My Stylization Process for Ruby and the Lost Crystals Using a Physically Based Cel Shader.",
  "Ruby and The Lost Crystals: Post-Mortem."]
---

<img src="/ruby/images/poster.jpg" alt="Poster of the game" style="width: 100%;">

## Context
Ruby and the Lost Crystals is a **game project** produced as part of the **third year of the Bachelor's programme in Games Programming at SAE-Institut in Geneva**. The project is a **collaboration** between the school's **Game Programming, Game Art, and Audio Engineering departments**. It served as the **main project for the Games Programmers**, while for the Game Artists and Audio Engineers, it was a side project alongside their other coursework.

The aim was to produce a **vertical slice in six months** (from September to February), enabling us to demonstrate gameplay that is representative of the game's final concept.
The aim of the project is to have a **semi-professional experience** where each discipline plays an essential role in production and where **students can specialise in one aspect of game development**.

# Pitch
In a fantasy world strewn with ruins, Ruby and her mysterious companion Sapphire must work together to progress, with the sole mission of restoring the scattered crystals. To do this, Ruby is able to perform physical interactions, while Sapphire can fire projectiles with a variety of behaviours

## Organisation Chart

**Game Programming Team:**
- Remy Lambert : Project Co-leader, Product Owner, Game Programmer & Level Designer
- **Me (Olivier Pachoud)  : Project Co-leader, Lead Game Programmer, <br> Graphics Programmer & Tech Artist**
- Constantin Verine : Producer, Game & Audio Programmer. <br>
  <!-- He helped us a lot with implementing sounds using Wwise and took charge of project management towards the end, as well as organising events where we showcased the project. -->

**Game Art Team:**
- Isabelle Borcard: Lead Game Art
- Eliot Depres: Level & Props Artist

**Audio Team:**
- Samuel Rochat: Lead Audio & Sound Integrator in Wwise.

**Special Thanks to:**
- Diana Vadi: Graphic designer and 2D illustrator. <br>She notably created the poster for the game.
- Bryan Mettraux: Content Creator. <br> He notably created the trailer for the game.

**Contributors**
- Prog: Alexis Haldy
- Art: Mélissa Houriet, Samuel Blanc
- Audio: Johan Walder, Yannis von Will, Killian Rossier, Luca Prati, Arber haxidema,<br> Louise Durmaz, Dylan Fracheboud

## Showcase
This is the **trailer animatic** for the game:
<iframe width="100%" height="420" src="https://www.youtube.com/embed/jH5nJ26D4qA?si=yFTSkghP8MX9v9R4" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

Here is a **gameplay** video of the game:
<iframe width="100%" height="420" src="https://www.youtube.com/embed/4d4-JtT6Mpo?si=yBA7_bJgOAWgEAsh" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## Project status
**July 2024**: The very first game mechanics prototype made in two weeks. We were discovering Unreal:
<iframe width="100%" height="420" src="https://www.youtube.com/embed/dJzH4OkNIiw?si=EZulL54fo9JTGmWB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**August 2024**: We created this proof of concept during our summer holidays following feedback on our Jullet prototype from our main mentor Nicolas Brière (CEO at Old Skull Games).
<br>The goal was to represent our creative ideas through placeholders, our gameplay ideas through grayboxing, and to prove that the game is fun. We also wanted to start the project on a solid foundation to motivate Game Art and Audio students to come and work on the
<iframe width="100%" height="420" src="https://www.youtube.com/embed/X0bnC_ms4Og?si=UUUXx-IuADwCqKzb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**31 October**: 1st production prototype focused on game mechanics and feedbacks.
<br> The objective of this milestone was to validate all the main features, work on gameplay feedback, and draft an initial level design for the vertical slice.
<iframe width="100%" height="420" src="https://www.youtube.com/embed/zMjtl-OyK8k?si=uw2Kehp4z7V53wnD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**19 December 2024**: 2nd production prototype which aimed to have 80% of the game experience as well as the final level design for the vertical slice. We also worked on the narration to add more context and life to the game.:
<iframe width="100%" height="420" src="https://www.youtube.com/embed/FqNpRNgoEnc?si=v76iF2ODPO_Gar9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

**14 February 2025**: vertical slice for the school's submission deadline. 
<br>Although there is still a lot of graybox, we managed to create a stylised art direction that is consistent with our goals of creating a calm and cute atmosphere. We also have a total game time of 40 minutes with in-game narration.
<iframe width="100%" height="420" src="https://www.youtube.com/embed/WXXpQHP8ShE?si=jYwIqfMaJSdFrCRD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## What did I learn ?
- Developing a game on Unreal
- Versioning with Perforce
- Integrating and using Wwise with Unreal
- Team management
- Working with agile methodology
- Distributing tasks between programmers
- Working with game artists
- Working with audio engineers
- Lots of stylised graphics rendering techniques
- Using AI to create concepts and creative ideas
- Polishing a game
- Pitching a game

## Events where we showcased our game
### Fantasy Basel
**Location:** Basel (Switzerland).<br>
**Dates:** 29 to 31 May 2025.<br>
**Team members on site:** Olivier and Constantin (all 3 days), Isabelle, Diana and Bryan (1 day).

<div class="gallery">
  <a href="/ruby/images/fantasy_basel/screens.jpg" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/screens.jpg" alt="Event photo 1" style="width: 100%; height: auto;">
  </a>
  <a href="/ruby/images/fantasy_basel/poster.jpg" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/poster.jpg" alt="Event photo 1" style="width: 100%; height: auto;">
  </a>
  <a href="/ruby/images/fantasy_basel/players14.jpg" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/players14.jpg" alt="Event photo 1" style="width: 100%; height: auto;">
  </a>
</div>

<div style="display: flex; flex-wrap: wrap; row-gap: 1%; column-gap: 1%;">
  <a href="/ruby/images/fantasy_basel/players1.jpg" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/players1.jpg" alt="Event photo 1" style="width: 100%; height: auto;">
  </a>
  <a href="/ruby/images/fantasy_basel/players2.jpg" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/players2.jpg" alt="Event photo 2" style="width: 100%; height: auto;">
  </a>
  <a href="/ruby/images/fantasy_basel/players3.jpg" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/players3.jpg" alt="Event photo 3" style="width: 100%; height: auto;">
  </a>
  <a href="/ruby/images/fantasy_basel/players4.jpg" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/players4.jpg" alt="Event photo 4" style="width: 100%; height: auto;">
  </a>
  <a href="/ruby/images/fantasy_basel/players5.jpg" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/players5.jpg" alt="Event photo 5" style="width: 100%; height: auto;">
  </a>
  <a href="/ruby/images/fantasy_basel/players6.jpg" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/players6.jpg" alt="Event photo 6" style="width: 100%; height: auto;">
  </a>
  <a href="/ruby/images/fantasy_basel/players7.jpg" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/players7.jpg" alt="Event photo 7" style="width: 100%; height: auto;">
  </a>
  <a href="/ruby/images/fantasy_basel/players8.jpg" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/players8.jpg" alt="Event photo 8" style="width: 100%; height: auto;">
  </a>
  <a href="/ruby/images/fantasy_basel/players9.jpg" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/players9.jpg" alt="Event photo 9" style="width: 100%; height: auto;">
  </a>
  <a href="/ruby/images/fantasy_basel/players10.jpg" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/players10.jpg" alt="Event photo 10" style="width: 100%; height: auto;">
  </a>
  <a href="/ruby/images/fantasy_basel/players11.jpg" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/players11.jpg" alt="Event photo 11" style="width: 100%; height: auto;">
  </a>
  <a href="/ruby/images/fantasy_basel/players12.jpg" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/players12.jpg" alt="Event photo 12" style="width: 100%; height: auto;">
  </a>
  <a href="/ruby/images/fantasy_basel/players13.jpg" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/players13.jpg" alt="Event photo 13" style="width: 100%; height: auto;">
  </a>
  <a href="/ruby/images/fantasy_basel/players14.jpg" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/players14.jpg" alt="Event photo 14" style="width: 100%; height: auto;">
  </a>
</div>

### Statistics
During the event and the week that followed, **our itch.io page** for the game **racked up 104 views**. 

<div class="gallery">
  <a href="/ruby/images/fantasy_basel/itch_views.png" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/itch_views.png" alt="Event photo 1" style="width: 100%; height: auto;">
      <p style="margin-top: -30px"><em>Graph showing the number of views on our itch.io page.</em></p>
  </a>
</div>

On the **last day** of the convention, following the success of our game, we had the idea of **creating a mailing list** to inform interested parties about the free release of our game on Steam. We managed to **collect 13 emails that day**.
