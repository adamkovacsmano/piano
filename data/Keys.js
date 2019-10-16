export default class Key {
  constructor(idName){
    this.idName = idName
  }

  keyPressed(){
    let variable = document.getElementById(`${this.idName}`);
    variable.classList.add("pressed");
  }

  keyLift(){
    let variable = document.getElementById(`${this.idName}`);
    variable.classList.remove("pressed");
  }

  render(){
    return `<button id ="${this.idName}">${this.idName}</button>`;
  }

}

