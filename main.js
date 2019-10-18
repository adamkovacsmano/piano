import Key from "./data/Keys.js";

let dataArray = ["c", "d", "e", "f", "g", "a", "b"];

let keyArray = dataArray.map(i => new Key(i));


document.onkeydown = pressEvent => {
  for (let index = 0; index < dataArray.length; index++) { 
      if (pressEvent.key === keyArray[index].idName) {
      keyArray[index].keyPressed();
      audioList[index].play();
    }
  }
}


document.onkeyup = liftEvent => {
  for (let index = 0; index < dataArray.length; index++) {
      if (liftEvent.key === keyArray[index].idName) {
      keyArray[index].keyLift();
    }
  }
}

const renderFunc = () => {
  let piano = document.getElementById("keylist");
  keyArray.forEach(key => piano.innerHTML += key.render());
}

renderFunc();

let c = new Audio("sounds/C4.mp3");
let d = new Audio("sounds/D4.mp3");
let e = new Audio("sounds/E4.mp3");
let f = new Audio("sounds/F4.mp3");
let g = new Audio("sounds/G4.mp3");
let a = new Audio("sounds/A4.mp3");
let b = new Audio("sounds/B4.mp3");

let audioList = [c, d, e, f, g, a, b];



// var interval = 200; // 200ms interval

// var fadeout = setInterval(
//   function() {
//
//     if (vol > 0) {
//       vol -= 0.05;
//       audio.setVolume(vol);
//     }
//     else {
//   
//       clearInterval(fadeout);
//     }
//   }, interval);