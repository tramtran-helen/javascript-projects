/*--------------*/
//Get two cards from API
let deckId = ""
document.getElementById("draw-new-deck").addEventListener("click", function() {
    if (deckId === "") {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(response => response.json())
        .then(data => {
            deckId = data.deck_id
            allCards()})}
    else {
        allCards()
    }})
/*--------------*/



/*--------------*/
//Draw two cards & Display images & Determine winning cards & Final winner
function allCards() {
    fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(response => response.json())
        .then(data => {
            remainingCards(data)//Display remaining cards
            const card1 = data.cards[0]//Access the first object in the array
            const card2 = data.cards[1]
            displayCards(card1, card2)

            const card1Score = cardValues[card1.value]//Get the number associated
            const card2Score = cardValues[card2.value]
            winningCard(card1Score, card2Score)
            if (data.remaining === 0) {
                finalWinner(computerScore, yourScore)
                document.getElementById("draw-new-deck").disabled = true}
            })}
//Display cards
function displayCards(card1, card2) {
    document.getElementById("display-cards").children[0].innerHTML = `
    <img src="${card1.image}" class="card"/>`
    document.getElementById("display-cards").children[1].innerHTML = `
    <img src="${card2.image}" class="card"/>`
}
/*--------------*/



/*--------------*/
//Determine the winning cards
//Dictionary
cardValues = {
        "1": 1,
        "2": 2,
        "3": 3,
        "4": 4,
        "5": 5,
        "6": 6,
        "7": 7,
        "8": 8,
        "9": 9,
        "10": 10,
        "JACK": 11,
        "QUEEN": 12,
        "KING": 13,
        "ACE": 14,
    }
//Function to determine & update scores every round
let computerScore = 0
let yourScore = 0
function winningCard(card1Score, card2Score) {
    if (card1Score > card2Score) {
        computerScore += 1
        document.getElementById("result").textContent = "The computer wins this round!"
    } else if (card1Score < card2Score) {
        yourScore += 1
        document.getElementById("result").textContent = "You win this round!"
    } else {
        document.getElementById("result").textContent = "It's a tie this round!"
    }
    document.getElementById("computer-score").textContent = `Computer Score: ${computerScore}`
    document.getElementById("your-score").textContent = `Your Score: ${yourScore}`
}
/*--------------*/



/*--------------*/
//Determine the final winner
function finalWinner(computerScore, yourScore) {
    if (computerScore > yourScore) {
        document.getElementById("result").textContent = "Game ends. The computer is the final winner!"
    }
    if (computerScore < yourScore) {
        document.getElementById("result").textContent = "Game ends. You are the final winner!"
    }
    if (computerScore === yourScore) {
        document.getElementById("result").textContent = "Game ends. The final result is a tie!"
    }
}
/*--------------*/



/*--------------*/
//Determine the remaining cards
function remainingCards(data) {
    document.getElementById("remaining-card").textContent = `Remaining Cards: ${data.remaining}`
}
/*--------------*/