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
    this.title.hide();
    this.input2.hide();
    this.input.hide();
    this.button.hide();
    textSize(30);
    text("Quiz Result",350,50);
    contestant.getContestantInfo();
    if(contestants!==undefined){
        for(var plr in contestants){
            var correctAns "2";
            if(correctAns=== contestants[plr].answer){
                fill("green");
            }
            else{
                fill("red");
            }
        display_position+=20;
        textSize(15);
        text(contestants[plr].name+":"+contestants[plr].answer,50,display_position);
    }
}
}
}