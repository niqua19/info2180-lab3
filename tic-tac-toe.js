window.onload=function(){
    squares=document.getElementById("board");
    squareAmount=squares.childElementCount;
    // console.log
    for(squarecount=0; squarecount<=squareAmount-1; squarecount++){
        squares.children[squarecount].setAttribute("class","square");
        squares.children[squarecount].addEventListener('click', swapFunction);
        squares.children[squarecount].addEventListener('mouseover', hoverFunction);
        squares.children[squarecount].addEventListener('mouseout', hoverFunction);

    }
}

 function swapFunction(event){
    index=Array.from(squares.children).indexOf(event.target);
    if (currentPlayer==0){
        squares.children[index].setAttribute("class","X square");
        squares.children[index].innerHTML="X";
        currentPlayer=1;
    }
    else{
        squares.children[index].setAttribute("class","O square");
        squares.children[index].innerHTML="O";
        currentPlayer=0;
    }
    console.log(index);
}

function hoverFunction(event){
    index=Array.from(squares.children).indexOf(event.target);
    if(event.type == "mouseover"){
        squares.children[index].setAttribute("class", squares.children[index].getAttribute("class") + " hover");
    }else if(event.type == "mouseout"){
        squares.children[index].classList.remove("hover");
    }
}

var xmoves=[];
var ymoves=[];

var currentPlayer= 0;
       


