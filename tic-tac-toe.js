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
    // Create a reset button
    var resetButton = document.createElement('button');
    resetButton.textContent = 'Reset Game';
    resetButton.addEventListener('click', resetFunction);
    document.body.appendChild(resetButton);
}

 function swapFunction(event){
    index=Array.from(squares.children).indexOf(event.target);
    if (currentPlayer==0){
        squares.children[index].setAttribute("class",squares.children[index].getAttribute("class") + " X");
        squares.children[index].innerHTML="X";
        currentPlayer=1;
        xmoves += String(index+1);
    }
    else{
        squares.children[index].setAttribute("class",squares.children[index].getAttribute("class") + " O");
        squares.children[index].innerHTML="O";
        currentPlayer=0;
        omoves += String(index+1);
    }

    count = 0;

    prevPlayer = [(currentPlayer == 0) ? omoves : xmoves, (currentPlayer == 0) ? "O" : "X"];

    for(let space of winConditions){
        for(let pos of space){
            if(prevPlayer[0].includes(pos)){
                count ++;
            }
        }
        if(count == 3){
            stat=document.getElementById("status");
            stat.innerHTML="Congratulations! "+prevPlayer[1]+" is the Winner!";
            stat.setAttribute("class",stat.getAttribute("class")+" you-won")
        }
        count = 0;
    }
}

function hoverFunction(event){
    index=Array.from(squares.children).indexOf(event.target);
    if(event.type == "mouseover"){
        squares.children[index].setAttribute("class", squares.children[index].getAttribute("class") + " hover");
    }else if(event.type == "mouseout"){
        squares.children[index].classList.remove("hover");
    }
}

var xmoves="";
var omoves="";

var currentPlayer= 0;
       
winConditions=["123","456","789","147","258","369","357","159"]


function resetFunction(){
    // Clear the moves arrays
    xmoves = "";
    omoves = "";

    // Reset the currentPlayer to X
    currentPlayer = 0;

    // Clear the board
    for (squarecount = 0; squarecount < squareAmount; squarecount++) {
        squares.children[squarecount].setAttribute("class", "square");
        squares.children[squarecount].innerHTML = "";
    }

    // Reset the status message
    stat = document.getElementById("status");
    stat.innerHTML = "Move your mouse over a square and click to play an X or an O.";
    stat.classList.remove("you-won");
}
