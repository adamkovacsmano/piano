import Key from "./data/Keys.js";

let dataArray = ["c", "d", "e", "f", "g", "a", "h", "c"];

let keyArray = dataArray.map(i => new Key(i));



let aKey = new Key("a");

document.onkeydown = pressEvent => {
  if(pressEvent.key === "a"){
   kayArray.keyPressed();
  }
}

document.onkeyup = liftEvent => {
  if(liftEvent.key === "a"){
    aKey.keyLift();
  }
}

const renderFunc = () => {
  let piano = document.getElementById("keylist");
  keyArray.forEach(key => piano.innerHTML += key.render())
}

renderFunc();
