console.log("the message is here!");

//global variable are useful in front end web
// bc you can query the Chrome console for them
let theBody, theText;

clickCounter = 0;
buttonWidth = 100;
buttonHeight = 60;

theBody = document.querySelector("body");
let text = ["click me again", "keep clicking","almost there, a few more clicks", "okay dont click again please", "please stop clicking I'm shrinking","please no more clicks", "I'm dissapearing nooooooo"];
// GET ELEMENT BY ID
// pass the button into a variable using it's id propety
let theButton = document.getElementById("button1");
let buttonText = document.getElementById("button1Text");
theText = document.querySelector('p');
// EVENT LISTENER
// add an event listener and function to trigger to that variable
theButton.addEventListener('click', button1Function);

function button1Function(){
    console.log("clicked!");
    clickCounter++;
  if (clickCounter == 1){
    theText.textContent = text[0];
  }

  if (clickCounter == 3){
  theText.textContent = text[1];
  theText.style.fontSize = "200%";
  }

  if (clickCounter == 6){
  theText.textContent = text[2];
  theText.style.fontSize = "300%";
  }

  if (clickCounter == 6){
  theText.textContent = text[2];
  theText.style.fontSize = "300%";
  }
  if (clickCounter == 8){
  theText.textContent = text[3];
  theText.style.fontSize = "300%";
  }
  if (clickCounter == 10){
  theText.textContent = text[4];
  theText.style.fontSize = "200%";
  theButton.style.backgroundColor = "red";
  }
  if (clickCounter == 15){
  theText.textContent = text[5];
  theText.style.fontSize = "150%";
  }
  if (clickCounter == 21){
  theText.textContent = text[6];
  theText.style.fontSize = "100%";
  }
  if (clickCounter > 24){
  buttonHeight -= 5;
  buttonWidth -= 10;
  theButton.style.width = buttonWidth + "px";
  theButton.style.height = buttonHeight + "px";
  }

  if (clickCounter > 28){
  theButton.style.animation = "pause";
  theButton.style.animation = "shrink 2s infinite";
  }

  if (clickCounter > 10){
  theButton.style.animation = "shake 0.2s infinite";
  }



}
