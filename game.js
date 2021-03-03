class game{
constructor(){
  //  player1 = createSprite(20,20,20,20);
    //  player1.addImage();
  
    //  player2 = createSprite(20,20,20,20);
     // player2.addImage();
  
  //    player3 = createSprite(20,20,20,20);
   //   player.addImage();
  
  //    player4 = createSprite(20,20,20,20);
       //  player1.addImage();
  
   //   player5 = createSprite(20,20,20,20);
      //  player1.addImage();
  
   //   player6 = createSprite(20,20,20,20);
      //  player1.addImage();
   
    //  player7 = createSprite(20,20,20,20);
   //  player1.addImage();
   players= [player1,player2,player3,player4,player5,player6,player7]
  



}
play(){

for (var index = 0; index < 7; index++){
if (keyDown("up")){

   player[index].velocityY = -1;
}

if (keyDown("down")){

   player[index].velocityY = +1;
}

if (keyDown("left")){

   player[index].velocityX = -1;
}

if (keyDown("right")){

   player[index].velocityX = +1;
}

}
}
}