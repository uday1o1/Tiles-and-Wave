# Tiles and Wave!! (Task-3, Team: Uday and Swathika)
Task:
To create a tile grid based on the given input and to play a sound from the 8 musical notes (Do, re, mi, fa, so, la, ti, do) based on the following conditions:
1. For the first hover the site should play a random note from the 8 notes.
2. While the last played note is not pf index = 0 or index = 7(i.e the first and last note) then the next note played should be next in the order.
3. If the last note played has index 7(i.e the 8th note) then the next note played will be random like in the first condition.

Approach to the problem:
1. After taking input from the user using loops and innerHTML <div> blocks for each tile is created each with a common class = "tile" and a uniques tile id based on the tile index.
2. When the tile is created during the first hover over any tile we create a random generated index value between 0 and 7(the index of the audio structure is from 0 to 7 i.e 8 files).
3. The index value is send to audioPlay function which plays the audio track with the same index(need to have audio files named in such a way). Then, a audioStop function is played tha does the same but this time with a time delay so that audio of two tracks doesn't class together.
4. If the index value is not 0 or 7(i.e index != 0 or index != 7) then index is incremented so that during the next hover event the next track in the order is played.
5. If the index value is 0 or 7(i.e index = 0 or index = 7) then index is initialized again with a random value between 0 and 7 as in both cases we need to play a random note from the 8 notes.
6. Using the same concept of random functions in javascript which we used to return a value between 0 and 7 we create a random Hash value generator which we can later use after every tile hover to change the color of the specific tile changing it's background color attribute to the hash value.
