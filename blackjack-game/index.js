function randomCard(){
    let num = Math.floor(Math.random() * 13) + 1
    if (num > 10) {
        return 10
    } else if (num === 1) {
        return 11
    } else {
        return num
    }
}



let sumTotal = 0
let card = []
let sumDisplay = document.getElementById("sum-el")
function startGame() {
    let num1 = randomCard()
    let num2 = randomCard()
    card = [num1, num2]
    sumTotal = num1 + num2
    inGame()
}



let playerInfo = {
    name: "Richie",
    money: 175
}
let notiDisplay = document.getElementById("noti-el")
let hasBlackJack = false
let messageDisplay = document.getElementById("message-el")
let cardDisplay = document.getElementById("card-el")
function inGame() {
    cardDisplay.textContent = "Cards: "
    for (let i = 0; i < card.length; i ++) {
        cardDisplay.textContent += card[i] + " "
    }
    
    sumDisplay.textContent = "Sum: " + sumTotal

    if (sumTotal < 21) {
        messageDisplay.textContent = "Do you want to draw a new card? 😊"
    } else if (sumTotal === 21) {
        hasBlackJack = true
        messageDisplay.textContent = "You have got BackJack!"
        notiDisplay.textContent = "🎉 Congratulations! " + playerInfo.name + "! You won $" + playerInfo.money
    } else {
        messageDisplay.textContent = "You have lost the game! 😭"
    }
}



function newCard() {
    if (sumTotal < 21 && hasBlackJack === false) {
        let nextCard = randomCard()
        sumTotal += nextCard
        card.push(nextCard)
        inGame()
    }
}
