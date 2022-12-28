let myEmojis = []
const emojiContainer = document.getElementById("emoji-container")
const emojiInput = document.getElementById("emoji-input")
const pushBtn = document.getElementById("push-btn")
const unshiftBtn = document.getElementById("unshift-btn")
const popBtn = document.getElementById("pop-btn")
const shiftBtn = document.getElementById("shift-btn")
let name = ""
const nameEl = document.getElementById("user")
let displayUser = document.getElementById("user-display")
const confirmEl = document.getElementById("confirm")
const inputName = document.getElementById("name-input")
let myEmojiLocalContainer = JSON.parse(localStorage.getItem("myEmojis"))
const resetEl = document.getElementById("reset")


if (myEmojiLocalContainer){
    myEmojis = myEmojiLocalContainer
    renderEmojis()
}


confirmEl.addEventListener("click", function(){
name = inputName.value
  if (name){
      displayUser.innerHTML = `<h1> ${name}'s emojis </h1>`
      inputName.remove()
      confirmEl.remove()
      
  } 
})



function renderEmojis() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojis.length; i++) {
    emojiContainer.innerHTML += `<span> ${myEmojis[i]}`
    }
}



pushBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.push(emojiInput.value)
        localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
        emojiInput.value = ""
        renderEmojis()
        
    }
})

unshiftBtn.addEventListener("click", function(){
    if (emojiInput.value) {
        myEmojis.unshift(emojiInput.value)
        localStorage.setItem("myEmojis", JSON.stringify(myEmojis))
        emojiInput.value = ""
        renderEmojis()
    }
})

popBtn.addEventListener("click", function() {
    myEmojis.pop()
    renderEmojis()
})

shiftBtn.addEventListener("click", function() {
    myEmojis.shift()
    renderEmojis()
})

resetEl.addEventListener("dblclick", function(){
    localStorage.clear()
    myEmojis = []
    renderEmojis()
})

console.log(myEmojiLocalContainer)



