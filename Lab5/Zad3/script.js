let canvas = document.querySelector("#canvas")
let ctx = canvas.getContext("2d")
let image = document.querySelector("img")
image.addEventListener('load', e=>{
    ctx.drawImage(image, 0, 0, 600, 400)
    ctx.drawImage(image, 50, 200, 300, 300, 10, 300, 300, 300)
    }
)
