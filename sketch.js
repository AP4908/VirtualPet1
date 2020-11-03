var dog, happyDog, database, foodS, foodStock, dogNorm

function preload()
{
  dogNorm = loadImage("images/dogImg.png");
  happyDog = loadImage("images/dogImg1.png");
}

function setup() {
  createCanvas(500, 500);
  database = firebase.database();



  dog = createSprite(250, 250, 10, 10);
 dog.addImage(dogNorm);
 dog.scale=0.2
  
  

  foodStock = database.ref('food');
  foodStock.on("value", readStock);
  
  
}


function draw() { 

  background(46, 139, 87);


  if (keyWentDown(UP_ARROW)){

    writeStock(foodS);
    dog.addImage(happyDog);


  }
  

  drawSprites();
  textSize(20);
  fill(255, 255, 255);
  stroke(0, 0, 0);
  text("Press the Up arrow to Feed the Dog", 120, 100);
  text("Food Count: "+foodS, 140, 60);
  

}

function readStock(data){
foodS = data.val();
}

function writeStock(x){
   if(x<=0)
   {
     x=20
   }
   else
   {
    x = x-1;
   }
  
 database.ref('/').update({
  food:x
})
  
}



