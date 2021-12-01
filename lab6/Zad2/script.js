let dragged

document.querySelectorAll(".column div").forEach(
    car =>{
        car.addEventListener("dragstart", ev=>{
            dragged = car
            console.log("start")
        })
    }
)



document.querySelectorAll(".column").forEach(c => {
    c.addEventListener("drop", ev => {
        c.appendChild(dragged)
    })
    c.addEventListener("dragover", ev=> {
        ev.preventDefault()
    })
})


