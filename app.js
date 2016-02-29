var names = [
    "Scott",
    "Mark",
    "Ryan",
    "Kris",
    "Casie",
    "Taaaylor"
];

var last = [
    "Bromander",
    "Hurlburt",
    "Mulcahy",
    "Szafranski",
    "Siekman",
    "Sandquist"
];

$(document).ready(function(){
  $(".create").on("click", createPerson);
  $(".container").on("click", ".show", showDiv);
});

function createPerson(){
  var random = randomNumber(0,(names.length - 1));
  var name = names[random];
  random = randomNumber(0,(last.length - 1));
  name += " " + last[random];
  appendDom(name);
}

function showDiv(){
  $(this).parent().slideUp().delay(500).slideDown();
}

function appendDom(name){
    $(".container").append("<div class='person'></div>");
    var $el = $(".container").children().last();

    $el.append("<p>" + name + "</p>");
    $el.append("<button class='show'>Show</button>");
    $el.toggle().fadeToggle();
}

function randomNumber(min, max){
  return Math.floor(Math.random() * (1 + max - min) + min);
}
