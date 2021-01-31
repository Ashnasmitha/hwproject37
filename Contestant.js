class Contestant{
    constructor(){
        this.index=null;
        this.name=null;
    }
    getCount(){
        var contestantCountRef=database.ref('contestCount');
        contestantCountRef.on("value",function(data){contestantCount=data.val();})
    }
    updateCount(count){
        database.ref('/').update({
            contestantCount:count
        });
    }
    update(){
        var contestantIndex="contestants/contestant"+this.index;
        database.ref(contestantIndex).set({name:this.name});
        
    }
    static getContestantInfo(){
        var contestantInfoRef=database.ref('contestants');
        contestantInfoRef.on("value",(data)=>{contestants=data.val();});
        
    }
}