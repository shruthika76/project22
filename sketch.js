var starImg,bgImg;
var star, starBody;
//create variable for fairy sprite and fairyImg

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	starImg = loadImage("images/star.png");
	bgImg = loadImage("images/starNight.png");
	//load animation for fairy here
	fairyImage = loadAnimation("images/fairyImage1.png","images/fairyImage2.png");
	fairyVoice=loadSound("sound/JoyMusic.mp3");
}

function setup() {
	createCanvas(800, 750);

	//write code to play fairyVoice sound
    fairyVoice.play()
	//create fairy sprite and add animation for fairy
    fairy= createSprite(130,520);
	fairy.addAnimation("fairy",fairyImage);
	fairy.scale= 0.5;

	star = createSprite(650,30);
	star.addImage(starImg);
	star.scale = 0.2;
    star.velocityY=10;

	engine = Engine.create();
	world = engine.world;

	starBody = Bodies.circle(650 , 30 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, starBody);
	
	Engine.run(engine);

}


function draw() {
  background(bgImg);

  star.x= starBody.position.x 
  star.y= starBody.position.y 

  console.log(star.y);
keyPressed()
  //write code to stop star in the hand of fairy
  if (star.y>470){
	  star.y=470
	  fairy.y=500
	  fairy.x=star.x-140
  }
  drawSprites();

}

function keyPressed() {

	if(keyDown(LEFT_ARROW)){
		fairy.x= fairy.x-5
	}
else if (keyDown (RIGHT_ARROW)){
	fairy.x= fairy.x+5
}

	//writw code to move fairy left and right
	
}
