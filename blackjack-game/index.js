function randomCard(){
    let num = Math.floor(Math.random * 13) + 1
    if (num > 10) {
        return 10
    } else if (num === 1) {
        return 11
    } else {
        return num
    }
}

sumTotal = 0
card = []
sumDisplay = document.getElementById("sum-el")
function startGame() {
    let num1 = randomCard()
    let num2 = randomCard()
    card = [num1, num2]
    sumTotal = num1 + num2
    inGame()
}

let hasBlackJack = false
messageDisplay = document.getElementById("message-el")
cardDisplay = document.getElementById("card-el")
function inGame() {
    cardDisplay.textContent = ""
    for (let i = 0; i < card.length; i ++) {
        cardDisplay.textContent += card[i] + " "
    }
    
    if (sum < 21) {
        messageDisplay.textContent = "Do you want to draw a new card?"
    } else if (sum === 21) {
        hasBlackJack = true
        messageDisplay.textContent = "You have got BackJack!"
    } else {
        messageDisplay.textContent = "You have lost the game"
    }
}

function newCard() {
    if (sum < 21 && hasBlackJack === false) {
        let nextCard = randomCard()
        sumTotal += nextCard
        card.push(nextCard)
        inGame()
    }
}
