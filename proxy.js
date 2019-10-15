let keyA = document.getElementById("a-key");
 
const keyPressed = () => {
  keyA.classList.add("pressed");
}
 
const keyLift = () => {
  keyA.classList.remove("pressed");
}
 
 
document.onkeydown = pressEvent => {
  if(pressEvent.key === "a"){
   keyPressed();
  }
}
 
 
document.onkeyup = liftEvent =>{
  if(liftEvent.key === "a"){
  keyLift();
  }
}