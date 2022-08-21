// tile input
const inputEl = document.getElementById("input-el");
const goBtn = document.getElementById("go-btn");
const tileBd = document.getElementById("tile-board");
const tileHd = document.getElementById("tile-head");
const startInp = document.getElementById("start-input");
var index = 7;
var count = 0;
console.log("index value during declaration: " + index);

// random function
function rand(i, j){
  var rndm = i+Math.floor(Math.random() * (j-i+1) + i);
  console.log("random num generated in rand function: " + rndm);
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

console.log("index value during declaration: " + index);

goBtn.addEventListener("click", function(){

  // changing input and button tag to reload button on click
  console.log("index value inside click event: " + index);
  // if statement so onclick func doesn't execute with null input for matrix order
  if(inputEl.value){
    console.log("index value after input-el condition: " + index);
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
          htmlAdd += `<div class = "tile tile-spec" id = "tl" + ${tileKey} + > </div>`;
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
      if(index >= 7){
        index = rand(0, 7);
        console.log("random index made for next hover after 7th track: " + index);
      }
      else{
        index++;
      }

      // generate random color then change it for each tile hover
      // colorHash is string type
      var colorHash = "#" + Math.floor(Math.random()*16777215).toString(16);
      console.log("Hash value generated: " + colorHash);
      tl.style.backgroundColor = colorHash;

      // playing audio based on index
      console.log("index value sent to start/stop func: " + index);
      tl.addEventListener('mouseover', playAudio(index));
      // stopping audio with specified time-interval
      setTimeout(tl.addEventListener('mouseleave', stopAudio(index)), 2000);
    });

  });
  }
  
  count++;
  if(count%2 != 0){
    // adding inner html to load "Tile Matrix" heading on click
    tileHd.innerHTML = `<h2><em>Tile Map</em></h2>`;
    goBtn.textContent = "Reload";
    inputEl.value = "";
    inputEl.style.display = "none";
  }
  else{
    goBtn.textContent = "GO!";
    tileHd.innerHTML = "";
    tileBd.innerHTML = "";
    inputEl.style.display = "";

  }

});
