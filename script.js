let CipheredData, publicKey, privateKey, plaintext, decriptedplaint
let EncrycptionImg, CipheredDataImg, publicKeyImg, privateKeyImg, plaintextImg, decriptedplaintxtImg;
let center1, center2, center3, center4, center5;

function preload(){
  EncrycptionImg = loadImage('assets/EncrycptionImg.png');
  CipheredDataImg = loadImage('assets/CipheredDataImg.png');
  /* publicKey = loadImage('assets/publicKey.png');
  privateKey = loadImage('assets/privateKey.png');
  plaintext = loadImage('assets/plaintext.png');
  decriptedplaintxt = loadImage('assets/decriptedplaintxt.png'); */
}

function setup() {
  createCanvas(650, 600);

  center1 = createVector(175, 175);
  center2 = createVector(250, 280);
  center3 = createVector(333,187);
  center4 = createVector(407, 280);
  center5 = createVector(485, 175);

  CipheredData = createSprite(width/2,height/2);
  CipheredData.addImage(CipheredDataImg);
  CipheredData.scale = 0.50;
}

function draw() {
  // Set up the screen 
  clear();
  background("white");
  image(EncrycptionImg, 0, 0);

  if (CipheredData.mouse.dragging()){
    CipheredData.moveTowards(
      mouse.x + CipheredData.mouse.x, 
      mouse.y + CipheredData.mouse.y, 
      1);
  }
  else{
    CipheredData.vel.x = 0;
    CipheredData.vel.y = 0;
  }

  // Snap into position
  if(dist(CipheredData.x, CipheredData.y, center1.x, center1.y) < 60 && !mouseIsPressed){
    CipheredData.position = center1;
  }
  else if(dist(CipheredData.x, CipheredData.y, center2.x, center2.y) < 60 && !mouseIsPressed){
      CipheredData.position = center2;
    }
  else if(dist(CipheredData.x, CipheredData.y, center3.x, center3.y) < 60 && !mouseIsPressed){
    CipheredData.position = center3;
  }
  else if(dist(CipheredData.x, CipheredData.y, center4.x, center4.y) < 60 && !mouseIsPressed){
    CipheredData.position = center4;
  }
  else if(dist(CipheredData.x, CipheredData.y, center5.x, center5.y) < 60 && !mouseIsPressed){
    CipheredData.position = center5;
  }
  
}