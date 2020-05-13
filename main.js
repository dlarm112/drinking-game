let compNum = Math.floor((Math.random() * 21) + 1)
console.log("Computer:", compNum)
const button = document.getElementById("guess")
let message = ""
let userNum = 0
let history = []
let guess3 = 3



function guess() {
    userNum = document.getElementById("userNum").value;
    if (userNum < 1 || userNum > 22) {
        message = "Please pick a number 1-21"
    } else if (userNum > compNum) {
        message = "Your guess is too high";
    } else if (userNum < compNum) {
        message = "Your guess is too low";
    } else if (userNum == compNum) {
        message = "WINNER!!!";
        button.disabled = true
    }
    document.getElementById("response").innerHTML = `${message}`
    history.push(userNum)
    document.getElementById("history").innerHTML = `${history}`
    console.log(--guess3)
    document.getElementById("guessNum").innerHTML = `${guess3}`
    if (guess3 == 0) {
        message = "Game Over"
        document.getElementById("response").innerHTML = `${message}`
        button.disabled = true
    }
    console.log("Attempts left:", guess3)
}

function reset() {
    compNum = Math.floor((Math.random() * 21) + 1)
    console.log("Computer:", compNum)
    guess3 = 3
    document.getElementById("guessNum").innerHTML = `${guess3}`
    history = []
    document.getElementById("history").innerHTML = `${history}`
    message = ""
    document.getElementById("response").innerHTML = `${message}`
    button.disabled = false
}
let time = 3
let myTime

function timecounting() {
    myTime = setInterval(() => {
        time -= 1
        document.getElementById('timecount').innerHTML = time
    }, 1000)
}
timecounting()









// // 1. commputer picks random number
// let randomNum = Math.floor(Math.random() * 50) + 1 //random number 0-1
// console.log("computer choice", randomNum)
// let resultMessage = ""
// let history = []
// let userNum = 0
// // 2. when user clicks guess, it will fire function 'guess'
// function guess() {

//     let userNum = document.getElementById("guessNumber").value;

//     if (randomNum > userNum) {
//         resultMessage = "Too low";
//     } else if (randomNum < userNum) {
//         resultMessage = "Too high";
//     } else if (randomNum === userNum) {
//         resultMessage = "YOU WIN!";
//     }
// }
// // 8. show result to user

// document.getElementById("resultArea").innerHTML = `${resultMessage}`
// document.getElementById("history").innerHTML = `${history}`

// history.push(userNum)