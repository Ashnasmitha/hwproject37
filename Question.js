class Form{
    constructor(){
         this.input=createInput("Enter Name");
         this.input2=createInput("Enter Option Number")
         this.button=createButton("Submit");
         this.title=createElement('h3');
         this.question=createElement('h1');
         this.option1=createElement('h1');
         this.option2=createElement('h1');
         this.option3=createElement('h1');
         this.option4=createElement('h1');

    }
    hide(){
        this.title.hide();
        this.input.hide();
        this.input2.hide();
        this.button.hide();
    }
    display(){
        
        this.title.html("My Quiz Game");
        this.title.position(425,0);
        this.question.html("Question : What starts and ends with the letter 'E',but has only one letter");
        this.question.position(150,80);
        this.option1.html("1: Everyone");
        this.option1.position(150,100);
        this.option2.html("2: Envelope");
        this.option2.position(150,120);
        this.option3.html("3: Emergence");
        this.option3.position(150,130);
        this.option4.html("4: Example");
        this.option4.position(150,140);
        this.input.position(150,230);
        this.input2.position(250,230);
        this.button.position(200,280);

        this.button.mousePressed(()=>{
            this.title.hide();
            this.input2.hide();
            this.input.hide();
            this.button.hide();
            contestant.name=this.input.value();
            contestantCount+=1;
            contestant.index=contestantCount;
            contestant.update();
            contestant.updateCount(contestantCount);
        })
    }
}