
let talkingSound, birdSound, saxSound, saxClicked, birdClicked, talkClicked;
 saxClicked = false;
 birdClicked = false;
 talkClicked = false;

 saxSound = new Audio("media/sax.wav");
 birdSound = new Audio("media/birds.wav");
 talkingSound = new Audio("media/chatter.wav");
$("#wasq").on('click', wasq);

function wasq(){
  $('body').css('background-image', 'url("media/wasq.jpg")');
}

$("#unionsq").on('click', unionsq);

function unionsq(){
  $('body').css('background-image', 'url("media/unionsq.jpg")');
}

$("#central").on('click', central);

function central(){
  $('body').css('background-image', 'url("media/central park.jpg")');
}

$("#saxaphone").on('click', sax);

function sax(){
  saxClicked = !saxClicked;
  if (saxClicked == true) {
    saxSound.play();
  }
  else {
    saxSound.pause();
  }
}

$("#talk").on('click', talking);

function talking(){
  talkClicked = !talkClicked;
  if (talkClicked == true) {
    talkingSound.play();
  }
  else {
    talkingSound.pause();
  }
}

$("#birds").on('click', birds);

function birds(){
  birdClicked = !birdClicked;
  if (birdClicked == true) {
    birdSound.play();
  }
  else {
    birdSound.pause();
  }
}
