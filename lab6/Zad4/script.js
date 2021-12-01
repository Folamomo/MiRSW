let dragged
let copy = document.querySelector("input")

document.querySelectorAll(".item").forEach(
    task =>{
        task.addEventListener("dragstart", ev=>{
            dragged = task
        })
    }
)

document.querySelectorAll(".column").forEach(c => {
    c.addEventListener("drop", ev => {
        if(copy.checked) {
            let clone = dragged.cloneNode(true)
            clone.addEventListener("dragStart", ev =>{
                dragged = clone
            })
            c.appendChild(clone)
        } else {
            c.appendChild(dragged)
        }
    })
    c.addEventListener("dragover", ev=> {
        ev.preventDefault()
    })
})



