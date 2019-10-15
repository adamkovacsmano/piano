export default class Key {
  constructor(note, idName, variable, audio){
    this.note = note
    this.idName = idName
    this.variable = variable
    this.audio = audio
  }

  get sound(){
    
  }

  get keyPressed(){
    this.variable = document.getElementById(`${this.idName}`);
    variable.classList.add("pressed");
  }

  get keyLift(){
    this.variable = document.getElementById(`${this.idName}`);
    this.note.classList.remove("pressed");
  }

  render(){
    return `<button id ="${this.idName}">${this.note}</button>`;
  }

}

