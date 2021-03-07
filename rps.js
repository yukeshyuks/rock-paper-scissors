let userScore=0;
let computerScore=0;
const userScore_span= document.getElementById("user_score");
const computerScore_span=document.getElementById("computer_score");
const scoreBoard_div = document.querySelector(".scoreboard>p");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function getComputerchoice(){
    const choices=['r','p','s'];
    return choices[Math.floor(Math.random()*3)];
}

function convert(letter){
    if (letter == "r") return "Rock";
    if (letter == "p") return "Paper";
    return "Scissors";
}

function win(userchoice,computerChoice){
    userScore++;
    userScore_span.innerHTML=userScore;
    const smalluser="(user)".fontsize(1).sub();
    const smallcomp= "(comp)".fontsize(1).sub();
    result_div.innerHTML = convert(userchoice) + smalluser + "  beats "+ convert(computerChoice) + smallcomp + ".  You have won!!.. keep the scoreboard ticking😎";
    document.getElementById(userchoice).classList.add('green-glow');
    setTimeout(function(){
        document.getElementById(userchoice).classList.remove('green-glow');
    },400)
}

function loss(userchoice,computerChoice){
    computerScore++;
    computerScore_span.innerHTML= computerScore;
    const smalluser="(user)".fontsize(1).sub();
    const smallcomp= "(comp)".fontsize(1).sub();
    result_div.innerHTML = convert(userchoice) + smalluser+  " loses to " + convert(computerChoice) + smallcomp + ". You lost...Got any idea of winning 😏";
    document.getElementById(userchoice).classList.add('red-glow');
    setTimeout(function(){
        document.getElementById(userchoice).classList.remove('red-glow');
    },400)
}

function draw(userchoice,computerChoice){
    computerScore_span.innerHTML= computerScore;
    const smalluser="(user)".fontsize(1).sub();
    const smallcomp= "(comp)".fontsize(1).sub();
    result_div.innerHTML = convert(userchoice) + smalluser +  " equals the " + convert(computerChoice) + smallcomp + ". It's a Draw";
    document.getElementById(userchoice).classList.add('purple-glow');
    setTimeout(function(){
        document.getElementById(userchoice).classList.remove('purple-glow');
    },400)
}


function game(userchoice){
    const computerChoice=getComputerchoice();
    console.log("User Choice is " + userchoice);
    console.log("Computer choice is " + computerChoice);
    switch(userchoice + computerChoice)
    {
        case "rs":
        case "pr":
        case "sp":
            win(userchoice,computerChoice);
            break;
        case "sr":
        case "rp":
        case "ps":
            loss(userchoice,computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userchoice,computerChoice);
            break;
    }
}

function main(){
    rock_div.addEventListener('click',function(){
        game("r");
    })
    paper_div.addEventListener('click',function(){
        game("p");
    })
    scissors_div.addEventListener('click',function(){
        game("s");
    })
}

main();

