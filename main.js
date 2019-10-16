import Key from "./data/Keys.js";

let dataArray = ["c", "d", "e", "f", "g", "a", "h"];

let keyArray = dataArray.map(i => new Key(i));

console.log(keyArray.length);


document.onkeydown = pressEvent => {
  for (let index = 0; index < dataArray.length; index++) {
      console.log(keyArray[index].idName);
      if (pressEvent.key === keyArray[index].idName) {
      keyArray[index].keyPressed();
    }
  }
}


document.onkeyup = liftEvent => {
  for (let index = 0; index < dataArray.length; index++) {
      console.log(keyArray[index].idName);
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

// var audio = new Audio("sounds/A4.mp3");
// audio.volume = 1;
// audio.volume = 0.1;
// audio.play();
// var interval = 200; // 200ms interval

// var fadeout = setInterval(
//   function() {
//     // Reduce volume by 0.05 as long as it is above 0
//     // This works as long as you start with a multiple of 0.05!
//     if (vol > 0) {
//       vol -= 0.05;
//       audio.setVolume(vol);
//     }
//     else {
//       // Stop the setInterval when 0 is reached
//       clearInterval(fadeout);
//     }
//   }, interval);