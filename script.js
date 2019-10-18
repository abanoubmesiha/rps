let userScore = 0;
let computerScore = 0;
const userScore_span =document.getElementById("user-score");
const computerScore_span =document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const result_p = document.querySelector(".result > p")
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

function convertToword(letter) {
    if (letter == "r") return "Rock";
    else if (letter ==  "p") return "Paper";
    else if (letter == "s") return "Scissors";
    else console.log("something is wrong with converToword function");
}

function getcomputerChoice(){
    const choices = ['r','p','s'];
    const randomNumber = Math.floor(Math.random()*3);
    return choices [randomNumber];
}

function win(userChoice,computerChoice){
        userScore++;
        userScore_span.innerHTML = userScore;
        computerScore_span.innerHTML = computerScore;
        const userChoice_div = document.getElementById(userChoice);
        const smalluserword = "user".fontsize(1);
        const smallcompword = "comp".fontsize(1);
        result_p.innerHTML=`${(convertToword(userChoice))} ${smalluserword} beats ${(convertToword(computerChoice))} ${smallcompword} . YOU WIN.`
        userChoice_div.classList.add('green-glow');
        setTimeout(function(){userChoice_div.classList.remove('green-glow')}, 300);     
    }    

function lose(userChoice,computerChoice){
        computerScore++;
        computerScore_span.innerHTML = computerScore;
        userScore_span.innerHTML = userScore;
        const userChoice_div = document.getElementById(userChoice);
        const smalluserword = "user".fontsize(1);
        const smallcompword = "comp".fontsize(1);
        result_p.innerHTML=`${convertToword((userChoice))} ${smalluserword} loses from ${(convertToword(computerChoice))} ${smallcompword} . YOU LOSE.`
        userChoice_div.classList.add('red-glow');
        setTimeout(function(){userChoice_div.classList.remove('red-glow')}, 300);     
    }   
    
function draw(userChoice,computerChoice){
    const userChoice_div = document.getElementById(userChoice);
        const smalluserword = "user".fontsize(1);
        const smallcompword = "comp".fontsize(1);
        result_p.innerHTML=`${(convertToword(userChoice))} ${smalluserword} equals ${(convertToword(computerChoice))} ${smallcompword} . It's a Draw.`
        userChoice_div.classList.add('gray-glow');
        setTimeout(function(){userChoice_div.classList.remove('gray-glow')}, 300);     
    }

function game (userChoice){
        const computerChoice = getcomputerChoice();
              switch ( userChoice + computerChoice ){
            case "rs":
            case "pr":
            case "sp":
                win(userChoice,computerChoice);
                break
            case "sr":
            case "rp":
            case "ps":
                lose(userChoice,computerChoice);
                break
            case "rr":
            case "pp":
            case "ss":
                draw(userChoice,computerChoice);
                break;                
       
            }
    
       }

function main(){
    rock_div.addEventListener('click', function() { 
        game ("r");
     })
    paper_div.addEventListener('click', function() {
        game ("p"); 
        })
    scissors_div.addEventListener('click', function()  {
        game ("s");
         })
        }
    main();

