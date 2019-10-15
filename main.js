// import Key from "./Keys.js";

// let aKey = new Key(A, a-key);

let piano = document.getElementById("keylist");
piano.innerHTML += `<button>A</button><button>H</button>`;

document.onkeydown = pressEvent => {
  if(pressEvent.key === "a"){
   aKey.keyPressed;
  }
}


/* <button>C</button>
<button>D</button>
<button>E</button>
<button>F</button>
<button>G</button>
<button>A</button>
<button>H</button>
<button>C</button> */