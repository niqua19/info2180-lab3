window.onload=function(){
    squares=document.getElementById("board");
    squareAmount=squares.childElementCount;
    // console.log
    for(squarecount=0; squarecount<=squareAmount-1; squarecount++){
        squares.children[squarecount].setAttribute("class","square");
    }
}
