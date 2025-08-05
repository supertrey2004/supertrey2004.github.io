


var imagesArray = ["MyPicByWilliam.jpg", "DragonByWilliam.jpg"];
var imageState = 0;

img(true,imagesArray[0])

setInterval(() => {
    img(true,imagesArray[imageState])
    imageState++
    console.log(imageState)
    if (imageState >= imagesArray.length) {
        imageState = 0;
    }
}, 3000);






/*
var jokeSet = document.querySelector("#joke")
var jokePunch = document.querySelector("#joke2")

fetch("https://official-joke-api.appspot.com/jokes/random").then(Response => {
        Response.json().then(data => {
        console.log(data)
        jokeSet.textContent = data.setup
        jokePunch.textContent = data.punchline
    })
})
*/


function img(onOff, URL) {
    var img = document.getElementById("img");
    if (onOff) {
        img.innerHTML = "<img src=images/" + URL + ">"
    } else {
        img.innerHTML = ""
    }
}