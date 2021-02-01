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
    text("Quiz Result",250,50);

    Contestant.getContestantInfo();
    if(contestants!==undefined){
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
        display_position+=230;
        textSize(15);
        for(i=200;i>=displayWidth;i=i+20){
        text(contestants[plr].name+":"+contestants[plr].answer,50,i);
        }
    }
}
}
}