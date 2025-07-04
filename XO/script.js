let boxes = document.querySelectorAll(".box");
let turn = "X";
let isGameOver = false;
boxes.forEach(e =>{
    e.innerHTML = " "
    e.addEventListener("click", ()=>{
        if(!isGameOver && e.innerHTML === " "){
            e.innerHTML = turn;
            cheakWin();
            cheakDraw();
            changeTurn();
        }
    })
})

function changeTurn(){
    if(turn === "X"){
        turn = "O";
        document.querySelector(".bg").style.left="85"
    }else{
        turn = "X";
        document.querySelector(".bg").style.left="85"
    
    }
}


function cheakWin(){

}
function cheakDraw(){

}
