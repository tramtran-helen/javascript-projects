countEl = document.getElementById("count-el")
saveEl = document.getElementById("current-count")
let count = 0

function increment(){
    count += 1
    countEl.textContent = count
}

function save(){
    let countNum = count + " - "
    saveEl.textContent += countNum
    countEl.textContent = 0
    count = 0
}