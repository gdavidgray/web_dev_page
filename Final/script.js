let casted, fishingTime, fishBite, catching, catchNumber, missedCatch, caught, caughtNumber, fish, fishType, caughtFish;
casted = false;
fishBite = false;
catching = 0;
catchNumber = 10;
missedCatch = false;
caught = false;
caughtNumber = 0;
fish = ["sturgeon", "halibut", "salmon"];
fishType = 0;
caughtFish = [false,false,false]
fishingTime = Math.floor(Math.random() * 15000) + 5000;

$("#cast").on('click', castedLine);

if (casted != true){
  var image_x = document.getElementById('fish');
  image_x.src = "Media/fishing_idle.png";

}






function castedLine(){
  casted = true;
  console.log("hi");
  var image_x = document.getElementById('fish');
  image_x.src = "Media/fishing.png";
  setTimeout(fishOnTheLine, fishingTime);
  fishingTime = Math.floor(Math.random() * 15000) + 5000;
}

function fishOnTheLine() {
fishBite = true;
caught = false;
missedCatch = false;
fishType = Math.floor(Math.random() * 2)
var img = document.getElementById('fish');
img.src = "Media/fishing_bite.png";
img.id = "fish";
var img_x = document.getElementById('catch');
img_x.src = "Media/"+fish[fishType]+".jpg";
img_x.hieght = "300";
img_x.width = "300";
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
    alert("FISH GOT AWAY");
    var image_x = document.getElementById('fish');
    image_x.src = "Media/fishing_missed.png";
    $('#catch').attr('src', '');
  }else {
      alert("FISH CAUGHT! YOU GOT A " + fish[fishType]);
      caught = true;
      caughtNumber++;
      caughtFish[fishType] = true;
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
