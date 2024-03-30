let boxes=document.querySelectorAll(".box");
let resetbtn=document.querySelector("#reset");
let newGameBtn = document.querySelector("#new-game");
let msgContainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnX=true;
let count=0;
const winPatterns=[
    [0,1,2],[0,3,6],[0,4,8],[1,4,7],[2,5,8],[2,4,6],[3,4,5],[6,7,8]
];
const resetGame=()=>{
    turnX=true;
    count=0;
    enableboxes();
    msgContainer.classList.add("hide");
}
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("Box was clicked");
        if(turnX){
            box.innerText='X';
            turnX=false;
        }
        else{
            box.innerText='O';
            turnX=true;
        }
        box.disabled=true;
        count++;
        let isWinner = Checkwinner();

        if (count === 9 && !isWinner) {
            gameDraw();
        }
        
    })
});

const gameDraw = () => {
    msg.innerText = `Game was a Draw.`;
    msgContainer.classList.remove("hide");
    disableboxes();
  };
const disableboxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
}

const enableboxes=()=>{
    for (let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}
const showWinner=(winner)=>{
        msg.innerText=`Congratulations, Winner is ${winner}`;
        msgContainer.classList.remove("hide");
        disableboxes();
}

const Checkwinner=()=>{
    for(let pattern of winPatterns){
        let pos1Val = boxes[pattern[0]].innerText;
        let pos2Val = boxes[pattern[1]].innerText;
        let pos3Val = boxes[pattern[2]].innerText;

        if(pos1Val !="" && pos2Val !="" && pos3Val!="")
        {
            if(pos1Val==pos2Val && pos2Val==pos3Val){
                console.log("Winner");
                showWinner(pos1Val);
            }
        }
    }

}
newGameBtn.addEventListener("click", resetGame);
resetbtn.addEventListener("click", resetGame);