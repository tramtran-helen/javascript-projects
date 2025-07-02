let inputEl = document.getElementById("input-el")
let saveInput = document.getElementById("save-btn")
input = []

storedInput = JSON.parse(localStorage.getItem("input"))
function renderAgainAfterReload() {
    if (storedInput) {
        input = storedInput
        render(input)
    }
}
renderAgainAfterReload()

// When clicking, show the info
saveInput.addEventListener("click", function() {
    input.push(inputEl.value)
    localStorage.setItem("input", JSON.stringify(input)) //only save, needs to be rendered again (lead to above function)
    render(input)
})

// Render function, or else will only show in console
function render(links) {
    listItems = ""
    for (let i = 0; i < links.length; i++) {
        listItems += `<li>
        <a target='_blank' href='${links[i]}'>${links[i]}</a> 
        </li>`
    }
    document.getElementById("input-list").innerHTML = listItems
}

//Delete button
let deleteInput = document.getElementById("delete-btn")
deleteInput.addEventListener("dblclick", function() {
    localStorage.clear()
    input = []
    render(input)
})

//Save tab button
let saveTab = document.getElementById("save-tab")
saveTab.addEventListener("click", function() {
    chrome.tab.query({active: true, currentWindow: true}), function(tab) {
        input.push(tab[0].url)
        localStorage.setItem("input", JSON.stringify(input))
        render(input)
    }
})