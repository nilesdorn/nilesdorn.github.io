# Game Development Portfolio
## Niles Dorn

## Projects:
- [1. Post Reality](#1-post-reality)
- [2. Dejarik](#2-dejarik)
- [3. Sabacc](#3-sabacc)

## 1. Post Reality

Post Reality, a subsidiary of The Glimpse Group, is an augmented reality-centric company based in New York City, NY. Post Reality's flagship app, also named Post Reality, allows users to create and share presentations in augmented reality. Through the app, users can view these experiences through through a number of methods. During the summer of 2021, I worked at Post Reality as a Software Development/Quality Assurance Intern. Over the course of my internship, we rebuilt the Post Reality app from scratch in Unity 3D and successfully pusblished it on both the Apple App Store and the Google Play Store.

While working this internship, I was involved with the Post Realty app’s development from conception to release. The following video portrays the particular feature I developed: easel object placement in augmented reality. Though the Post Reality team has iterated on the easel model and tap to place indicator since my internship ended, my original implementation resembles this current version in most regards. Furthermore, I was also responsible for implementing easel movement and rotation features, which remain unchanged from my implementation and can be seen in action in the video.

{% include youtubePlayer.html id="dusOd25-WxQ" %}

Due to the nature of my internship at Post Reality, all the development work I did for the app is proprietary and I am therefore unable to display the code associated with the above video.

## 2. Dejarik

Dejarik, based on the hologram chess game of the same name played on the Millenium Falcon in Star Wars Episode IV: A New Hope, is a 2D, two-player board game made for MacOS, iPadOS, and iOS devices. I developed this game in Unity 3D with C# over my winter break following the Fall 2021 semester. There are four classes of pieces, each with different possible move and attack patterns. Since I am unable to publish this app to the Apple App Store due to copyright concerns, I have included a video below to display the game's functionality. 

{% include youtubePlayer.html id="0eu2eKCP3c" %}

An interesting problem I ran into while developing this game stemmed the design of its board. Since the board is circular, I was unable to use the standard (X, Y) coordinate system used by other Unity chess games. To combat this issue, I created a coordinate system for the board based on 2 “orbits” (designating the inner and outer circles) and 12 “rays” (designating the 12 spaces within each orbit). I defined each orbit using the radii of its outer and inner border and each ray using the angles its left and right borders made with the positive horizontal axis.

Though this was an effective coordinate system, it resulted in another complication that needed resolution. Again due to the circular nature of the board, the spaces (1, 1) and (2, 1) were adjacent to the spaces (1, 12) and (2, 12). Therefore, unlike similar 2D Unity chess games, I was unable to simply increment or decrement a piece’s position to move it. For example, incrementing (1, 12) would result in the piece moving to (1, 13) (a space which doesn’t exist) instead of (1, 1). To solve this problem, I implemented a NormalizeCoordinates() function that takes an (orbit, ray) coordinate pair and, if the ray value is larger than 12 or less than 0, returns the correct coordinate pair. For examples, NormalizeCoordinates(1, 14) returns (1, 2). With these structures in place, I was able to move on to implementing the primary game loop.

## 3. Sabacc

This game, based on the card game of the same name shown in Solo: A Star Wars Story, is a text-based equivalent to the in-universe game. I developed the game using Python. Similar to blackjack, my version of the game follows the rules outlined in the purchasable version of the game at Disney’s Star Wars: Galaxy’s edge. 
