let CipheredData, publicKey, privateKey, plaintext, decriptedplaint
let EncrycptionImg, CipheredDataImg, publicKeyImg, privateKeyImg, plaintextImg, decriptedplaintxtImg;
let center1;

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

  CipheredData = createSprite(width/2, height/2);
  CipheredData.addImage(CipheredDataImg);
  CipheredData.scale = 0.60;
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
  }

  // Snap into position
  if(dist(CipheredData.x, CipheredData.y, center1.x, center1.y) < 60 && !mouseIsPressed){
    CipheredData.position = center1;
  }
}