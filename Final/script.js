let casted, fishingTime, fishBite, catching, catchNumber, missedCatch, caught, caughtNumber, fish, fishType, caughtFish,onCompendium;
casted = false;
fishBite = false;
catching = 0;
catchNumber = 10;
missedCatch = false;
caught = false;
caughtNumber = 0;
fish = ["STURGEON", "HALIBUT", "SALMON"];
fishType = 0;
caughtFish = [0,0,0]
fishingTime = Math.floor(Math.random() * 10000) + 5000;
onCompendium = false;

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

function fishOnTheLine() {
fishBite = true;
caught = false;
missedCatch = false;
fishType = Math.floor(Math.random() * 3)
var img = document.getElementById('fish');
img.src = "Media/fishing_bite.png";
var img_x = document.getElementById('catch');
img_x.src = "Media/catch.png";
var instructions = document.getElementById('instructions');
instructions.innerHTML = "rapidly click on fish to reel it in!";
setTimeout(missed, 5000);
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
  catching = 0;
  if (missedCatch == true){
    casted = false;
    alert("FISH GOT AWAY");
    var image_x = document.getElementById('fish');
    image_x.src = "Media/fishing_missed.png";
    $('#catch').attr('src', '');
  }else {
      alert("FISH CAUGHT! YOU GOT A " + fish[fishType]);
      caught = true;
      casted = false;
      caughtNumber++;
      caughtFish[fishType]++;
      var numFish = document.getElementById('numFish');
      numFish.innerHTML = "# of Fish: " + caughtNumber;
      var typeNum = document.getElementById(''+fish[fishType]);
      typeNum.innerHTML = "" + fish[fishType]+ ": " + caughtFish[fishType];
      var image_x = document.getElementById('fish');
      image_x.src = "Media/fishing_catch.png";
      $('#catch').attr('src', '');
  }
  if (fishBite == true){
    var image_x = document.getElementById('fish');
    image_x.src = "Media/fishing_idle.png";
    fishBite = false;
  }
}
