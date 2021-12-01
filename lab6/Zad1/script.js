let img, offX, offY


document.querySelectorAll("img").forEach(
    image =>{
        image.addEventListener("dragstart", ev=>{
            img = image
            offX = image.offsetLeft - ev.x
            offY = image.offsetTop - ev.y
            console.log("start")
        })
    }
)



document.querySelector("div").addEventListener("drop", ev=>{
    console.log("drop", offY, offX)
    img.style.top = `${ev.pageY + offY}px`
    img.style.left = `${ev.pageX + offX}px`
    img.style.position = "absolute"
})


document.querySelector("div").addEventListener("dragover", ev=>{
    ev.preventDefault()
})