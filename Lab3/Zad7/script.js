function test(event) {
    event.preventDefault();
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    if(!/^[a-zA-Z ]+$/.test(firstName) || !/^[a-zA-Z \-]+$/.test(lastName)){
        alert("Bład w imieniu lub nazwisku");
    }
    let birthYear = document.getElementById("birthYear").value;
    if(birthYear < 1850 || birthYear > 2021) {
        alert("Niepoprawny rok urodzenia");
    }
    let retireYear = parseInt(document.getElementById("retireYear").value);
    if(retireYear < 2021) {
        alert("Niepoprawny rok przejścia na emeryture");
    }
    let phone = document.getElementById("phone").value;
    if(!/^[0-9]+$/.test(phone)){
        alert("Niepoprawny numer telefonu");
    }

    let gender = document.querySelector('input[name="gender"]:checked')?.value;

    if(gender === 'Female'){
        if(retireYear - birthYear <= 60 && retireYear && birthYear) {
            document.getElementById("answer").innerHTML = "Nie możesz przejść na emeryturę w wybranym roku";
        } else if(retireYear && birthYear) {
            document.getElementById("answer").innerHTML = "Możesz przejść na emeryturę w wybranym roku";
        }
    } else if(gender === 'Male'){
        if(retireYear - birthYear <= 65 && retireYear && birthYear) {
            document.getElementById("answer").innerHTML = "Nie możesz przejść na emeryturę w wybranym roku";
        } else if(retireYear && birthYear) {
            document.getElementById("answer").innerHTML = "Możesz przejść na emeryturę w wybranym roku";
        }
    } else {
        alert("Musisz wybrać płeć");
    }
}

document.querySelector('button#send-btn').addEventListener('click', test)

