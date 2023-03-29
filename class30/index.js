var playerInfo = [
    ['Shakib',40],
    ['Rakib',20],
    ['Shafiq',70],
    ['Imrul',90],
    ['Sabbir',100]
];

function checking(playerInfo){
    var nameHsr = playerInfo[0][0];
    var hs = playerInfo[0][1];
    for(var x=0; x<playerInfo.length; x++){
        var nameHsr = playerInfo[x][0];
        var hs = playerInfo[x][1];
    }
    document.write(nameHsr);
}

checking(playerInfo);




