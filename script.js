let cards = [];
let CipheredData, publicKey, privateKey, plaintext, decriptedplaint
let EncrycptionImg, CipheredDataImg, publicKeyImg, privateKeyImg, plaintextImg, decriptedplaintxtImg;
let center1, center2, center3, center4, center5;

function handleDragging(card) {
  if (card.mouse.dragging()) {
      card.moveTowards(
      mouse.x + card.mouse.x,
      mouse.y + card.mouse.y,
      1);
      card.rotationLock = true;
  }
  else {
      card.vel.x = 0;
      card.vel.y = 0;
      card.rotationLock = true;
  }
}

function snapToCenter(card)
{
  // Snap into position
  if (!mouseIsPressed)
  {
      switch (true) 
      {
        case dist(card.x, card.y, center1.x, center1.y) < 60:
            card.position = center1;
          break;
        case dist(card.x, card.y, center2.x, center2.y) < 60:
            card.position = center2;
          break;
        case dist(card.x, card.y, center3.x, center3.y) < 60:
            card.position = center3;
          break;
        case dist(card.x, card.y, center4.x, center4.y) < 60:
            card.position = center4;
          break;
        case dist(card.x, card.y, center5.x, center5.y) < 60:
            card.position = center5;
          break;
        default:
          break;
      }
  }
}

function preload() {
  EncrycptionImg = loadImage('assets/EncrycptionImg.png');
  CipheredDataImg = loadImage('assets/CipheredDataImg.png');
  publicKeyImg = loadImage('assets/publicKeyImg.png');
  privateKeyImg = loadImage('assets/privateKeyImg.png');
  plaintextImg = loadImage('assets/plaintextImg.png');
  decriptedplaintxtImg = loadImage('assets/decriptedplaintxtImg.png');
}

function setup() {
  createCanvas(650, 600);

  center1 = createVector(175, 175);
  center2 = createVector(250, 280);
  center3 = createVector(333, 187);
  center4 = createVector(407, 280);
  center5 = createVector(485, 175);

  cards = new Group();
  cards.collider ='k';

  CipheredData = new cards.Sprite(width / 4, height - (height / 3));
  CipheredData.addImage(CipheredDataImg);
  CipheredData.scale = 0.50;
  cards[0]= CipheredData;

  publicKey = new cards.Sprite((width / 4), height - (height / 3) + 50);
  publicKey.addImage(publicKeyImg);
  publicKey.scale = 0.50;
  cards[1]= publicKey;

  privateKey = new cards.Sprite(width / 2, height - (height / 3) - 50);
  privateKey.addImage(privateKeyImg);
  privateKey.scale = 0.50;
  cards[2]= privateKey;

  plaintext = new cards.Sprite(width/2, height - (height / 3));
  plaintext.addImage(plaintextImg);
  plaintext.scale = 0.50;
  cards[3]= plaintext;

  decriptedplaintxt = new cards.Sprite(width/2, height - (height / 3) + 50);
  decriptedplaintxt.addImage(decriptedplaintxtImg);
  decriptedplaintxt.scale = 0.50;
  cards[4]= decriptedplaintxt;
}

function draw() {
  // Set up the screen 
  clear();
  background("white");
  image(EncrycptionImg, 0, 0);

  for (let card of cards) {
    handleDragging(card);
    snapToCenter(card);
  }
  
  
}