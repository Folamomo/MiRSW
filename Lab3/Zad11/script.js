window.addEventListener("contextmenu", function (event){
    let kulka = document.querySelector("img")
    kulka.style.top = `${event.clientY - 25}px`
    kulka.style.left = `${event.clientX - 25}px`
    event.preventDefault()
    },
)