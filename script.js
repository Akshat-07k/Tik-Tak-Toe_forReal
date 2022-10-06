
// Array.from(boxes).forEach((element =>{
//     let text  = document.querySelector('.boxText');
//     text.addEventListener('click',(e)=>{
//         if(e.innerText === '')
//         return turn;
//         changeTurn();
//         checkWin(); 
//     }) 
// }))
let turn ='X';

 function changeTurn(){
    if(turn==='X'){
        turn = 'O';
    }

    else
    {
        turn = 'X';
    }
}

document.addEventListener('DOMContentLoaded',() =>{
    console.log(" Welcome to game ");

// Gain Logic
// let boxes = document.querySelectorAll('.box');

    document.querySelector('.box1').onclick = () =>{
        document.querySelector('.boxText1').innerHTML = turn;
        changeTurn();
    }
    document.querySelector('.box2').onclick = () =>{
        document.querySelector('.boxText2').innerHTML = turn;
        changeTurn();
    }
    document.querySelector('.box3').onclick = () =>{
        document.querySelector('.boxText3').innerHTML = turn;
        changeTurn();
    }
    document.querySelector('.box4').onclick = () =>{
        document.querySelector('.boxText4').innerHTML = turn;
        changeTurn();
    }
    document.querySelector('.box5').onclick = () =>{
        document.querySelector('.boxText5').innerHTML = turn;
        changeTurn();
    }
    document.querySelector('.box6').onclick = () =>{
        document.querySelector('.boxText6').innerHTML = turn;
        changeTurn();
    }
    document.querySelector('.box7').onclick = () =>{
        document.querySelector('.boxText7').innerHTML = turn;
        changeTurn();
    }
    document.querySelector('.box8').onclick = () =>{
        document.querySelector('.boxText8').innerHTML = turn;
        changeTurn();
    }
    document.querySelector('.box9').onclick = () =>{
        document.querySelector('.boxText9').innerHTML = turn;
        changeTurn();
    }

    document.querySelector('.reset').onclick = () =>{
        document.querySelector('.boxText1').innerHTML = '';
        document.querySelector('.boxText2').innerHTML = '';
        document.querySelector('.boxText3').innerHTML = '';
        document.querySelector('.boxText4').innerHTML = '';
        document.querySelector('.boxText5').innerHTML = '';
        document.querySelector('.boxText6').innerHTML = '';
        document.querySelector('.boxText7').innerHTML = '';
        document.querySelector('.boxText8').innerHTML = '';
        document.querySelector('.boxText9').innerHTML = '';
    }
});