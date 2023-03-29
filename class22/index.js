//use of break and continue
for(var x = 0; x <= 15; x++){
    if(x == 10){
        break;
    }
    document.write(x+"<br>");
}

for(var x = 0; x <= 15; x++){
    if(x == 10){
        continue;
    }
    // 10 can't print because x==10 condition is ture 
    document.write(x+"<br>");
}