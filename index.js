
// random function
function rand(i, j){
  var rndm = i+Math.floor(Math.random()*(j-i+1));
  console.log("random num generated: " + rndm);
  return rndm;
}

// audio play function
function playAudio(index){
  // selecting track based on index
  console.log("start audio index: " + index);
  var audio = new Audio("audio/track-" + index + ".wav");
  audio.play();
}

// audio stop function
function stopAudio(index){
  console.log("stop audio index: " + index);
  var audio = new Audio("audio/track-" + index + ".wav");
  audio.pause();
  }

// tile input
const inputEl = document.getElementById("input-el");
const goBtn = document.getElementById("go-btn");
const tileBd = document.getElementById("tile-board");
var index = 0;
console.log("index value created: " + index);

goBtn.addEventListener("click", function(){
  console.log("index value inside click event: " + index);
  // if statement so onclick func doesn't execute with null input for matrix order
  if(inputEl.value){
    console.log("index value inside input-el condition: " + index);
    let n = inputEl.value;
    console.log("order of matrix input: " + n);
    // changing inner html to add rows and columns
    tileBd.innerHTML = "";
    // to be added
    let htmlAdd = "";
    for (var i = 0; i<n; i++){
      // starting div only needed at start
      htmlAdd += `<div class = row>`;
      // string template using backticks
      for (var j = 0; j<n; j++){
          row = document.getElementsByClassName("row");
          // tile key is matrix cell id
          var tileKey = i*n + (j+1);
          // creating 
          // div needed to make each tile having the same class "tile" for css and unique id = tileKey to do specific attribute changes on tile hover
          htmlAdd += `<div class = "tile" id = "tl" + ${tileKey} + > </div>`;
      }
      // ending div only needed at block end
      htmlAdd += `</div>`;
  }
  tileBd.innerHTML += htmlAdd;

  // HOVER
  // need to make color changes to each tile based on the random function and hover(mouse-over) event
  const tiles = document.querySelectorAll('.tile');
  // run hover function call for each tile using "for each" function
  tiles.forEach(function(tl){
    console.log("index inside tiles.forEach: " + index);
    // mouse over event to play song and show highlighted tile for hover over each tile
    tl.addEventListener("mouseover", function(){
      console.log("index value inside mouseover event: " + index);
      // calling random function for random number between 0 and 7 for playing the first random note
      var rndm = rand(index, 7);
      console.log("rndm value generated from rand call: " + rndm);
      if(rndm>7 || index == 7){
        // index 0 again so we can start playing random note again
        index = 0;
        console.log("if-else index1: " + index);
      }
      else{
        // to play next note in order of the first random note played
        index++;
        console.log("if-else index2: " + index);
      }

      // generate random color then change it for each tile hover
      // colorHash is string type
      var colorHash = "#" + Math.floor(Math.random()*16777215).toString(16);
      console.log("Hash value generated: " + colorHash);
      tl.style.backgroundColor = colorHash;
      // playing audio based on index
      console.log("index value sent to func: " + index);
      tl.addEventListener('mouseover', playAudio(index));
      // stopping audio with specified time-interval
      setTimeout(tl.addEventListener('mouseleave', stopAudio(index)), 1000);
    });


  });

  }
});
