class Quiz{
    constructor(){

    }
    getState(){
        var gameStateRef=database.ref('gameState');
        gameStateRef.on("value",function(data){gameState=data.val();})
    }
    update(state){
        database.ref('/').update({
            gameState:state
        });
    }
    async start(){
    if(gameState === 0){
        contestant = new Contestant();
        var contestantCountRef = await database.ref('contestantCount').once("value");
        if(contestantCountRef.exists()){
            contestantCount=contestantCountRef.val();
            contestant.getCount();
         }
        
         question=new Question();
         question.display();
        
    }
}
play(){
    question.hide();
    background("yellow");
    textSize(35);
    fill(0);
    text("Quiz Result",350,50);
    fill("blue");
    text("----------------------------",320, 65);
    Contestant.getContestantInfo();
    if(contestants!==undefined){
        var display_position=230;
        textSize(20);
        text("NOTE: Contestant who answered correct are highlighted in green",20,180);

        for(var plr in contestants){
            var correctAns = "2";
            if(correctAns=== contestants[plr].answer){
                fill("green");
            }
            else{
                fill("red");
            }
        display_position+=30;
        textSize(15);
     text(contestants[plr].name+":"+contestants[plr].answer,250,display_position);
        
    }
}
}
}
