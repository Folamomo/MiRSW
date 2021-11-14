function randomSrc (){
    return  `img/gal-${Math.floor(Math.random() * 10 + 1)}.jpeg`
}

function addImage(){
    let template = document.querySelector("#img_template")
    template.parentElement.appendChild(template.cloneNode(true))//copy template for later
    template.removeAttribute("id")
    template.src = randomSrc()
}

function addText () {
    let template = document.querySelector("#article_template")
    template.parentElement.appendChild(template.cloneNode(true))//copy template for later
    template.removeAttribute("id")
}

let imgLast = false

function addElement (){
    if(imgLast){
        addText()
    } else {
        addImage()
    }
    imgLast = !imgLast
}


let options = {
    // root: document.querySelector("#fake_viewport"),
    rootMargin: "100%",
    threshold: [0]
}

let footer = document.querySelector("footer")

let intersectionObserver = new IntersectionObserver((events, observer)=>{
    events.forEach(ev=>{
        if(ev.isIntersecting) {
            addElement()
            observer.unobserve(footer)
            observer.observe(footer)
        }
    })
}, options)
intersectionObserver.observe(footer)