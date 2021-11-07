document.querySelector("#gora")
    .addEventListener("click", ()=>{
        document.querySelector("#gora").style.display = "none"
        document.querySelector("#morze").style.display = "block"
    })


document.querySelector("#morze")
    .addEventListener("click", ()=>{
        document.querySelector("#gora").style.display = "block"
        document.querySelector("#morze").style.display = "none"
    })