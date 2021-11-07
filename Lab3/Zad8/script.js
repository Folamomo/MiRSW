add_card = function (name, phone) {
    let template = document.querySelector("#card_template")
    template.parentElement.appendChild(template.cloneNode(true))//copy template for later
    template.removeAttribute("id")
    template.querySelector(".remove")
        .addEventListener("click", ()=>template.parentElement.removeChild(template))
    template.querySelector(".name").innerHTML = name
    template.querySelector(".number").innerHTML = phone
}

validateName = function (name) {
    return name !== ""
}

validateNumber = function (number) {
    number = String(number)
    return number.length === 9
}

document.querySelector("#add_card").addEventListener("click", function (){
    let name = document.querySelector("#name").value
    let phone = document.querySelector("#phone").value
    if (!validateName(name)) {
        alert("Nazwisko nie może być puste")
        return
    }
    if(!validateNumber(phone)) {
        alert("Numer musi mieć 9 cyfr")
        return;
    }

    phone = phone.slice(0,3) + " " + phone.slice(3,6) + " " + phone.slice(6,9)

    add_card(name, phone)

})
