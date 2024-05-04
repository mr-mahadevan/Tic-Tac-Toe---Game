let box = document.querySelectorAll('.box');
let resetBtn = document.querySelector('#reset-btn');
let newGameBtn = document.querySelector('#new-btn');
let msgContainer = document.querySelector('.msg-container');
let msg = document.querySelector('#msg');

let turn0 = true; //playerX , playerO
const winPatterns = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8],
];

const resetGame = ()=>{
    turn0 = true;
    enableBoxes();
    msgContainer.classList.add("hide");
    box.forEach((box)=>{
        box.classList.remove('X-player', 'O-player');
    })
};

box.forEach((box)=>{
    box.addEventListener('click',()=>{
        console.log("box was clicked");
   
        if(turn0){ //player O
            box.innerText = 'O';
            turn0 = false;
            box.classList.add('O-player');
        }
        else{  //player X
            box.innerText = "X";
            turn0 = true;
            box.classList.add('X-player');
        }

        box.disabled = true;
        checkWinner();
    });
});

const disableboxes = () =>{
    for(let boxvle of box){
        boxvle.disabled = true;
    }
}

const enableBoxes = ()=>{
    for(let boxvle of box){
        boxvle.disabled = false;
        boxvle.innerText = "";
    }
}

const showWinner = (winner)=>{ 
    msg.innerText = `Congratulations, Winner is ${winner}`;
    msgContainer.classList.remove('hide');
    disableboxes();
};

const checkWinner = () => {
    for(let pattern of winPatterns){
        let pos1value = box[pattern[0]].innerText;
        let pos2value = box[pattern[1]].innerText;
        let pos3value = box[pattern[2]].innerText;

        if(pos1value != "" && pos2value != "" && pos3value != ""){
            if(pos1value === pos2value && pos1value === pos3value){
                console.log("winner", pos1value);
                showWinner(pos1value);
                
            }
        }
        
    }
};


newGameBtn.addEventListener('click',resetGame);
resetBtn.addEventListener('click',resetGame);