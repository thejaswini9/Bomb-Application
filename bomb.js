let timerEl = document.getElementById("timer")
let defuserEl = document.getElementById("defuser")


let counter = 10
let intervalId = setInterval(function() {
    counter = counter - 1
    // console.log(counter)
    timerEl.textContent = counter
    if (counter === 0) {
        timerEl.textContent = "BOOM!!"
        clearInterval(intervalId)
    }
}, 1000)

defuserEl.addEventListener("keydown", function() {
    let defuserText = defuserEl.value
    // console.log(defuserText)
    if (event.key === "Enter" && defuserText === "defuse" && counter !== 0) {
        timerEl.textContent = "You did it "
        clearInterval(intervalId)
    }
})