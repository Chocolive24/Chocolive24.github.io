---
title: "Ruby and The Lost Crystals"
description: "A 3D stylised puzzle shooter game set in the ancient ruins of the Crystalins, a lost race of living stones. Solve puzzles and use magic projectiles to restore their scattered crystals. Available on Steam"
startDate: "04 September 2024"
endDate: "10 March 2025"
top: "1"
type: "featured"
state: "active"
heroImage: "/ruby/gifs/showcase2.gif"
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

<div style="text-align:center">
  <img src="/ruby/images/poster_16_9.jpg" alt="Poster of the game" style="width: 100%;">
  <p style="margin-top: -30px"><em>Poster of our game</em></p>
</div>

<div class="text-center mt-16">
  <iframe style="border: 0; color-scheme: normal; display:block; margin:auto;"
    src="https://store.steampowered.com/widget/3807810/"
    width="85%"
    height="190">
  </iframe>
</div>

# <div class="text-center mt-16">Context</div>

<div class="max-w-4xl mx-auto text-justify">

Ruby and the Lost Crystals is a **game project** produced as part of the **third year of the Bachelor's programme in Games Programming at SAE-Institut in Geneva**. The project is a **collaboration** between the school's **Game Programming, Game Art, and Audio Engineering departments**. It served as the **main project for the Games Programmers**, while for the Game Artists and Audio Engineers, it was a side project alongside their other coursework.

The aim was to produce a **vertical slice in six months** (from September to February), enabling us to demonstrate gameplay that is representative of the game's final concept.
The aim of the project is to have a **semi-professional experience** where each discipline plays an essential role in production and where **students can specialise in one aspect of game development**.

# <div class="text-center mt-16">Pitch</div>

In a mystical world filled with ancient ruins and forgotten magic, Ruby and her enigmatic companion, Sapphire, must join forces to restore the scattered crystals that once brought life to the land.

Play as this unique duo and combine their abilities to overcome puzzles and challenges: Ruby excels at physical interactions with the environment, while Sapphire can unleash magical projectiles with a range of effects. Master their powers, explore atmospheric ruins, and uncover the secrets of a world in need of restoration.

</div>

# <div class="text-center mt-16">Trailer</div>

<iframe width="100%" height="608" src="https://www.youtube.com/embed/3ox41kX3m6Y?si=9HS0JhrmWVj8pJnL" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# <div class="text-center mt-16">Gameplay</div>

<iframe width="100%" height="608" src="https://www.youtube.com/embed/msrqK0ubWnc?si=pKju7eRDleiCF3E3" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# <div class="text-center mt-16">Organisation Chart</div>

<div class="max-w-4xl mx-auto text-justify">

**Game Programming Team:**
- **Me (Olivier Pachoud)  : Project Co-leader, Lead Game Programmer, <br> Graphics Programmer & Tech Artist**
- Remy Lambert : Project Co-leader, Product Owner, Game Programmer & Level Designer
- Constantin Verine : Producer, Game & Audio Programmer. <br>

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

</div>

# <div class="text-center mt-16">Softwares and Tools used</div>

<img src="/ruby/images/ToolsUsed.jpg" alt="" style="width: 100%;">

# <div class="text-center mt-16">Cel Shading</div>

<div class="max-w-4xl mx-auto text-justify">

As a graphics programmer, my **main responsibility** was to **develop** a **physically-based cel shader** that brings a **stylised look** to the Unreal Engine 5 rendering pipeline.
Our goal was to **avoid flat or outdated visuals**. We aimed for a **modern cel shading approach** that **respects PBR principles**.
The shader creates **color bands**, adds **outlines** that darken object edges, and uses **crosshatching** to enhance shaded areas.

</div>

<style>
  .blend-container {
    position: relative;
    width: 100%;
    margin: auto;
    overflow: hidden;
    border-radius: 8px;
  }

  .blend-container img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
    object-fit: cover;
    transition: opacity 0.1s linear;
  }

  .blend-container img.base {
    z-index: 1;
  }

  .blend-container img.blended {
    z-index: 1;
    opacity: 0; /* initial blend */
  }

  .blend-slider {
    width: 100%;
    margin-top: 8px;
  }
</style>

<div class="blend-container" style="aspect-ratio: 16 / 9;">
  <img src="/ruby/images/ruin_cel.jpg" alt="Base Image" class="base">
  <img src="/ruby/images/ruin_no_cel.jpg" alt="Blended Image" class="blended" id="blendImage">
</div>
<input type="range" min="0" max="100" value="0" class="blend-slider" id="blendSlider">

<div class="blend-container" style="aspect-ratio: 16 / 9;">
  <img src="/ruby/images/capstan_cel.jpg" alt="Base Image" class="base">
  <img src="/ruby/images/capstan_no_cel.jpg" alt="Blended Image" class="blended" id="blendImage2">
</div>
<input type="range" min="0" max="100" value="0" class="blend-slider" id="blendSlider2">


<div class="blend-container" style="aspect-ratio: 16 / 9;">
  <img src="/ruby/images/celShader.jpg" alt="Base Image" class="base">
  <img src="/ruby/images/noCelShader.jpg" alt="Blended Image" class="blended" id="blendImage3">
</div>
<input type="range" min="0" max="100" value="0" class="blend-slider" id="blendSlider3">

<script>
  const slider = document.getElementById('blendSlider');
  const blendImage = document.getElementById('blendImage');

  slider.addEventListener('input', () => {
    const value = slider.value / 100;
    blendImage.style.opacity = value;
  });

  const slider2 = document.getElementById('blendSlider2');
  const blendImage2 = document.getElementById('blendImage2');

  slider2.addEventListener('input', () => {
    const value = slider2.value / 100;
    blendImage2.style.opacity = value;
  });

  const slider3 = document.getElementById('blendSlider3');
  const blendImage3 = document.getElementById('blendImage3');

  slider3.addEventListener('input', () => {
    const value = slider3.value / 100;
    blendImage3.style.opacity = value;
  });
</script>

<div class="max-w-4xl mx-auto text-center">

Here is a video showing all the tweakable parameters of my cel shader in Unreal.

</div>

<iframe width="100%" height="608" src="https://www.youtube.com/embed/mG73JiQhHlk?si=sR2Q7EUpMK4JRpzs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

# <div class="text-center mt-16">Project Iterations</div>

<div class="max-w-4xl mx-auto text-center">

**July 2024**: The very first game mechanics prototype made in two weeks. We were discovering Unreal:

</div>

<iframe width="100%" height="608" src="https://www.youtube.com/embed/dJzH4OkNIiw?si=EZulL54fo9JTGmWB" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="max-w-4xl mx-auto text-justify mt-16">

**August 2024**: We created this proof of concept during our summer holidays following feedback on our Jullet prototype from our main mentor Nicolas Brière (CEO at Old Skull Games).
<br>The goal was to represent our creative ideas through placeholders, our gameplay ideas through grayboxing, and to prove that the game is fun. We also wanted to start the project on a solid foundation to motivate Game Art and Audio students to come and work on the

</div>

<iframe width="100%" height="608" src="https://www.youtube.com/embed/X0bnC_ms4Og?si=UUUXx-IuADwCqKzb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="max-w-4xl mx-auto text-justify mt-16">

**31 October**: 1st production prototype focused on game mechanics and feedbacks.
<br> The objective of this milestone was to validate all the main features, work on gameplay feedback, and draft an initial level design for the vertical slice.

</div>

<iframe width="100%" height="608" src="https://www.youtube.com/embed/zMjtl-OyK8k?si=uw2Kehp4z7V53wnD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="max-w-4xl mx-auto text-justify mt-16">

**19 December 2024**: 2nd production prototype which aimed to have 80% of the game experience as well as the final level design for the vertical slice. We also worked on the narration to add more context and life to the game.

</div>

<iframe width="100%" height="608" src="https://www.youtube.com/embed/FqNpRNgoEnc?si=v76iF2ODPO_Gar9w" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

<div class="max-w-4xl mx-auto text-justify mt-16">

**14 February 2025**: vertical slice for the school's submission deadline. 
<br>Although there is still a lot of graybox, we managed to create a stylised art direction that is consistent with our goals of creating a calm and cute atmosphere. We also have a total game time of 40 minutes with in-game narration.

</div>

<iframe width="100%" height="608" src="https://www.youtube.com/embed/WXXpQHP8ShE?si=jYwIqfMaJSdFrCRD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>



# <div class="text-center mt-16">What did I learn ?</div>

<div class="max-w-4xl mx-auto text-justify">

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

</div>

## Events where we showcased our game
## <div class="text-justify mt-16">Fantasy Basel</div>
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

<!-- ### Statistics
During the event and the week that followed, **our itch.io page** for the game **racked up 104 views**. 

<div class="gallery">
  <a href="/ruby/images/fantasy_basel/itch_views.png" target="_blank" style="flex: 0 0 49%;">
    <img src="/ruby/images/fantasy_basel/itch_views.png" alt="Event photo 1" style="width: 100%; height: auto;">
      <p style="margin-top: -30px"><em>Graph showing the number of views on our itch.io page.</em></p>
  </a>
</div> -->

<!-- On the **last day** of the convention, following the success of our game, we had the idea of **creating a mailing list** to inform interested parties about the free release of our game on Steam. We managed to **collect 13 emails that day**. -->
