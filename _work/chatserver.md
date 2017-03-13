---
layout: page
title: Chat Server
permalink: /work/chatserver/
weight: 4
color: "#AD45D3"
image: /assets/images/chat-server-icon.png
summary: | 
    ## Chat Server
    This project was part of the course 
    *"Computer Networks and the Internet"*. Where the propose was to build a functioning chat server and chat clients which could communicate with each other.
    [Read on...](/work/chatserver/)
---



# ![Chat Server icon](/assets/images/chat-server-icon.png) Chat Server  

<span class="preamble">
This project was part of the course “Computer Networks and the Internet". Where the purpose was to build a functioning chat server and chat clients which could communicate with each other. The assignment focused on giving an understanding on how protocol works through out networks and especially the internet.
</span>

The project were divided into groups of two and within my groups I stood for a lot of the programming while we both worked out the design of the system.

The system which was use for this project was divided up into three parts. A name server, a chat server and chat clients.
The name server was already implemented and was used for the chat clients to be able to find the chat server. The chat servers had to register themselves at the name server and give a constant heartbeat to not become unregistered.
![List of chat servers](/assets/images/chat-server-screenshot-server-list.png)
When the chat clients found a chat server though the name server, they would connect with each other and communication through a protocol consisting of 15 different protocol data units. These PDU's (protocol data units) had different functionality and purposes, for example: send message, change nickname or get a list of connected clients.

The work process for this assignment was very much up to the students. The job was done in groups of two and the entire system was written in Java. What I and my work partner did was to very early work out a design for how the system should work, mostly using UML diagrams. However it was clear that after we started to implement parts of the protocol that our design had a lot of missing parts and needed to be reworked for fit our newly found knowledge of how the protocol should actually be used.  
[Full UML class diagram of entire system v1](/extra/files/ChatServer_UML_v1.pdf)  
[Full UML class diagram of entire system v6 (final)](/extra/files/ChatServer_UML_v6.pdf)
  
![List of chat servers](/assets/images/chat-server-screenshot-in-chat.png)

Besides the actually implementation there were also a lot of requirements on testing, both using unit tests and full system test.  