let options = {
    // root: document.querySelector("#fake_viewport"),
    rootMargin: "0px",
    threshold: [0]
}

function intersectionCallback(entries) {
    entries.forEach(e=>{
        if (e.intersectionRatio > 0) {
            e.target.src = e.target.dataset.realsrc
        } else {
            e.target.src = e.target.dataset.emptysrc
        }
    })
}

let marginOut = document.querySelector("#marginOut")
let thresholdOut = document.querySelector("#thresholdOut")

let intersectionObserver = new IntersectionObserver(intersectionCallback, options)
let images = document.querySelectorAll("img")
images.forEach(c=>intersectionObserver.observe(c))


document.querySelector("#margin").oninput = (ev)=>{
    let value = `${ev.currentTarget.value}%`
    marginOut.innerHTML = value
    options.rootMargin = value
    images.forEach(c=>intersectionObserver.unobserve(c))
    intersectionObserver = new IntersectionObserver(intersectionCallback, options)
    images.forEach(c=>intersectionObserver.observe(c))
}

document.querySelector("#threshold").addEventListener("input", (ev)=>{
    let value = Number(ev.currentTarget.value)
    thresholdOut.innerHTML = value
    options.threshold = [value]
    images.forEach(c=>intersectionObserver.unobserve(c))
    intersectionObserver = new IntersectionObserver(intersectionCallback, options)
    images.forEach(c=>intersectionObserver.observe(c))
})
