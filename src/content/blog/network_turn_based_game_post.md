---
title: "The network protocol of my C++ turn-based game."
description: "Post about the protocol implementation I created for my C++ online 8-ball pool game."
pubDate: "April 08 2024"
heroImage: "/network_turn_based_game/videos/demo.mp4"
tags: ["Game", "2D", "SAE", "Network", "C++"]
---

Hello, I recently learned the basics of network programming in a course module at SAE Institute Geneva. 
I had to put this knowledge into practice to create a small turn-based network game using the SFML library and TCP sockets, 
all in three weeks. 
So I created my very first network protocol to communicate data between the various clients of my game and my server.

I chose to make a 8-ball pool game using my own 2D physics engine. 
I've set up a lobby system that allows several games to be played simultaneously by several clients on the server. 
I also have a database that stores the username and elo of each player connecting to the game.

![Demo of my 8-ball pool <br> It shows two players (blue and red windows) playing a game in network](/network_turn_based_gamevideosdemo.mp4)

I'm only going to present the protocol I've created for my game, based on Tcp sockets supplied by SFML. 
I'm only going to talk about the application layer, since my protocol is located there.
If you're interested in the transport and network layers, please refer to the SFML documentation.
With that being said, let's get into it.

# Packet types.

The basis of my protocol is an enum called PacketType, 
which differentiates the different packets and allows correct interaction with each of them.

PacketType:

- kNone 
- kClientIdentification,
- kJoinLobby,
- KStartGame,
- kNewTurn,
- KCueBallVelocity,
- kEndGame,
- kEloUpdated,

The first piece of data contained in a packet is always a PacketType so that the way in which the rest of the packet's 
data is read can be adapted. <br>
Here is a small example in pseudo-code for sending a packet:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
sf::Packet my_packet{};
my_packet << PacketType << any_type_of_data;
client_network_interface_->SendPacket(my_packet);
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~

And here is a small example in pseudo-code for receiving and decoding a packet:

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ c++
sf::Packet received_packet;
const auto packet_type = client_network_interface_->ReceivePacket(received_packet);
switch (packet_type) {
  case PacketType::kNone:
    std::cerr << "Packet received has no type. \n";
    break;
  case PacketType::kJoinLobby:
  case PacketType::kClientIdentification: 
  case PacketType::kEloUpdated:
  case PacketType::KStartGame:
  case PacketType::kNewTurn:
  case PacketType::KCueBallVelocity:
  case PacketType::kEndGame:
    // Do what whatever you need to do
    break;
  default:
    break;
}
~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~ 

# Client connection and identification.

When a user launches the client application, it connects its socket to the server using SFML-Network. 
Once the connection has been made, the client application is in the user identification state. 
In other words, the application asks the user to identify himself by giving a username. 

![Demo of client identification in my app.](/network_turn_based_game/gifs/client_identification.gif width=300 height=450)

When the user has typed a name, a packet of type kClientIdentification containing the name string is sent to the server. The server then makes an HTTP request to the database to retrieve the player's elo. There are two scenarios.

1. The username is already in the database, so the server retrieves the player's elo.
2. The username is not in the database, so the server creates a new player with this name and a base elo of 1000. 

The server then sends the client a packet of type kClientIdentification containing the client's username and elo. 
When the client receive this packet the client-application switches to the main-menu state.
This mechanism for returning the same type of packet guarantees that the client is properly logged in and identified, 
and that he can now use his application freely. 
It also makes it possible to reuse an existing packet type limit the size of the PacketType enumeration.

# Joining a lobby.

When the user presses the play button on the main menu, this sends a KJoinLobby packet to the server containing his username.
The server will look for the first free lobby and add to it a ClientData object containing the player's username and 
the port number on which the packets arrive.

Once the sucessfuly player has been added to the lobby, the server sends back a packet of type kJoinLobby 
so that the client is aware that it is indeed in a lobby, and the application switches to lobby GUI and state.

![Demo of two clients joining a lobby.](/network_turn_based_game/gifs/lobby.gif height=450)

# Starting a game.

When the server adds a second user to a lobby, the lobby is complete and a game can be started. 
The server creates a kStartGame package containing the value "true" and a player index for each client. 
The "true" value is used by the client to initialize its game, and the player index is used to differentiate between players, 
by giving them different colors (blue and red), for example.

The server also sends a kNewTurn packet to the first player to enable him to play. 
Clients simply receive the packet data, their application initializes a new game object, switches to the game state
and the game of 8-ball billiards can begin.

# In-game packet communications.

There are only two different types of packages used in my game logic. <br> 
You're already familiar with the first, which is a 
kNewTurn package. This packet contains only a boolean to update the player's logic, which says whether the player can play or not.
This packet is sent to the server, which will send it back to the other client when a player has played and the physical simulation is complete (when all the balls have been hit). 
is complete (when all balls have a speed below an epsilon value). <br>

The second type of packet is KCueBallVelocity. A packet of this type is sent to the server when a client has hit the ball.
It's important that the client doesn't simulate physics immediately after hitting the ball. It must wait for the 
response from the server to update the physics for a deterministic time so as to have exactly the same simulation as the other client.
This server response corresponds to another KCueBallVelocity sent to both clients. So, when a client receives this type of
it will update the physics until all the balls have a speed greater than an epsilon value.
If the client doesn't wait for the server to simulate the physics, it won't get the same simulation. This is why this
this server response is very important.

![Old version of my game when the clients don't wait the response from the server to 
simulate the physics. The more the game last, the more the physics desyncrhonization can be seen.](/network_turn_based_game/videos/physics_bug.mp4)

# End of game and update of players' elo.

The last part of my protocol is to finish the game and update each player's elo.
If you're not a network novice, you'll know that you need to give the client as little control as possible 
over the state of the game, otherwise the user could modify the code and cheat on your game. 
But when I created my game, as I said, it was the first time I'd written network code, and I unfortunately made it 
so that the client would tell the server that it had won. So, when a player has put the last 
in a hole, he sends a kEndGame packet with a Boolean value indicating that he has won. The server receives the
packet and sends a kEndGame packet with a "false" value to the other client, telling it that he has lost.

Next, the server updates each client's elo in the database according to his result and sends a packet of type kEloUpdated
packet to each client with its new elo. When the client receives the kEloUpdated packet, it activates the end-of-game menu. 
If one player leaves the game before it's over, the other player automatically wins the game and both players have their elo updated. 
both players are updated.

![Demo of a player winning the game + the ability to restart a game easily.](/network_turn_based_game/videos/end_game.mp4)

# Conclusion.

My protocol is cleary not perfect. As I said before, the client has too much control on the game state 
which is very unsafe. Despite that, I find the idea of ​​reusing the same type of packet to communicate in both directions 
of the network (client->server server->client) smart enough not to double the number of variables in my enum.

To upgrade my program I would make my server more authorative. It means that I would need to simulate the physics in 
the server side too and check the physic state of the clients. Based on that, the server would be able to tell to which one the 
turn is and which player won the game. 

# My network code documentation.

If you are intersted in the network code I made for my game, you can check the documentation : <br>
[turn-based game network code documentation](../network_api_doc/html/index.html)

# Download the game.

You can download my game if you feel like it: <br>
Link to the project repository: https://github.com/Chocolive24/network_turn_based_game <br>
Link to the localhost game release: https://github.com/Chocolive24/network_turn_based_game/releases/tag/localhost <br>
There's no link yet for a release that runs online.