function setup() {
  createCanvas(larguraTela, alturaTela);
  
  somTrilha.setVolume(0.2);
//somTrilha.play();
//somTrilha.loop();
}

function draw(){
  if(frameCount > 400){ // +/- 8s
    if(meuPlacar <=5 && placarOponente <=5)
    jogar();
    else
      verificaVencedor();
  }else{
    telaInicial();
  }
}

function verificaVencedor(){
  if(meuPlacar >= 5)
    vacaVencedora(); // Tela Final
  else
    galinhaVencedora(); // Tela Final
}

function telaInicial(){
  background("deepSkyBlue");
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(30);
  fill("black");
  text("Jogo da Av. 1º de Maio", 300, 190);
  text("Desenvolvido por Yashirin", 300, 230);
}

function vacaVencedora(){
  background("green");
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(30);
  fill("blue");
  text("Vaca Venceu", 300, 190);
  image(imgVaca, 300, 200, 200, 200);
}

function galinhaVencedora(){
  background("orange");
  textStyle(BOLD);
  textAlign(CENTER);
  textSize(30);
  fill("pink");
  text("Galinha Venceu", 300, 190);
  image(imgGalinha, 300, 200, 200, 200);
}

function jogar() {
  background(imgEstrada); 
  mostraVaca();
  mostraGalinha();
  movimentaVaca();
  movimentaGalinha();
  mostraCarros();
  movimentaCarros();
  mostraPlacar();
  pontuacao();
  atropelamento();
}










