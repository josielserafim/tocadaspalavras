var x = (85)
var y = (85)
var opcao = 1;
var tela = 0
var img;
var img1;
var img2;
var img3;
var img4;
var img5;
var img6;
var contador=0
var borda=150
var img2
var img3, xIMG3 = 100

var xDaPalavra = 0
var yDaPalavra = 0

var palavras = ['Pedra','Sapato','Jardim','Sol','Café', 'Terra','Rio','Fogo','Peixe','Ferro','Banana','Ferreiro','Cozinheiro','Lapiseira','Azulado','Caixote','Escuridão','Pedregulho','Terreno','Imigrante','Canto','Lixeira']

var posP = 0


var pontos = 0
function preload() {
  img = loadImage('flo.jpg');
   img2 = loadImage('flore2.jpg');
    img3 = loadImage('in.png');
     img4 = loadImage('josiel.jpg');
      img5 = loadImage('duda.jpeg');
       img6 = loadImage('ufrn.png');



}
function setup() {
  createCanvas(400, 400);

}




function draw() {
  
  //background(img);
  //image(img, 1, 1, 399, 399);
  
  
  if(tela==0)
  menu();
  if(tela==1)
    fase1();
  if(tela==2)
    Informações();
  if(tela==3)
    Créditos();
}



function menu(){ 
  
  background(img)
  
  stroke(1500,2000,1500)
  
  //parte do mouse
  
  if(mouseX>=200 && mouseX<=390 && mouseY>=88 && mouseY<=138){
     fill("#FF8000")
     rect(200,88,190,50)
  }else{
     fill("#5FB404")
     rect(200,88,190,50)
  }
  
  if(mouseX>=200 && mouseX<=390 && mouseY>=178 && mouseY<=228){
   
    fill("#FF8000")
    rect(200,178,190,50)
    
  }else{
    
     fill("#5FB404")
    rect(200,178,190,50)
    
  }
  
  if(mouseX>=200 && mouseX<=390 && mouseY>=260 && mouseY<=310){
   
    fill("#FF8000")
    rect(200, 260,  190, 50)
    
  }else{
    
    fill("#5FB404")
     rect(200, 260,  190, 50)
    
  }
  
  textSize(32)
  fill(500,100,100)
  text('TOCA DAS PALAVRAS', 30, 50)
  text('Iniciar', 250,120)
  text('Informações',205,210)
  text('Créditos', 240,295)

}


function fase1(){
 
  background(img2)
   
  //Score dos pontos//
  fill(0,0,600)
  text("Score: "+pontos, 50, 50)
  image(img3,xIMG3,250,200,120)
  textSize(25)
  fill("#FFFFFF")
  text(palavras[posP], xDaPalavra, yDaPalavra, 50, 30)
  
  //colisão
if((xIMG3+100) >= xDaPalavra && (xIMG3+100) <= (xDaPalavra+50) && yDaPalavra >= 250 && yDaPalavra <= 370){
  
    if(posP <= 10){
      
      pontos += 5
      
    }
  
    yDaPalavra = 0
    xDaPalavra = random(0, 400)
    posP = parseInt(random(0,16))
  console.log(posP)
  
}
  //Velocidade da palavra//
  yDaPalavra +=3
  
  if(yDaPalavra > 400){
    
    yDaPalavra = 0
    xDaPalavra = random(0, 400)
    posP = parseInt(random(0,16))
    
  }
 //Movimentação do avatar//
   if (keyIsDown(LEFT_ARROW)) {
    xIMG3 -= 5;
  }

  if (keyIsDown(RIGHT_ARROW)) {
    xIMG3 += 5;
  }
  
}


function Informações(){
  textSize(15)
  fill(50,0,100)
  text(' Este jogo tem como objetivo fazer com que o jogador\n aprenda quais são as palavras primitivas e quais são as\n derivadas. Ele só somará pontos se acertar as palavras\n primitivas. ', 15, 40)
  



}

function Créditos(){
  textSize(15)
  fill(50,0,100)
  text('UFRN - Universidade ederal do Rio Grande\n do Norte',55,120)
  text('Orientador(a):Maria Eduarda ',55,90)
  text('Criado por: Josiel Serafim', 55, 50)
}





//parte do teclado
function keyPressed() {
  if(key==="ArrowUp" && y>120){ 
    y=y-89
    opcao=opcao-1
    console.log(opcao)
  }

if(key==="ArrowDown" && y<200){
  y=y+89
  opcao=opcao+1
    console.log(opcao)
}
 if(key=="Enter"){
   tela=opcao
 } 
  if(key=="Escape"){
   tela=0
 } 
  
}

//verifica onde clicou -> MOUSE
function mousePressed(){
  
  if(tela==0){
    
     if(mouseX>=200 && mouseX<=390 && mouseY>=88 && mouseY<=138){
       tela = 1
       xDaPalavra = random(0, 400)
       
     }
    
  }
  
  if(tela==0){
    
     if(mouseX>=200 && mouseX<=390 && mouseY>=100 && mouseY<=230){
      background(270)
      background(img)
       tela = 2
       
     }
    
  }
 
  if(tela==0){
    
     if(mouseX>=200 && mouseX<=390 && mouseY>=260 && mouseY<=310){
      
       background(270)
       background(img)
       image(img4,250,170,115,100)
       image(img5,50,170,120,100)
       image(img6,150,300,120,120)
       tela = 3
       
       
     }
    
  }
 

  
}