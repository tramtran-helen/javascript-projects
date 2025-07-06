//Get two cards from API
document.getElementById("draw-new-deck").addEventListener("click", function() {
    fetch("https://apis.scrimba.com/deckofcards/api/deck/new/shuffle/")
        .then(response => response.json())
        .then(data => {
            const deckId = data.deck_id
            console.log(deckId)
        
        //If the above is outside
        fetch(`https://apis.scrimba.com/deckofcards/api/deck/${deckId}/draw/?count=2`)
        .then(response => response.json())
        .then(data => {
            const card1 = data.map(data => data.value[0])
            const card2 = data.map(data => data.value[1])
            console.log(card1)
            console.log(card2)
        })
        })
})