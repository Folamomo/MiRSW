let productsAddresses = [
    "ProduktyA",
    "ProduktyB"
]

function addAll(map, key, values){
    let el = map.get(key)
    values = values.map(obj=>[obj.nazwa, obj])
    let newEl = new Map([...el, ...values])
    map.set(key, newEl)
}

async function fetchCategories(){
    return fetch("http://localhost:3000/kategorie")
        .then(response=>response.json())
        .then(tab=> new Map(tab.map(category=>[category, new Map()])))
        .catch(()=>new Map)
}

async function fetchSingleProducts(tableName){
    return fetch("http://localhost:3000/" + tableName)
        .then(response=>response.json())
        .then(obj=>Object.entries(obj))
        .catch(()=>[])
}

function getAllProducts(addresses){
    return addresses.map(fetchSingleProducts)
}

function drawSingleCategory(products, category){
    let template = document.querySelector("#template")
    template.parentElement.appendChild(template.cloneNode(true))//copy template for later
    template.removeAttribute("id")
    template.querySelector(".categoryName").textContent = category
    let productsElement = template.querySelector(".products")
    let productElement = productsElement.querySelector(".product")
    for(let productName of products.keys()){
        let newProduct = productElement.cloneNode(true)
        newProduct.textContent = productName
        productsElement.appendChild(newProduct)
    }
    productsElement.removeChild(productElement)
}

async function drawTable(){
    let categoriesPromise = fetchCategories()
    let productsPromise = getAllProducts(productsAddresses)
    let categories = await categoriesPromise
    await Promise.all(productsPromise.map(async function (request) {
            let products = await request
            products.forEach(category=>{
                addAll(categories, ...category)
            })
        }))

    categories.forEach(drawSingleCategory)
}

drawTable()


