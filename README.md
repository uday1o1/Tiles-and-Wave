# Tiles and Wave! (Task-3, Team: Uday and Swathika)
Task:
To create a tile grid based on the given input and to play a sound from the 8 musical notes (Do, re, mi, fa, so, la, ti, do) based on the following conditions:
1. For the first hover the site should play a random note from the 8 notes.
2. While the last played note is of index between 0 and 6(i.e one of the 8 tracks) then the next note will be played from the track queue/ 
3. If the last note played has index 7(i.e the 8th track) then a random note from the 8 tracks will be played.

Approach to the problem:
1. After taking the input(for the grid order from the user) using loops and innerHTML, <div> tags for each tile is created each with a common class = "tile" and a unique tile id based on the tile index.
2. After the tile board is created, when you first hover over any tile, a random index value between 0 and 7 is generated(the audio files are named in such a way that each file can be accessed based on index value).
3. The index value is sent to the audioPlay function which plays the audio track with the same index(audio files are indexed). Then, the audioStop function is called which stops the audio track with the same index after a given time-delay.
4. If the index value is greater than or equal to seven(index >= 7) then the index value is changed to a random value between 0 and 7 using the rand function used earlier.
5. Else the index value will be incremented so that during the next tile hover the next played will of next in order from the previously played track(index++).
6. Using the same concept of random functions in javascript which we used to return a value between 0 and 7 we create a random Hash value generator which we can later use after every tile hover to change the color of the specific tile changing it's background color attribute to the generated hash value.
