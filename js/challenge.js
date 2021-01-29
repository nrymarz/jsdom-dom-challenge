const counter = document.querySelector("#counter")
const minusBtn = document.querySelector("#minus")
const plusBtn = document.querySelector("#plus")
const heartBtn = document.querySelector("#heart")
const pauseBtn = document.querySelector("#pause")

let counterInterval = window.setInterval(incrementCounter,1000)

plusBtn.addEventListener("click", incrementCounter)
minusBtn.addEventListener("click",decrementCounter)
pauseBtn.addEventListener("click",handleClickPauseEvent)
heartBtn.addEventListener("click",handleClickHeartEvent)

function handleClickPauseEvent(event){
    if(event.target.id === "pause"){
        window.clearInterval(counterInterval)
        event.target.id = "resume"
        event.target.innerHTML = `Resume`
    }
    else if(event.target.id === "resume"){
        counterInterval = window.setInterval(incrementCounter,1000)
        event.target.id = "pause"
        event.target.innerHTML = "pause"
    }
}

function handleClickHeartEvent(event){
    const likeList = document.querySelector(".likes")
    let counterNum = counter.textContent
    if(likeList.children.namedItem(`${counterNum}`)){
        let likes = likeList.children.namedItem(`${counterNum}`)
        let num = parseInt(likes.textContent.split("has")[1])
        num += 1
        likes.textContent = `${counterNum} has ${num} likes`
    }
    else{
        likeList.innerHTML += `<li id="${counter.textContent}">${counterNum} has 1 like</li>`
    }
}

function incrementCounter(){
    let int = parseInt(counter.textContent)
    int += 1
    counter.textContent = int;
}

function decrementCounter(){
    let int = parseInt(counter.textContent)
    int -= 1
    counter.textContent = int
}

