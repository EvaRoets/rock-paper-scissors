//TODO capture + display player click
const rock = document.getElementById("rock"); //player buttons
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
const playerChoice = document.getElementsByClassName("playerChoice")
const sheldonChoice = document.getElementsByClassName("sheldonChoice")

rock.onclick = function () {
    paper.style.display = "none";
    scissors.style.display = "none";
    playerChoice.innerHTML = "You choose rock!"
}

paper.onclick = function () {
    rock.style.display = "none";
    scissors.style.display = "none";
    playerChoice.innerHTML = "You choose paper!"
}

scissors.onclick = function () {
    paper.style.display = "none";
    rock.style.display = "none";
    playerChoice.innerHTML = "You choose scissors!"
}

//TODO generate random computer choice
//TODO display computer choice
//TODO list possible outcomes
//TODO compare player choice to computer choice
//TODO display winner/loser
//TODO add specific message per outcome
//TODO calculate score
//TODO display score


// **VARIABLES**
//**FUNCTIONS**