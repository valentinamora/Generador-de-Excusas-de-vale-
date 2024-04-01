/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  //write your code here
  let theExcuse = () => {
    let who = ["The phone", "My hedgehog", "The robot", "My sheep"];
    let action = ["eat", "chew", "destroyed", "sold"];
    let what = ["my house", "my cat", "the tractor"];
    let when = [
      "before the practice",
      "when I was cleaning",
      "while I was playing basketball",
      "during my dinner",
      "while I was praying"
    ];

    let randomwhen = when[Math.floor(Math.random() * when.length)];
    let randomwhat = what[Math.floor(Math.random() * what.length)];
    let randomaction = action[Math.floor(Math.random() * action.length)];
    let randomwho = who[Math.floor(Math.random() * who.length)];

    return randomwho + " " + randomaction + " " + randomwhat + " " + randomwhen;
  };
  let excusa = theExcuse();
  console.log(excusa);

  let textExcuse = document.getElementById("la-excusa");
  textExcuse.innerText = excusa;
};
