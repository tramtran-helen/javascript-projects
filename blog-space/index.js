//Fetching data from the server & render first 7 blogs under the post button
fetch("https://apis.scrimba.com/jsonplaceholder/posts")
    .then(response => response.json())
    .then(data => {
        const firstBlogs = data.slice(0, 7) //Still array
        for (singleBlog of firstBlogs) { //Have to do this to access information each object inside the array
            document.getElementById("blog-posted").innerHTML += `
            <h3>${singleBlog.title}</h3>
            <p>${singleBlog.body}</p>
            <hr>`
        }
})


//Space to input data of my own & after that also render under the post button (but before the old posts)
document.getElementById("form-input").addEventListener("submit", function(event) { //event here is all happening inside the function
    //submit event fires on the form element
    event.preventDefault() //Without this, page will reload and the process of fetching data might not be executed

    const titleInput = document.getElementById("title-input").value
    const contentInput = document.getElementById("content-input").value
    const inputObject = {
        title: titleInput,
        body: contentInput
    }

    //Send data to server
    fetch("https://apis.scrimba.com/jsonplaceholder/posts", {
        method: "POST",
        body: JSON.stringify(inputObject), //Turn to string to send to the server
        headers: {
            "Content-Type": "application/json"
        }
    })
    .then(response => response.json())
    .then(data => {
        const inputFinal = `
            <h3>${data.title}</h3>
            <p>${data.body}</p>
            <hr>`
        document.getElementById("blog-posted").innerHTML = inputFinal + document.getElementById("blog-posted").innerHTML
        document.getElementById("form-input").reset()}) //reset, only works on form element
})