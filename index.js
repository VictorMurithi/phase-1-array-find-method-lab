function superbowlWin(record){
    const wins = record.find(play=>play.result === "W");
    if (wins){
        console.log("year",wins.year)
        return wins.year; 
    }else{
        return undefined;
    }
};