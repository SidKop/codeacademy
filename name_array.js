/*jshint multistr:true */

// update
var text = 'gheiw ghjewigweh giwehgihgiwe ghw hvwho Chris newgowngkw fnewi chris jowepjf Chrit cniwo chrit'
var myName = 'Chris'
var hits=[]

for (i = 0; i < text.length; i++){
    if (text[i] === myName[0]){
       for (a = i; a < (myName.length + i); a++){
            if (text[a] === myName[a-i]){
                hits.push(text[a]);
            }
       }
    }
}


if (hits.length == 0){
    console.log ("Your name wasn't found!");
}
else{
    console.log(hits);
}
