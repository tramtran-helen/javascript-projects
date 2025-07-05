document.getElementById("tap-btn").addEventListener("click", function() {
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            document.getElementById("text-content").textContent = data.activity
            document.getElementById("bored-bot").textContent = "Happy Bot Now 🤖😊!"
            document.body.classList.add("happy")
    })
})
