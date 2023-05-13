let emojis = ["🐉", "🐥", "🐊","💩", "🦍", "🐢", "🐩", "🦭", "🦀", "🐝", "🤖", "🐘", "🐸", "🕷","🐆", "🦕", "🦁"]
let El_container = document.getElementById("El-container")
let El_btn = document.getElementById("El-btn")


    El_btn.addEventListener("click",function() {

    let random_emoji1 = Math.floor(Math.random()*emojis.length)
    let random_emoji2 = Math.floor(Math.random()*emojis.length)
    El_container.textContent= emojis[random_emoji1] +" VS "+ emojis[random_emoji2]
  
})


