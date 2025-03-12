---
title: "Ruby and the Lost Crystals: Project Debrief"
description: "A post summarising the 8 months we spent working on the game project together with SAE Institut's Game Artists and Game Audio."
pubDate: "Feb 13 2025"
heroImage: "/ruby/gifs/debrief.gif"
tags: ["Game", "3D", "Unreal", "Perforce", "Wwise", "SAE", "Group"]
---

# Contents

- [1. Context](#1-context)
  - [1.1 Game Pitch](#11-game-pitch)
  - [1.2 Game Pillars](#12-game-pillars)
  - [1.3 Project Ambitions](#13-project-ambitions)
- [2. Project Environnement](#2-project-environnement)
    - [2.1 Technical Environnement](#21-technical-environnement)
    - [2.2 Organisational Environment](#22-organisational-environment)
    - [2.3 Creative Environnement](#23-creative-environnement)
    - [2.4 Documents](#24-documents)
    - [2.5 Organisation Chart](#25-organisation-chart)
- [3. Calendar](#3-calendar)
  - [3.1 End of July](#31-end-of-july)
  - [3.2 August](#32-august)
  - [3.3 September to October](#33-september-to-october)
  - [3.4 November to December](#34-november-to-december)
  - [3.5 January to 14 February](#35-january-to-14-february)
- [4. Project Management](#4-project-management)
    - [4.1 Agile Methodology](#41-agile-methodology)
        - [4.1.1 Roadmap](#411-roadmap)
        - [4.1.2 Sprints](#412-sprints)
    - [4.2 Meetings with Teachers and External Experts](#42-meetings-with-teachers-and-external-experts)
    - [4.3 Meetings Between Students](#43-meetings-between-students)
- [5. Individual Contributions](#5-individual-contributions)
    - [5.1 Remy](#51-remy)
        - [5.1.1 Specifications](#511-specifications)
        - [5.1.2 Development Timeline](#512-development-timeline)
        - [5.1.3 Anticipated learning](#513-anticipated-learning)
    - [5.2 Constantin](#52-constantin)
        - [5.2.1 Specifications](#521-specifications)
            - [5.2.1.1 Producer](#5211-producer)
                - [5.2.1.1.1 Management](#52111-management)
                - [5.2.1.1.2 Reviews](#52112-reviews)
            - [5.2.2.2 Programmer](#5222-programmer)
                - [5.2.2.2.1 Audio Programmer](#52221-audio-programmer)
        - [5.2.2 Anticipated learning](#522-anticipated-learning)
    - [5.3 Alexis](#53-alexis)
        - [5.3.1 Specifications](#531-specifications)
        - [5.3.2 Alexis](#532-anticipated-learning)
    - [5.4 Olivier](#54-olivier)
        - [5.4.1 Specifications](#541-specifications)
            - [5.4.1.1 August](#5411-august)
            - [5.4.1.2 September to October](#5412-september-to-october)
            - [5.4.1.3 November to December](#5413-november-to-december)
            - [5.4.1.4 January to February 14](#5414-january-to-february-14)
- [6. Assessment of the Level of Ambition, Risks and Fears](#6-assessment-of-the-level-of-ambition-risks-and-fears)

# 1. Context
Ruby and the Lost Crystals is a game project produced as part of the third year of the Bachelor's programme in Games Programming at SAE-Institut in Geneva. The project is a collaboration between the school's Game Programming, Game Art, and Audio Engineering departments. It served as the main project for the Game Programmers, while for the Game Artists and Audio Engineers, it was a side project alongside their other coursework.

The aim is to produce a vertical slice in six months (from September to February), enabling us to demonstrate gameplay that is representative of the game's final concept.
The aim of the project is to have a semi-professional experience where each discipline plays an essential role in production and where students can specialise in one aspect of game development.
## 1.1 Game Pitch
“In a fantasy world strewn with ruins, Ruby and her mysterious companion Sapphire must work together to progress, with the sole mission of restoring the scattered crystals. To do this, Ruby is able to perform physical interactions, while Sapphire can fire projectiles with a variety of behaviours”.
Ruby and the lost crystals is a game that combines exploration, reflection and shooting.” 

<div style="text-align:center;">
    <table>
    <tr>
        <td> <img src="/ruby/images/fresque02.jpg" width=575/>
        <p style="margin-top: -30px"><em>A fresco visible in the game.</em></p></td>
        <td>  <img src="/ruby/images/concept_ruin.webp" width=550/>
        <p style="margin-top: -30px"><em>Game concept art generated via ChatGPT.</em></p></td>
    </tr>
    </table>
</div>
          
## 1.2 Game Pillars
Our vision was a Relaxing and Feel Good experience. Inspired by the wholesome genre, the game aims to set a positive and restful context. This ambition is reflected not only in the design of the characters and their dynamic duo, but also in the design of the environment, music and user interface.

This relaxing atmosphere is there for players to unwind and enjoy the experience at their own pace. As far as the gameplay is concerned, we've tried to reinforce a sense of satisfaction for the player. The game is paced so that the player faces a series of short, varied challenges. 

The challenge can be varied shooting phases with the different behaviour of the crystals, or platform phases due to the structure of the ruins or created with Sapphire's powers, or puzzles. The aim is to create a sense of achievement for the player while maintaining a pleasant and enjoyable pace.

<div style="text-align:center">
    <table>
    <tr>
        <p style="margin-bottom: -50px"><em>Images of reference games for our relaxing visual goal. </em></p></td>
        <td> <img src="/ruby/images/map_map_2.jpg" width=550/>
        <p style="margin-top: -30px"><em>Map Map - A Game About Maps. </em></p></td>
        <td>  <img src="/ruby/images/map_map.jpg" width=550/>
        <p style="margin-top: -30px"><em>Map Map - A Game About Maps. </em></p></td>
    </tr>
    <tr>
        <td> <img src="/ruby/images/tiny_glade.jpg" width=550/>
        <p style="margin-top: -30px"><em>Tiny Glade.</em></p></td>
        <td>  <img src="/ruby/images/the_witness.png" width=550/>
        <p style="margin-top: -30px"><em>The Witness.</em></p></td>
    </tr>
    </table>
</div>

## 1.3 Project Ambitions
Our goal for this project was to create a high-quality game that we could proudly showcase in our portfolios while demonstrating our ability to work as a team. We aimed for polished visuals, smooth and enjoyable gameplay, and engaging puzzles that provide a sense of reward and satisfaction. Our ambition was to craft a cozy atmosphere and deliver an experience that could even be worthy of award nominations.

# 2. Project Environnement
On the whole, we have been fairly free to choose the tools to be used and the roles of each person in the project. The aim was to teach us how to work together and make joint decisions.

## 2.1 Technical Environnement
The technical softwares were the only logistical constraints we had. Unreal 5 was imposed on us as the game engine, Perforce as the version management tool, and finally, Wwise as the middleware for integrating and managing the game's audio.

<div style="text-align:center">
  <img src="/ruby/images/perforce.png">
  <p style="margin-top: -30px"><em>Screenshot of the Perforce interface showing our depot.</em></p>
</div>

The Unreal project was initially set up in C++ to allow an easy mix of C++ and Blueprints. However, we worked entirely in Blueprints, except for modifying the default player code.
We made this choice because we felt that our game mechanics didn’t require overly complex systems and that using Blueprints would significantly speed up development. Additionally, we anticipated the arrival of Game Audio students, who might need to integrate their sounds into the code.

## 2.2 Organisational Environment
Our primary communication tool was Discord. We had a server with several channels dedicated to specific topics, where team members could ask for advice or assistance. We also encouraged people to share their progress in a 'share-your-work' channel to foster motivation and add some life to the project's development. Additionally, we had channels for project documentation, idea submissions, bug tracking, sprint goals, and creative feedback from teachers and experts.

<div style="text-align:center">
  <img src="/ruby/images/discord.png">
  <p style="margin-top: -30px"><em>Screenshot of our Discord server.</em></p>
</div>

Miro was used to create a Roadmap which we used to set ourselves long-term objectives. Unfortunately, we abandoned it a little at the end of November.

<div style="text-align:center">
  <img src="/ruby/images/roadmap.png">
  <p style="margin-top: -30px"><em>Screenshot of our Roadmap made in Miro.</em></p>
</div>

For the artistic aspect of the game, Game Arts chose to use Miro to group together artistic references and concepts, and Trello to distribute tasks.

<div style="text-align:center">
  <img src="/ruby/images/concept_art.png">
  <p style="margin-top: -30px"><em>Screenshot of the Miro document containing concept art and references.</em></p>
</div>

Finally, we can mention the use of Jira during the first two months of work to assign tasks between programmers.

<div style="text-align:center">
  <img src="/ruby/images/jira.png">
  <p style="margin-top: -30px"><em>Screenshot of our Jira board, where we initially assigned sprint tasks at the beginning of the project.</em></p>
</div>


## 2.3 Creative Environnement
We used two different approaches for generating ideas and concepts. Since our team did not include a Concept Artist, Designer, or any similar role, we had to be resourceful in finding solutions. Our main source of ideas came from reference games, typically The Legend of Zelda series or The Witness.

Our other method for finding inspiration was using AI, particularly ChatGPT, which greatly helped us with the game's narrative aspects and Concept Art generation.

<div style="text-align:center">
  <img src="/ruby/images/concept_chatgpt.png">
  <p style="margin-top: -30px"><em>Concept art for the game generated using ChatGPT.</em></p>
</div>

## 2.4 Documents
In addition to the management tools, we put in place several documents to structure the vision of the project and ensure good communication between the teams:
- Game Design Document (GDD) (made on Google Doc): Listed the game mechanics and the artistic and audio asset requirements.
- Global Vision Document (made on Miro): Served as a reference to ensure that all the teams were moving in the same direction.
- Art Direction Document (made on Google Slide): Intended for the art team to maintain visual consistency throughout development.
- Pitch / Creative Vision Document (made on Google Slide): This was used to present our game and our ambitions to the various experts from outside the school who were following our project.

<div style="display: flex; justify-content: center; align-items: stretch; gap: 10px;">
    <!-- Left: Big High Image -->
    <img src="/ruby/images/gdd.png" style="width: 400px;"/>
    <!-- Right: Two Small Images Stacked -->
    <div style="display: flex; flex-direction: column; justify-content: space-between; gap: 10px;">
        <img src="/ruby/images/pitch_doc.png" style="width: 350px;" />
        <img src="/ruby/images/creative_doc.png" style="width: 350px;" />
    </div>
</div>
<p style="margin-top: -30px"><em>Left image: our GDD. 
Top right image: our Pitch document. 
Bottom right image: our Global Vision document.</em></p>
</div>

## 2.5 Organisation Chart
We were 3 teams with different training on the Game Art, Audio and Game Programmer project. Each team had a lead responsible for communication and task distribution.

- **Game Art Team:**
    - Isabelle Borcard: Lead Game Art
    - Eliot Depres 
    - Mélissa Houriet
    - Samuel Blanc
    - Sara Jullier
    - Noah Barraud 
- **Audio Team:**
    - Samuel Rochat: Lead Audio
    - Johan Walder
    - Yannis von Will
    - Killian Rossier
    - Luca Prati
    - Arber haxidema
    - Louise Durmaz
    - Dylan Fracheboud
- **Game Programming Team:**
    - Remy Lambert : Product Owner, Game & Level Designer
    - Constantin Vérine : Producer, Audio Programmer
    - Olivier Pachoud  : Lead Game Programmer, Graphics Programmer & Tech Artist
    - Alexis Haldy Gameplay Programmer

We decided to have a Lead for each team, acting as the main connection between their area of expertise and the rest of the group.

**Game Art:**
Isabelle Borcard was appointed as Lead Game Art because she was the most motivated to take on this role.

**Game Audio:**
Samuel Rochat took on the role of Lead Audio, as he quickly learned how to use Wwise and was highly enthusiastic about working on a game.

**Game Programming:**
Since the programming team played a central role in the project, multiple leadership positions were assigned.<br>
Remy Lambert became the Product Owner, as the original game pitch was his idea. He also took on the role of Game Designer and Level Designer. <br>
Constantin Vérine was assigned as the Producer, leveraging his prior experience in team management. <br>
Olivier Pachoud was designated Lead Programmer and also took on the role of Graphics Programmer and Tech Artist, allowing him to specialize in his field of interest for his future job.

# 3. Calendar
The school required us to have a deliverable build of the game by February 14th. On the other hand, Nicolas Brière, our main instructor, advised us to continue working on the game after February 14th to achieve a level of quality sufficient to apply for Student Game Awards.

## 3.1 End of July 
We pitched the game and showed a prototype to our teachers : Farhan Elias who is the Games Programming Head of SAE and Vallée Nicolas who is the Games Art Head. We also showed the prototype to Brière Nicolas who is the Co-CEO & Creative Director of Old Skull Games, a 70 people game development studio based in Lyon (France).

<div style="text-align:center">
  <img src="/ruby/gifs/bounce_on_mirror.gif">
  <p style="margin-top: -30px"><em>Gif of our very first prototype in July.</em></p>
</div>

## 3.2 August 
We did a proof of concept following Nicolas Brière's feedback on our July prototype. The aim was to prove that the game is fun, to validate the key features and to show our creative ideas by placing placeholders in the game. We believed that if we started the new semester with a solid proof of concept, it would be easier to motivate the Art and Audio teams. It would also reassure Nicolas Brière about the project's future and demonstrate our strong commitment to creating an outstanding student game.

Video of our Proof of Concept in August.
<iframe width="750" height="420" src="https://www.youtube.com/embed/X0bnC_ms4Og?si=UUUXx-IuADwCqKzb" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 3.3 September to October
We produced an initial production prototype to validate all the core features, work on gameplay feedback and draw up a first draft of the level design for the vertical slice.

Video of our first Production Prototype which was focused on core mechanics and puzzles.
<iframe width="750" height="420" src="https://www.youtube.com/embed/zMjtl-OyK8k?si=utdHB_2QaVlcJ-12" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 3.4 November to December: 
We did the second Production Prototype which aimed to have 80% of the game experience as well as the final level design for the vertical slice. We also worked on the narration to add more context and life to the game.

Video of our second Production Prototype which was focused on Game Experience and Storytelling
<iframe width="750" height="420" src="https://www.youtube.com/embed/FqNpRNgoEnc?si=IwW1h0k3m7cqI_hs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 3.5 January to 14 February
We did the vertical slice for the school's submission deadline. Unfortunately, not all the content we would have liked to see was available, due to the fact that the scope of the project was changed at the end of October on the advice of Nicolas Brière.

Video of our Preliminary Vertical Slice for the school's submission deadline.
<iframe width="750" height="420" src="https://www.youtube.com/embed/FqNpRNgoEnc?si=IwW1h0k3m7cqI_hs" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

If we follow our desire to enter our game in awards, we have to finish the second part of the game, which lacks assets. We also need to do a lot of polishing and a trailer to show off our game. 
# 4. Project Management
Our main goal has always been to create a pleasant working environment where everyone has the right to express their ideas, and we wanted to avoid working under stress. We were willing to progress more slowly than expected if it meant maintaining good team harmony and motivation.
## 4.1 Agile Methodology
For the management of the project, we chose to adopt the agile methodology, as it is commonly used in the video game industry. Our teachers and lecturers also encouraged us to work in this way.
We structured our work around sprints, integrating tasks from our roadmap, which served as the main backlog.
### 4.1.1 Roadmap
The Roadmap was the document that set our long-term goals. We created it at the end of July 2024, just before leaving for summer vacation. We decided to include the month of August in the roadmap, even though we were on break, in order to have a proof of concept ready for the start of the school year. The goal was to motivate the Game Art and Game Audio teams while also showing Nicolas Brière that we were committed to making a great game.

We divided the remaining six months of the project into three two-month milestones. The first milestone was a prototype validating the core features and the direction for Level and Puzzle Design. The second milestone was a prototype containing almost the entire game experience. Finally, the last milestone was the completed vertical slice.

<div style="text-align:center">
  <img src="/ruby/images/roadmap.png">
  <p style="margin-top: -30px"><em>Screenshot of our Roadmap made in Miro.</em></p>
</div>

### 4.1.2 Sprints
Our sprints lasted between two and three weeks. During the first few months of the project, only the Games Programming team was active, and we followed a structured process:
- At the start of each sprint, we met face-to-face or on Discord to select our tasks based on the milestones defined in the roadmap.
- The tasks were then distributed via Jira.
- At the end of the sprint, we took stock, adjusted the objectives and carried over any unfinished tasks to the next sprint.

However, with the arrival of Game Artists and Games Audio on the project, our sprint management became more difficult to maintain. The integration of new teams made coordination more complex, and we gradually abandoned Jira, which no longer suited our organisation. We then opted for a more flexible way of managing tasks, by chatting directly on Discord and adapting to everyone's needs.
## 4.2 Meetings with Teachers and External Experts
We saw our teachers, Elias Farhan and Alexandre Serex, once a week at meetings we called weekly. During these meetings, we showed them our progress for the week and projected future tasks and objectives for the project. This enabled us to receive frequent feedback from our teachers.

Nicolas Brière was our main teacher. We saw him about every three weeks. He coached us enormously on the design of the game and on management decisions. In fact, it was following his advice and the kick-off he gave us at the end of October 2024 that we took control of the project to achieve a better final quality.

Other contributors came to analyse our project, including Dorian Ventura, Associate Lead Level Designer at Old Skull Games, who helped us with the level design, and Arash Naderi, Designer at Elsewhere, who playtested our game.

## 4.3 Meetings Between Students
At the end of October 2024, following Nicolas Brière's advice, we set up a weekly routine where we would get together as students to talk about the project. Together we would look at each other's work, give feedback, brainstorm and set our sprint goals. 

These meetings, in parallel with the discord server, were the heart of our teamwork and were extremely enriching. We were able to understand each other's needs and act accordingly. We were also able to create sub-teams of people who worked together on the same aspect of the game, each in their own area of expertise.

# 5. Individual Contributions
Since we were the project leaders, we had a demanding set of specifications that we tried to distribute more or less evenly among the four of us. Each of us has something to share regarding our role(s), responsibilities, and anticipated learning outcomes.
## 5.1 Remy 

### 5.1.1 Specifications

As a Product Owner I was responsible for defining the overall vision of the project and ensuring its alignment throughout development. My tasks included:
- Writing documents to communicate the project’s vision.
- Managing communication between stakeholders and team members to guide the project in the right direction.
- Implementing tools to facilitate task management.

As a Level Designer, my role was to shape engaging and meaningful gameplay experiences. This involved:
- Creating basic level structures through greyboxing.
- Setting up placeholder assets to establish the artistic vision.
- Designing a game flow that makes sense to the player.
- Building levels while developing elements that aid comprehension.

### 5.1.2 Development Timeline
August:
- Writing the Game Design Document.
- Developing the Proof of Concept: a small level demonstrating the project’s ambitions to assess its fun potential.
- Implementing core gameplay mechanics.
- Iterating on player feedback.
- Integrating placeholder assets (characters, mechanical sounds, ambient sounds).
- Researching foliage.
- Analyzing level flow: too linear? Puzzles too complex or too simple? Lack of clarity?
- Setting up the UI.

September - October:
- Writing the Creative Vision Document.
- Collaborating with Game Artists.
- Implementing the FTUE (First-Time User Experience) and tutorial area.
- Creating a video playback system within the UI to help explain mechanics.
- Introducing procedural splines (PCG).
- Researching landscapes and testing brushes.
- Designing unique and recognizable dungeon concepts.
- Developing a dungeon structured around two towers.

November - December:
- Integrating assets into Unreal and replacing placeholders in blueprints.
- Developing the project’s narrative direction, including lore and overall storytelling.
- Working on a "beautiful corner" (arranging props, decals, and grunge effects).
- Restructuring the tower level.
- Improving the Hub: refining environmental storytelling and optimizing level flow.
- Fixing bugs reported via Discord.
- Implementing a simple dialogue system.

January - February:
- Adding new foliage.
- Implementing animations for Ruby.
- Integrating dialogues.
- Freezing content in existing levels.
- Adding coherent tutorial videos.
- Updating the UI.
- Introducing a text-based introduction (white text on black background) to establish the lore.

### 5.1.3 Anticipated learning
Going into this project, I expected to gain experience with Unreal Engine, as it was my first project using this engine. We chose to develop the entire game using Blueprints, Unreal’s visual scripting system, instead of coding in C++.
Throughout the project, I learned how to use various tools specific to Unreal, such as:
- Unreal’s internal modeling tools for creating simple shapes and visualizing mechanics (e.g., mesh for crystals).
- The Landscape system to sculpt terrain instead of working on a flat plane, enabling road creation and mountains.
- Animation systems, including Animation Blueprints (State Machines) and retargeting skeletons. This was especially useful when auto-rigging and retargeting animations for our main character to use existing animation libraries.

One aspect I hadn’t fully anticipated was how much I would learn about team project workflows, particularly in terms of communication and management. I was significantly helped and guided by our mentor, N. Brière, as I had no prior experience in this area.

Overall, I had to self-train extensively in level design, both in theory and hands-on implementation. Certain tasks, like learning the basics of the modeling tools to create the greybox or set up mechanics, took more time than expected. Similarly, game design documentation, especially writing and refining the GDD (Game Design Document) into a practical and efficient format, required multiple iterations and took longer than anticipated.

## 5.2 Constantin
### 5.2.1 Specifications
#### 5.2.1.1 Producer
#### 5.2.1.1.1 Management
At the start of the project, when roles were being assigned, I volunteered to take on the role of producer. 
My initial responsibilities included establishing an effective methodology to ensure seamless collaboration and communication between the different groups.
To facilitate this, I created a Trello board for the programming team, which proved to be effective in the early stages of the project.

After some time, we decided to transition from Trello to Jira. However, we eventually abandoned Jira as well, realizing that, as a team of four programmers, we didn’t need such a complex tool. It was becoming more of a time sink than a benefit. Since we conducted weekly reviews and frequently worked together, we always had a clear understanding of each team member’s tasks.

Meanwhile, since the artists preferred to manage their own planning, I created an asset list to provide clear guidance on what needed to be produced.

When the audio team joined the project, we implemented a similar system to help them manage asset production. Additionally, integrating Wwise with Unreal Engine presented numerous bugs and technical challenges, which took a considerable amount of time to resolve.

#### 5.2.1.1.2 Reviews
As the producer, I was responsible for conducting all weekly reviews. This involved preparing a PowerPoint presentation each week for our teacher. Additionally, since around October, I created a more comprehensive presentation every two weeks for an external supervisor overseeing the project.
#### 5.2.2.2 Programmer
As a member of the programming team, the lead programmer assigned me various tasks, including gameplay programming, bug fixing, and code refactoring. Below is a non-exhaustive list of some of my contributions:

- Added and tested various features (cloth simulation, sprint, etc.).
- Improved existing features (Sapphire, aim system, laser, capstan, etc.).
- Fixed bugs (aim system, double-sided symbol, Sapphire positioning, etc.).
- Designed the main menu and options menu.
- Implemented key mapping using Unreal Engine's new input system.
- Adjusted camera sensitivity and visual placement of game objects.
- Conducted research on puzzle, level, and game design.
#### 5.2.2.2.1 Audio Programmer
When the audio team joined the project, we needed someone from the programming team to take on the role of Audio Programmer to handle sound implementation. I volunteered for this position, taking full responsibility for integrating all audio assets into the game.

As the Audio Programmer, my role involved implementing all sounds from Wwise into Unreal Engine. This included setting up Wwise events, ensuring proper triggering of sound effects, music, and ambient audio, and troubleshooting any integration issues. I also worked closely with the audio team to ensure their assets were correctly implemented and functioned as intended within the game environment.
### 5.2.2 Anticipated learning
Before the project began, I anticipated learning a variety of skills related to both game development and project management. As a producer, I expected to gain experience in team coordination, task planning, and communication strategies to ensure smooth collaboration between different disciplines. I also looked forward to learning how to effectively manage production workflows using industry-standard tools like Trello and Jira.

On the technical side, I expected to learn how to use Unreal Engine and deepen my knowledge of gameplay programming, debugging, and code optimization while working within a team. Additionally, since I took on the role of Audio Programmer, I anticipated learning how to integrate sound into Unreal Engine using Wwise, understanding how audio systems interact with gameplay elements, and troubleshooting common audio implementation challenges.

Overall, I expected this project to enhance both my technical and organizational skills, preparing me for future work in game development.

## 5.3 Alexis
### 5.3.1 Specifications
As a member of the programming team, the lead programmer assigned me various tasks, including gameplay programming, bug fixing, and code refactoring. Below is a non-exhaustive list of some of my contributions:
- Refactor of the door system
- Add the crystals “on-off”
- Refactor of the crystals code
- Add a statue that prevent sapphire from shooting (abandoned)
- Improve how boxes and spherical objects are handled by the player
- Improve a lot of capstan works

### 5.3.2 Anticipated learning
I anticipated that I would learn how to create and manage a game project on Unreal and have contact with artists and audio members.

## 5.4 Olivier
I volunteered to take on the role of Lead Programmer because I really wanted to get involved in the project and the other two roles, Producer and Product Owner, were already very well allocated from my point of view. I had also used Unreal before my colleagues during Game Jams, so I had a bit more knowledge on the subject than they did.

I also wanted to become the project's Graphics Programmer / Tech Artist because that's the kind of job I want to do after my studies. So I took the opportunity of this project to show what I was capable of and to improve myself by learning lots of new things.

Although my main roles were very technical, I worked a lot with the Audio team as soon as they arrived on the project and I've also worked a lot with Game Arts over the last few months. I even took on part of the Producer role by organising meetings between students to reframe the project at the beginning of November.

### 5.4.1 Specifications
Overall, my specifications have evolved a lot over time and I've been able to touch on every aspect of the project, from code, to level/puzzle design, to team and project management.

#### 5.4.1.1 August
This is the month during which we did our Proof of Concept during our summer holidays. At that time, only the Games Programming team was working on the project. My task as Lead Programmer and Graphics Programmer was as follows:
- Develop an initial draft of the cel shader to quickly iterate with the future assets from the artists
- Implement Sapphire (the companion)
- Code all the key features (shooting, pushing…)
- Iterate on the 3Cs
- Code the most important core features (lasers, mirrors…) to quickly test puzzles
- Provide essential feedback
- Work on Level Design

<div style="text-align:center">
  <img src="/ruby/gifs/proto_laser.gif">
  <p style="margin-top: -30px"><em>GIF of my gym level where I tested the key and core mechanics of the game. You can see the prototype for the laser mechanic and the white blocks are the capstan mechanic. You can also see my first cel shader render.</em></p>
</div>


#### 5.4.1.2 September to October
During these two months, we made our first prototype. Since the game mechanics had already been coded, my task was more focused on Puzzle and Level Design.

It was also at this point that the Audio team joined the project. Since Remy, our Product Owner, already had a lot of project management work with the artists and design documents that Nicolas Brière required us to deliver, I took it upon myself to communicate the creative vision to the Audio team and serve as a liaison between the Games Programming and Audio teams.
Here was my task for this first production prototype:
- Create the main VFX
- Research puzzle design to create interesting puzzles
- Understand what is fun for players in our mechanics
- Playtest the game to validate the fun mechanics
- Validate the core features based on the playtests
- Improve and refactor validated core features
- Tweak Level Design to integrate the puzzles
- Pitch the game to the audio team
- Set up Wwise in the Unreal project and link it to Perforce
- Implement sounds

<div style="text-align:center">
  <img src="/ruby/images/laser_puzzle.png">
  <p style="margin-top: -30px"><em>A laser colour mixing puzzle from the game's playtest days 
to analyse what players found fun.</em></p>
</div>

<div style="text-align:center">
  <img src="/ruby/gifs/vfx.gif">
  <p style="margin-top: -30px"><em>One of the VFX I did during this period among many others. This one is the power to switch the position of two objetcs.</em></p>
</div>

#### 5.4.1.3 November to December
During these two months, team cohesion was at its peak. This is when the project took a more professional turn, especially thanks to Nicolas Brière. Our mission for this second prototype was to bring narration, context, and Level Art to our game, in addition to creating most of the overall game experience.
My task evolved as follows:
- Organize weekly reviews with all the students
- Supervise the Audio team
- Maintain the global game experience document
- Help find creative and narrative ideas
- Implement the artists' assets with our code
- Validate a “final” version of the cel shader for the February render
- Create the Level Design for the second ruin (unfortunately deleted)
- Validate existing puzzles and their mechanics
- Create the remaining puzzles
- Fix bugs in the code
- Test cinematics and lighting
- Code an aim assist for controller gameplay

<div style="text-align:center">
  <img src="/ruby/images/castle.png">
  <p style="margin-top: -30px"><em>Screenshot of the castle ruin which has unfortunately been removed because of the workload it would represent for the Game Artists.</em></p>
</div>

<div style="text-align:center">
  <img src="/ruby/images/old_cel_shader.png">
  <p style="margin-top: -30px"><em>Screenshot of the Cel Shader version I validated with the Game Art team. At that point, I wasn't sure I'd have time to continue refining the shader, so I decided to make a stable version that we'd be able to support for the school's delivery date.</em></p>
</div>

<div style="text-align:center">
  <img src="/ruby/images/old_corner.png">
  <p style="margin-top: -30px"><em>Screenshot of our prototype beautiful corner where you can see our narrative work with the frescoes, our Level Art work and my lighting tests with the god rays.</em></p>
</div>

#### 5.4.1.4 January to February 14
During these months, we revisited our art direction following advice from Nicolas Vallée. My role as Graphics Programmer was more challenging than ever. Additionally, my role as Lead Programmer pushed me to optimize and tweak the code to ensure smooth gameplay.
Here was my task for this period:
- Rework the cel shader to make it more modern and original
- Add hatching in low EV parts
- Make an outline that darkens the colour of the pixels of the shapes it surrounds
- Illuminate shadow areas with a bluish tint
- Supervise the Audio and Art teams
- Create the game cinematics
- Implement narrative zones
- Fix the final bugs
- Ensure a framerate of at least 30fps
- Ensure high-quality graphical rendering
- Ensure the puzzles are understandable and fun
- Ensure the controls are enjoyable
- Create the missing VFX and feedbacks
- Implement sounds for the cinematics
- Implement sounds for the dialogues
- Implement character sound effects for certain gameplay actions

<div style="text-align:center">
  <img src="/ruby/images/cel_shader.png">
  <p style="margin-top: -30px"><em>Screenshot of the Cel Shader version for the final submission to the school on 14 February.</em></p>
</div>

<div style="text-align:center">
  <img src="/ruby/images/vs.png">
  <p style="margin-top: -30px"><em>Screenshot of our Preliminary Vertical Slice for the school's submission deadline.</em></p>
</div>

### 5.4.2 Anticipated learning
Through this project, I primarily expected to learn a lot about teamwork during game development. I thought I would learn more about the creation and implementation of 3D assets than about sound design, but perhaps the opposite is what actually happened.

Of course, I expected to learn a great deal about Unreal Engine 5, especially its tools, workflows, best practices, plugins, etc. My passion for computer graphics also pushed me to want to learn how to create shaders and VFX in Unreal. I also planned to learn how to work with Perforce and its integration with Unreal Engine.

Finally, I thought I would learn a lot about game design in a more professional way, as opposed to the student prototyping process, if I may put it that way. I was expecting to discover ways to polish a game and bring real creativity to it.

# 6. Assessment of the Level of Ambition, Risks and Fears
Our main fear was that our final game would look a bit cheap; we wanted to have an imposing project for a student game. However, we'd never made a game that went so far in detail and polish. Despite the challenge, we wanted to give it a go.

Once Nicolas Brière suggested that we push the project to the next level so that it could be nominated for awards, our initial fears grew, but we were strongly motivated to give it a go. The design aspect of the game had become our main fear. Without a concept artist, a narrator or a game designer, we were going to have a game of the same quality as the student games from other schools with this type of training.

We were also afraid that we wouldn't be able to manage collaborations with Game Art and Game Audio students. It was up to us, the game programmers, to manage the project and we had never worked in such a large team. We were afraid of losing people's motivation, wasting their time or simply miscommunicating our ideas.