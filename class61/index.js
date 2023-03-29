try{
    document.write('Hello World 1'+'<br>');
    document.write(x);
    document.write('Hello World 3'+'<br>');
}catch(err){
    document.write(err+'<br>');
}finally{
    document.write('Print Finally');
}