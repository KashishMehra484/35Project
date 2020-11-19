class Form {
constructor (){
}

display(){
var title = createElement('h2');
title.html('CarRacingGame');
title.position(130,0);
var Input = createInput('Name');
Input.position(130,160);
var Button = createButton('Play')
Button.position(250,200);
Button.mousePressed(function(){
Input.hide();
Button.hide();
var e = Input.value();
playerCount +=1;
player.updateName(e);
player.updateCount(playerCount);
var greeting = createElement('h3');
greeting.html('hello'+e);
greeting.position(130,160);
})
}
}