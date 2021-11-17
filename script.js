//capture + display player click
const rock = document.getElementById("rock"); //player buttons
const paper = document.getElementById("paper");
const scissors = document.getElementById("scissors");
let playerChoice = document.querySelector(".playerChoice")
let sheldonChoice = document.querySelector(".sheldonChoice")

// rock.addEventListener("click", () => {
//     paper.style.display = "none";
//     scissors.style.display = "none";
//     playerChoice.innerHTML = "You choose rock!"
//     console.log("You clicked rock");
// })
//
// paper.addEventListener("click", () => {
//     rock.style.display = "none";
//     scissors.style.display = "none";
//     playerChoice.innerHTML = "You choose paper!"
//     console.log("You clicked paper");
// })
//
// scissors.addEventListener("click", () => {
//     paper.style.display = "none";
//     rock.style.display = "none";
//     playerChoice.innerHTML = "You choose scissors!"
//     console.log("You clicked scissors");
// })



//generate random computer choice
const gameOptions = ["rock", "paper", "scissors"];
const randomOption = gameOptions[Math.floor(Math.random() * gameOptions.length)];

//display computer choice when play button is clicked
let play = document.getElementById("play");

if (rock.addEventListener("click", () => {
    paper.style.display = "none";
    scissors.style.display = "none";
    playerChoice.innerHTML = "You choose rock!"
    console.log("You clicked rock");
})
    || paper.addEventListener("click", () => {
        rock.style.display = "none";
        scissors.style.display = "none";
        playerChoice.innerHTML = "You choose paper!"
        console.log("You clicked paper");
    })
    || scissors.addEventListener("click", () => {
    paper.style.display = "none";
    rock.style.display = "none";
    playerChoice.innerHTML = "You choose scissors!"
    console.log("You clicked scissors");
})){
    play.addEventListener("click", () => {
        for (let gameOption of gameOptions) {
            if (gameOptions[0] === randomOption) {
                sheldonChoice.innerHTML = "Sheldon choose rock!"
            } else if (gameOptions[1] === randomOption) {
                sheldonChoice.innerHTML = "Sheldon choose paper!"
            } else {
                sheldonChoice.innerHTML = "Sheldon choose scissors!"
            }
        }
    })
}




//TODO list possible outcomes
// switch (playerChoice + sheldonChoice) {
//     case "rockrock":
//     case "paperpaper":
//     case "scissorsscisors":
//         console.log('draw');
// }

//TODO compare player choice to computer choice
//TODO display winner/loser
//TODO add specific message per outcome
//TODO calculate score
//TODO display score


// **VARIABLES**
//**FUNCTIONS**