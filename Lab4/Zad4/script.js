function randomSrc (){
    return  `img/gal-${Math.floor(Math.random() * 10 + 1)}.jpeg`
}

let vh = document.documentElement.clientHeight

let tr = [];
for (let i = 0; i <= 1; i+=0.01) {
    tr.push(i);
}

let slidingObserver = new IntersectionObserver(events => {
    events.forEach(ev=>{
        let ratio = Math.min(1, ev.intersectionRect.height/vh * 10)
        // ev.target.children[0].style.opacity = 1
        ev.target.children[0].style.opacity = ratio
        // ev.target.children[0].style.transform = "translateX(0)"
        ev.target.children[0].style.transform = `translateX(${-100 + Math.ceil(ratio*100)}vw)`
    })
},
    {
        threshold: tr
    })

function addImage(){
    let template = document.querySelector("#img_template")
    template.parentElement.appendChild(template.cloneNode(true))//copy template for later
    template.removeAttribute("id")
    template.children[0].src = randomSrc()
    slidingObserver.observe(template)
}

function addText () {
    let template = document.querySelector("#article_template")
    template.parentElement.appendChild(template.cloneNode(true))//copy template for later
    template.removeAttribute("id")
    slidingObserver.observe(template)
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