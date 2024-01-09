// uvod
let criminals = [{
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    licencePlate: "85C3322",
    address: "U sloupů 16",
    city: "České Budějovice"
}, {
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    licencePlate: "93K3922",
    address: "Malská 29",
    city: "České Budějovice"
}, {
    firstName: "Anna",
    secondName: "Modrá",
    birth: 1989,
    licencePlate: "2EP6328",
    address: "Stevardská 38",
    city: "České Budějovice"
}]

//2. Uložíme dáta z políčka
let filters = {
    searchText: ""
}

//3. Filter
const renderCriminals = function(ourCriminals, tryToFind){
    let arrayResult = ourCriminals.filter(function(oneSuspect){
        return oneSuspect.licencePlate.toLowerCase().includes(tryToFind.searchText.toLowerCase())
    })

    document.querySelector("#idCriminal").innerHTML = ""

    arrayResult.forEach(function(oneSuspect){
        let paragraph = document.createElement("p")
        paragraph.innerHTML = ` Meno: ${oneSuspect.firstName},<br> Priezvisko: ${oneSuspect.secondName},<br>
        Rok narodenia: ${oneSuspect.birth}, <br> Špz: ${oneSuspect.licencePlate},<br>
        Adresa: ${oneSuspect.address},<br> Mesto: ${oneSuspect.city}`

        document.querySelector("#idCriminal").appendChild(paragraph)
    })
}

//1.Načítanie dát z políčka
let licencePlate = document.querySelector("#licence-plate")

licencePlate.addEventListener("input", function(event){
   filters.searchText = event.target.value
   renderCriminals(criminals, filters)
})
