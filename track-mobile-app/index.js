import { initializeApp } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-app.js";
import { getDatabase, 
        ref, 
        push,
        onValue,
        remove } from "https://www.gstatic.com/firebasejs/11.10.0/firebase-database.js"

const firebaseConfig = {
    apiKey: "AIzaSyCEptRzDLez2GEcEndmGG4vjw-yIZEwvS0",
    authDomain: "teddy-tracker-82c7a.firebaseapp.com",
    databaseURL: "https://teddy-tracker-82c7a-default-rtdb.firebaseio.com",
    projectId: "teddy-tracker-82c7a",
    storageBucket: "teddy-tracker-82c7a.firebasestorage.app",
    messagingSenderId: "570180497461",
    appId: "1:570180497461:web:5b84defc4937e17b58417c"
}

const app = initializeApp(firebaseConfig)
console.log("Firebase initialized with app:", app);
const database = getDatabase(app)
const referenceDatabase = ref(database, "links")

let inputEl = document.getElementById("input-el")
let saveInput = document.getElementById("save-btn")

//Save button
// When clicking, show the info
saveInput.addEventListener("click", function() {
    push(referenceDatabase, inputEl.value)
    inputEl.value = ""
})

// Render function, or else will only show in console
function render(links) {
    let listItems = ""
    for (let i = 0; i < links.length; i++) {
        listItems += `<li>
        <a target='_blank' href='${links[i]}'>${links[i]}</a> 
        </li>`
    }
    document.getElementById("input-list").innerHTML = listItems
}

//Fetching data: getting snapshot (onValue)
onValue(referenceDatabase, function(snapshot) {
    const snapshotExist = snapshot.exists()
    //Without this, after deleting database, errors will rise bc onValue keeps track of changes every time, since there's no snapshot, there will be error
    if (snapshotExist) {
       const snapshotVal = snapshot.val() //snapshot object contains a lot more than the data, so just want to get the values
       const linkInput = Object.values(snapshotVal)
       render(linkInput)
    }
})

//Delete button
let deleteInput = document.getElementById("delete-btn")
deleteInput.addEventListener("dblclick", function() {
    remove(referenceDatabase)
    document.getElementById("input-list").innerHTML = ""
})
