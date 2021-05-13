let casted, fishingTime, fishBite, catching, catchNumber, missedCatch, caught, caughtNumber, fish, fishType, caughtFish, onCompendium, realing_audio,
catch_audio, lost_audio, water_audio;
casted = false;
fishBite = false;
catching = 0;
catchNumber = 10;
missedCatch = false;
caught = false;
caughtNumber = 0;
fish = ["BLUEGILL", "HUMPBACK CHUB", "YELLOW PERCH"];
fishType = 0;
caughtFish = [0,0,0];
fishingTime = Math.floor(Math.random() * 10000) + 5000;
onCompendium = false;
realing_audio = document.getElementById('fish_realing');
catch_audio = document.getElementById('fish_collected');
lost_audio = document.getElementById('fish_released');
water_audio = document.getElementById('water_sound');

water_audio.play();
water_audio.volume = 0.05;


$("#cast").on('click', castedLine);


if (casted != true){
  var image_x = document.getElementById('fish');
  image_x.src = "Media/fishing_idle.png";

}

function castedLine(){
  if (casted == false){
  casted = true;
  console.log("hi");
  var image_x = document.getElementById('fish');
  image_x.src = "Media/fishing.png";
  setTimeout(fishOnTheLine, fishingTime);
  fishingTime = Math.floor(Math.random() * 10000) + 5000;
 }
}

function fishOnTheLine() { //change to image of fisherman reeling in a fish.
realing_audio.play();
fishBite = true;
caught = false;
missedCatch = false;
fishType = Math.floor(Math.random() * 3)
var img = document.getElementById('fish');
img.src = "Media/fishing_bite.png";
var clicker = document.getElementById('catch');
clicker.src = "Media/catch.png";
var instructions = document.getElementById('instructions');
instructions.innerHTML = "Rapidly click on fish to reel it in!";
pulse();
setTimeout(missed, 5000);
}

function pulse(){

  var instructions = document.getElementById('instructions');
  instructions.style.animation = "pulse 1s infinite"; //Start pulsing animation
  if (instructions.style.animationPlayState == "paused"){
    instructions.style.animationPlayState = "running";
  }
}

function missed(){
  if (caught == false){
  missedCatch = true;
  fishCaught();
  }
}
$("#catch").on('click', catchingFish);

function catchingFish(){
  if (fishBite == true){
  casted = false;
  catching++;
  if(catching == catchNumber){
    fishCaught();
  }
 }
}

function fishCaught(){
  realing_audio.pause();
  realing_audio.currentTime = 0;
  catching = 0;
  if (missedCatch == true){
    lost_audio.play();
    casted = false;
    alert("FISH GOT AWAY");
    var fishing = document.getElementById('fish');
    fishing.src = "Media/fishing_missed.png";
    var instructions = document.getElementById('instructions');
    instructions.innerHTML = "Click CAST LINE and wait for a bite!";
    instructions.style.animationPlayState = "paused";
    $('#catch').attr('src', '');
  }else {
      catch_audio.play();
      alert("FISH CAUGHT! YOU GOT A " + fish[fishType]);
      caught = true;
      casted = false;
      caughtNumber++;
      caughtFish[fishType]++;
      var numFish = document.getElementById('numFish');
      numFish.innerHTML = "# of Fish: " + caughtNumber;
      var typeNum = document.getElementById(''+fish[fishType]);
      typeNum.innerHTML = "" + fish[fishType]+ ": " + caughtFish[fishType];
      var fishing = document.getElementById('fish');
      fishing.src = "Media/fishing_catch.png";
      var instructions = document.getElementById('instructions');
      instructions.innerHTML = "Click CAST LINE and wait for a bite!";
      instructions.style.animationPlayState = "paused";
      $('#catch').attr('src', '');
  }
  if (fishBite == true){
    var image_x = document.getElementById('fish');
    image_x.src = "Media/fishing_idle.png";
    fishBite = false;
  }
}
