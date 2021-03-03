var f;
var form;
var player1,player2,player3,player4,player5,player6,player7,players;
var box,box2,box3,box4,box5,box6,box7,box8,box9
function setup() {
  createCanvas(900,900);
 // background(grey);
  f = new game();
  form = new Form();

}

function draw() {
  background(rgb(0,125,125));  
  text(mouseX+ " , " + mouseY, mouseX, mouseY);
  

  
  box =createSprite(0,35,120,15);
  
  
  box2 =createSprite(100,0,15,140);
  
  
  box3 =createSprite(100,70,120,15);
  
  
  box4 =createSprite(7,120,15,120);
  
  
  box5 =createSprite(118,110,152,15);
  
  
  box6 =createSprite(197,70,15,95);
  
  
  box7 =createSprite(160,30,60,15);
  
  
  box8 =createSprite(240,70,15,95);
  
  
  box9 =createSprite(300,30,110,15);
  
  
  box10 =createSprite(390,30,15,160);
  
  
  box11 =createSprite(332,65,105,15);
  
  
  box12 =createSprite(110,150,190,15);
  

  box13 =createSprite(129,129,15,26);
  
  
  box14 =createSprite(330,125,15,65);
  
  
  box15 =createSprite(285,110,76,15);
  
  
  box16 =createSprite(240,180,15,75);
  
  
  box17 =createSprite(280,180,15,75);
  
  
  box18 =createSprite(260,150,27,15);
  

  box19 =createSprite(180,185,105,15);
  
  
  box20 =createSprite(380,140,40,15);
  
  
  box21 =createSprite(330,190,95,15);
  
  
  box22 =createSprite(330,170,15,27);
  
  
  box23 =createSprite(385,205,15,75);
  
  
  box24 =createSprite(121,205,15,55);
  

  box25 =createSprite(85,225,15,90);
  
  
  box26 =createSprite(25,190,55,15);
  
  
  box27 =createSprite(187,225,121,15);
  
  
  box28 =createSprite(170,262,156,15);
  
  
  box29 =createSprite(205,243,15,23);
  
  
  box30 =createSprite(53,225,50,15);
  
  
  box31 =createSprite(45,300,15,90);

  
  box32 =createSprite(31,300,15,15);
  
  
  box33 =createSprite(280,240,15,60);
  
  
  box34 =createSprite(195,300,285,15);
  
  
  box35 =createSprite(330,260,15,70);
  
  
  box36 =createSprite(357,270,40,15);
  
  
  box38 =createSprite(380,310,35,15);
  
  
  box39 =createSprite(370,330,15,30);
  
  
  box40 =createSprite(83,337,62,15);
  

  box41 =createSprite(106,360,15,40);
  
  
  box42 =createSprite(50,372,100,15);
  
  
  box43 =createSprite(262,337,201,15);
  
  
  box44 =createSprite(248,371,270,15);
  

 drawSprites();
}