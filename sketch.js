var gameState=0,
contestantCount,
database,quiz,question,contestant,contestants,answer;

function setup(){
  database=firebase.database();
  canvas = createCanvas(850,400);
  quiz=new Quiz();
  quiz.getState();
  quiz.start();
}


function draw(){
  background("pink");

  if(contestantCount===4){
    quiz.update(1);
  }
  if(gameState===1){
    clear();
    quiz.play();
  }
}
