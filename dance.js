function setup(){
  createCanvas(windowWidth,windowHeight);
  t1=0; t2=0; n=1; hf=0; score=0; t3=0;
}

function draw(){
  background(255,255,255);
	if (n==0){
			fill(255,0,0);
			ellipse(600,150,200,200);
  }
  if (n==1){
      fill(0,0,255);
      ellipse(600,500,200,200);
  }
  if (n==2){
      fill(0,204,0);
      ellipse(300,350,200,200);
  }
  if (n==3){
      fill(255,165,0);
      ellipse(900,350,200,200);
  }
  if (hf==0){
    textSize(60);
    text('højre fod',450,350);
  }
  if (hf==1){
    textSize(60);
    text('venstre fod',450,350);
  }
  if (hf==2){
    textSize(60);
    text('højre hånd',450,350);
  }
  if (hf==3){
    textSize(60);
    text('venstre hånd',450,350);
  }
  fill(0);
  text("score="+score,100,100);

  timeInterval();
if(t1>0){
  t3=int((31000-(t2-t1))/1000);

  text("time="+t3,900,100);
}
}

function keyPressed(){
  if (keyCode == UP_ARROW && n==0){
    score+=1;
    n = randomNumber();
  }
  if (keyCode == DOWN_ARROW && n==1){
    score+=1;
    n = randomNumber();
  }
  if (keyCode == LEFT_ARROW && n==2){
    score+=1;
    n = randomNumber();
  }
  if (keyCode == RIGHT_ARROW && n==3){
    score+=1;
    n = randomNumber();
  }
  if (hf<4){
    hf = randomNumber1();
  }
  if(keyCode == 32){
  t1=millis();
  score=0;
}
}

function randomNumber(){
  return int(random(4));
}

function randomNumber1(){
  return int(random(4));
}

function timeInterval(){
  t2=millis();
  if(t2-t1>31000){
    background(255,255,255);
    fill(255,0,0);
    text("Time's up!",470,200);
    fill(0,255,0);
    text("score="+score,500,300);
    fill(255,255,255);
    text("time="+t3,900,100);
}
}
