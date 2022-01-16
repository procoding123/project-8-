var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var playerMallet;

var goal1=createSprite(200,18,100,20);
goal1.shapeColor=("yellow");

var goal2=createSprite(200,382,100,20);
goal2.shapeColor=("yellow");

//score
var compscore = 0;
var playerscore = 0;
 
var gameState ="start";


// making court
var boundary1 = createSprite(200,0,400,10);
boundary1.shapeColor = "white";
var boundary2 = createSprite(200,400,400,10);
boundary2.shapeColor = "white";
var boundary3 = createSprite(0,200,10,400);
boundary3.shapeColor = "white";
var boundary4 = createSprite(400,200,10,400);
boundary4.shapeColor = "white";



// creating objects and giving them colours
var striker = createSprite(200,200,20,20);
striker.shapeColor = "white";

var playerMallet = createSprite(200,50,50,10);
playerMallet.shapeColor = "black";

var computerMallet = createSprite(200,350,50,10);
computerMallet.shapeColor = "black";

function draw() {
  //clear the screen
  
  background("green");
  computerMallet.x = striker.x;
  
  
 
  
  //make the player paddle move with the Arrow keys
  //draw line at the centre
  for (var i = 0; i < 400; i=i+20) {
    line(i,200,i+10,200);
  }
  
  if (keyDown("space")) {
      striker.velocityX = 5;
      striker.velocityY = 5;
      
      
  }
  
  if(gameState === "start"){
    
    textSize(25);
    fill("black");
    textAlign(CENTER);
    text("PRESS KEY TO STRIKE!",200,180);
    if(keyDown("space")){
      gameState ="play";
    }
    
    
  
  }
  

  if(gameState === "play"){
    paddleMovement();
    if (playerscore == 5 || compscore == 5){
    gameState = "end";
    
    
  }
  }
  
  if(gameState === "end"){
    textSize(25);
    fill("maroon");
    text("Game Over", 170, 160);
    striker.velocityX = 0;
    striker.velocityY = 0;
  }
  
  createEdgeSprites();
  if (striker.isTouching(goal1)){
    striker.bounceOff(goal1);
    compscore = compscore+1;
    striker.x = 200;
    striker.y = 200;
    striker.velocityY = 0;
    striker.velocityX = 0;
  }
  if (striker.isTouching(goal2)){
    striker.bounceOff(goal1);
    playerscore = playerscore+1;
    striker.x = 200;
    striker.y = 200;
    striker.velocityY = 0;
    striker.velocityX = 0;
  }
  
  
  
  
  
  striker.bounceOff(edges);
  striker.bounceOff(playerMallet);
  striker.bounceOff(computerMallet);
  playerMallet.bounceOff(edges);
  computerMallet.bounceOff(edges);
  

 
  textSize(25);
  fill("maroon");
  text(compscore,25,225);
  text(playerscore,25,185);
  
  
  drawSprites();
}






  
function paddleMovement()
{
  if(keyDown("left")){
    playerMallet.x = playerMallet.x-10;
    
  }
  
  if(keyDown("right")){
    playerMallet.x = playerMallet.x+10;
    
  }
  
}
  
// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
