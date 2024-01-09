/*funkcie parametry a argumenty
function pozdrav1(){
    console.log("Toto je Pozdrav 1")
}

pozdrav1()
pozdrav1()

let pozdrav2 = function(){
    console.log("Toto je pozdrav 2")
}

pozdrav2()
pozdrav2()

let pozdrav3 = () => console.log("Toto je pozdrav 3")

pozdrav3()
*/

/*Zdraviaca funkcia

let zdraviacaFunkcia = function(name){
    console.log("Ahoj ja som " + name)
}

zdraviacaFunkcia("Adam")
zdraviacaFunkcia("Jana")
*/

/*regulacia teploty
let temperature = 25
console.log(temperature)

if (temperature <= 10) {
    console.log ("Chladno")
}   else if (temperature >= 11 && temperature <= 25) {
    console.log ("Teplo")
}    else if(temperature >= 26) {
        console.log ("Horúco")
}
*/

/* generator otazok

let pos = prompt("Zadaj svoju pozíciu")

if (pos == "programátor" || "programátorka") {
    console.log ("Aký je rozdiel medzi HTML a CSS?")
}   else if (pos == "administrátor" || "administrátorka") {
    console.log ("Aké druhy sieti poznáte?")
}   else if (pos == "sekretárka" || "sekretár" ) {
    console.log("Aké funkcie v Exceli poznáte?")
}   else {
    console.log("Pre vás nemáme vhodnú pozíciu")
}
*/

/* adultChecker

let age = prompt("Prosím, zadaj svoj vek")

if (age >= 18) {
    console.log("Výsledok testu kontroly: Dospelý")
    console.log("Môžeš vstúpiť")
}   else if(age < 18 && age > 0){
    console.log("Výsledok testu kontroly: Dieťa")
    console.log("Nemôžeš vstúpiť")
}   else{
    console.log("Zadaný nesprávny údaj")
}
*/

/*funkcia a viac parametrov

let súčet = function (a , b , c){
    return a + b + c 
}
let value = súčet(20 , 60, 5)
console.log(value)
*/

/*defaultna (východzia) hodnota

let game = function(name="Anonym", score = 0){
    return "Meno: " + name + ", Score: " + score
}
let value = game(undefined, 50)
console.log(value)
*/

/*overenie pristupu
let codes = function (a, b, c){
    return codes
}
let value = codes(5, 3, 2)
let a = prompt("Zadaj prvé číslo")
let b = prompt("Zadaj druhé číslo")
let c = prompt("Zadaj tretie číslo")

if (a == 5 && b == 3 && c == 2) {
    console.log("Môžete vstúpiť")
}   else{
    console.log("Zle zadaný kód, skúste znova")
}
*/

/*template strings

let myName = "Adam"
let myAge= 25
console.log(`Ahoj, ja som ${myName} a mám ${myAge} rokov.`)
*/

/*objekty - príklad zapisov

let myBook = {
    title: "Harry Potter a kameň mudrcov",
    author:"J.K. Rowlingová",
    published: 1997
}
console.log(myBook)
console.log(myBook.title)
console.log(myBook.author)
console.log(`${myBook.title} je kniha od autorky ${myBook.author} 
a bola vydaná v roku ${myBook.published}.`)

    //zmena vlastnosti objektu
myBook.title = " Harry Potter a Tajomná komnata"
myBook.published = 1998

console.log(`${myBook.title} je kniha od autorky ${myBook.author} 
a bola vydaná v roku ${myBook.published}.`)
*/

/*objekty - test
let person1 = {
    firstName : "Adam",
    age : 24,
    adress : "Trenčín",
}
let person2 = {
    firstName : "Peter",
    age : 22,
    adress : "Žilina",
}
let person3 = {
    firstName : "Ivan",
    age : 19,
    adress : "Bratislava",
}

console.log(`Volá sa ${person1.firstName}, má ${person1.age} rokov a pochádza z mesta ${person1.adress}.`)
console.log(`Volá sa ${person2.firstName}, má ${person2.age} rokov a pochádza z mesta ${person2.adress}.`)
console.log(`Volá sa ${person3.firstName}, má ${person3.age} rokov a pochádza z mesta ${person3.adress}.`)
*/

/*objekty cez funkciu

let firstBook = {
    title: "Harry Potter a kameň mudrcov",
    author:"J.K. Rowlingová",
    published: 1997
}

let secondBook = {
    title: "Harry Potter a tajomná komnata",
    author:"J.K. Rowlingová",
    published: 1998
}

let resultBook = function(book){
    console.log(`Kniha od ${book.author} z roku ${book.published} a volá sa ${book.title}.`)
}

resultBook(firstBook)
resultBook(secondBook)
*/

/*objekty cez funkciu - test

let person1 = {
    firstName : "Adam",
    age : 24,
    adress : "Trenčín",
    gender : "male"
}
let person2 = {
    firstName : "Peter",
    age : 22,
    adress : "Žilina",
    gender : "male"
}
let person3 = {
    firstName : "Eva",
    age : 19,
    adress : "Bratislava",
    gender : "female"
}

let resultPerson = function (personAll){
    if(personAll.gender =="male"){
    console.log(`Volá sa ${personAll.firstName}, on má ${personAll.age} rokov a pochádza z mesta ${personAll.adress}.`)
    }   else {
        console.log(`Volá sa ${personAll.firstName}, ona má ${personAll.age} rokov a pochádza z mesta ${personAll.adress}.`)
    }
}
resultPerson(person1)
resultPerson(person2)
resultPerson(person3)
*/

/*objekty a return

let firstBook = {
    title: "Harry Potter a kameň mudrcov",
    author:"J.K. Rowlingová",
    published: 1997
}

let secondBook = {
    title: "Harry Potter a tajomná komnata",
    author:"J.K. Rowlingová",
    published: 1998
}
let bookInfo = function(book){
    return {
        basicInfo : `${book.title} od ${book.author}.`,
        publishing: `Kniha ${book.title} vydaná v roku ${book.published}.`,
    }
}

let result = bookInfo(firstBook)
console.log(result.basicInfo)
*/

/*Metody

let person1 = {
    firstName : "Alojz",
    secondName : "Hrach",
    age : 35,
    height : 178,
    salary : 2000,
    greet : function(){
        console.log("Ahoj")
    },
    toWork : function(job){
        return "Idem do svojej práce čo je " + job 
    }
}
person1.greet()
let result = person1.toWork("programátor")
console.log(result)
*/

/*objekty - metody - test

let school = {
    type : "gymnázium",
    street : "Dlhá 10",
    city : "Bratislava",
    capacity : 350,
    open : function(){
        console.log("Škola je otvorená.")
    },
    close : function(){
        return("Škola je zatvorená.")
    }
}

console.log(school.type)
console.log(school.city)
school.open()
let result = school.close()
console.log(result)
*/

/*THIS

let person1 = {
    firstName : "Benedikt",
    secondName : "Hlina",
    age : 34,
    greet : function(){
        console.log(this.firstName)
        console.log(this.secondName)
        console.log(this.age)
        console.log(`Ahoj, ja som ${this.firstName} ${this.secondName} a mám ${this.age} rokov.`)
    }
}
person1.greet()

let person2 = {
    firstName : "Cyril",
    secondName : "Voda",
    age : 27,
    greet: function(){
        console.log(this.firstName)
        console.log(this.secondName)
        console.log(this.age)
        console.log(`Ahoj, ja som ${this.firstName} ${this.secondName} a mám ${this.age} rokov.`)
    }
}
person2.greet()
*/

/* objekty - this - test

let vladneNariadenie = false;

let school = {
    type : "gymnázium",
    street : "Dlhá 10",
    city : "Bratislava",
    capacity : 350,
    open : function(){
        console.log(`Škola ${this.type} ${this.city} je otvorená`)
    },
    closed : function(){
        console.log(`Škola ${this.type} ${this.city} je zatvorená`)
    },
}

if (vladneNariadenie === true){
    school.open()
}   else{
    school.closed()
}
*/

/*String - odkaz na web

let firstName = "David"
// dĺžka 
console.log(firstName.length)
// velké písmená
console.log(firstName.toUpperCase())
//obsahuje niečo
let sentence = "Adam sa učí JavaScript"
let word = "Adam"
console.log(sentence.includes(word))
//odstránenie bielych medzier
let secondName = "   Biely "
console.log(secondName.trim())
                 !!! Google - MDN strings methods javascript !!!
*/

/* String - test
let password = "Monitor"
let numbers = "1234"
if(password.length > 13){
    console.log("Veľmi silné heslo")
} else if(password.length >=8 && length <= 13){
    console.log("Silné heslo")
}   else if(password.length >0 && password.length < 8){
    console.log("Slabé heslo")
}   else {
    console.log("Zlý formát hesla")
}

if (password.includes(numbers)){
    console.log("Heslo nesmie obsahovať 1234")
}   else{
    console.log("Heslo je v poriadku")
}
*/

/*Number - methods - properties - Math

let number = 3.1438
//  pocet desatinnych miest
console.log(number.toFixed(2))
//  zaokruhlenie na cele cisla
console.log(Math.round(number))
//  zaokruhlenie dole
console.log(Math.floor(number))
//  zaokruhlenie hore
console.log(Math.ceil(number))

//  Náhodné číslo - vynasobene x10 a zaokruhlene hore
console.log(Math.ceil(Math.random() * 10))
console.log(Math.ceil(Math.random() * 10))
console.log(Math.ceil(Math.random() * 10))

//  Náhodné číslo z intervalu
let min = 15
let max = 20
console.log(Math.floor(Math.random() * (max - min + 1)) + min)


                //!!! Google - MDN string or math methods javascript !!!
*/

/*konštanta - const
//konštanta a premenne
const firstName = "Adam"
console.log(firstName)

//konštanta a objekty
const person = {
    age: 34
}
*/

/*Polia

let employees = ["David","Martin", "Jana"]
console.log(employees)
console.log(employees[1])
console.log(employees[2])

let data = ["Anna", 12, true, false, 15.5]
console.log(data[3])

//dĺžka polia
console.log(employees.length)
console.log(data.length)
// posledny prvok
console.log(data[data.length-1])
*/

/*Nahodny generator hesiel

let password = ["ahoj12", 16041999, "heslo000"]
let vypocet = password[Math.floor(  Math.random()  *3)]
console.log(vypocet)
*/

/*  praca s polom - push, pop, unshift, shift

// prepisanie prvku
let testArray = ["test1","test2","test3"]
testArray[1] = "nový prvok v poli"
console.log(testArray)

//pridanie posledneho prvku
let myArray = ["jeden","dva","tri"]
myArray.push("štyri")
console.log(myArray)

//odstranenie posledneho prvku
myArray.pop()
console.log(myArray)

//pridanie prveho prvku 
myArray.unshift("nultý")
console.log(myArray)

//odstranenie prveho prvku
myArray.shift()
console.log(myArray)
*/

/* mdn array (splice) - properties a methods, odstranenie z lubovolnej pozicie
let mySecondArray = ["jeden","dva","tri"]
mySecondArray.splice(1,2)
console.log(mySecondArray)

let myThirdArray = ["jedna","dva","štyri"]
myThirdArray.splice(2,0,"tri")
console.log(myThirdArray)
*/

/*vyzva s polom
let myArray = []
myArray.push(prompt("pridaj meno"))
myArray.push(prompt("pridaj meno"))
myArray.push(prompt("pridaj meno"))
myArray.unshift(prompt("pridaj meno"))
myArray.unshift(prompt("pridaj meno"))
myArray.unshift(prompt("pridaj meno"))
console.log(myArray)
*/

/*pole a cyklus forEach

let employees = ["Adam", "Brano", "Cecil", "Zuzana"]

//employees.forEach(function(){
//    console.log("testujeme")
//})

employees.forEach(function(person, index){
    console.log(index, person)
    
})
*/

/*vyzva na Pole - ToDo list
let toDo = ["vyvenčiť psa", "kúpiť jedlo", "upratať izbu","uvariť večeru"]
toDo.forEach(function(activity, index){
    let number = index + 1
    console.log(`${number}. ${activity}`)
})
*/

/*Cyklus for

for(let i = 0; i <=5; i++){
    console.log(`${i+1}: testovaci text`)
}

//obrateny cyklus for
for(let j = 3; j >= 0; j--){
    console.log("dalsi text")
}

//vypis pola pomocou for
let employees = ["David", "Jana", "Martin","Dalibor"]

for(let k = 0; k<employees.length; k++){
    console.log(employees)
}
*/

/*vyzva cyklus For
let toDo = ["zostrihať video","upratať izbu","navariť"]
for(let i=0; i < toDo.length; i++){
    console.log(`${i + 1}. ${toDo[i]}`)
}

let array = []
for(let j=0; j<5; j++){
    array.push(j)
}
console.log(array)
*/

/*Pole a indexOF

let employees = ["David","Marek","Jana"]
console.log(employees.indexOf("David"))
console.log(employees.indexOf("Marek"))
console.log(employees.indexOf("Jana"))
console.log(employees.indexOf("Adam"))
console.log(employees.indexOf("Anna"))

if(employees.indexOf("Dalibor") ===-1){
    console.log("Uživateľ nebol nájdený")
} else {
    console.log("Uživateľ boj nájdený")
}
*/

/*pole objektu a findIndex

//findIndex na bežnom poli
let array1 = [8,11,8,20,39]
let result = array1.findIndex(function(number){
    return number > 15
})
console.log(result)
//findIndex na pole objektov
let books = [{
    title: "Harry Potter a kameň mudrcov",
    author: "J.K Rowlingová",
    published: 1997
}, {
    title: "Harry Potter a tajomná komnata",
    author: "J.K Rowlingová",
    published: 1998
}, {
    title: "Harry Potter a väzeň z Azkabanu",
    author: "J.K Rowlingová",
    published: 1999
}]

let result2 = books.findIndex(function(oneBook){
    return oneBook.published === 1998
})
console.log(result2)
*/

/*vyzva - hladanie v databaze
let criminals = [{
    firstName: "Martin",
    secondName: "Zelený",
    birth: 1985,
    address: "U sloupů 16",
    city: "České Budějovice"
}, {
    firstName: "Jana",
    secondName: "Růžová",
    birth: 1996,
    address: "Malská 29",
    city: "České Budějovice"
}, {
    firstName: "Filip",
    secondName: "Modrý",
    birth: 1989,
    address: "Stevardská 38",
    city: "České Budějovice"
}]

let suspect = prompt("Zadajte meno")
let result = criminals.findIndex(function(oneSuspect){
    return oneSuspect.firstName === suspect
})

let ourSuspect = criminals[result]
console.log(`Meno: ${ourSuspect.firstName}`)
console.log(`Priezvisko: ${ourSuspect.secondName}`)
console.log(`Dátum narodenia: ${ourSuspect.birth}`)
console.log(`Adresa: ${ourSuspect.address}`)
console.log(`Mesto: ${ourSuspect.city}`)
*/

/* funkcia find a bezne pole
let myArray = [1,3,20,2,8]
let result = myArray.find(function(oneNumber){
    return oneNumber > 4
})

console.log(result)

//find a pole objektov

let books = [{
    title: "Harry Potter a kameň mudrcov",
    author: "J.K Rowlingová",
    published: 1997
}, {
    title: "Harry Potter a tajomná komnata",
    author: "J.K Rowlingová",
    published: 1998
}, {
    title: "Harry Potter a väzeň z Azkabanu",
    author: "J.K Rowlingová",
    published: 1999
}]

let result2 = books.find(function(oneBook){
    if(oneBook.published === 1999){
        return oneBook
    }
})
console.log(result2.title)
*/

/*Filtrovanie na bežnom poli

let names = ["Jana","Anna", "Nadežda", "David"]

let arrayResults = names.filter(function(oneName){
    let weTryFind = oneName.toLowerCase().includes("na")
    return weTryFind 
})
console.log(arrayResults)
*/

/*Filtrovanie na poli objektov
let books = [{
    title: "Harry Potter a kameň mudrcov",
    author: "J.K Rowlingová",
    published: 1997
}, {
    title: "Harry Potter a tajomná komnata",
    author: "J.K Rowlingová",
    published: 1998
}, {
    title: "Harry Potter a väzeň z Azkabanu",
    author: "J.K Rowlingová",
    published: 1999
},    {
        title: "Životopis Rowlingovej",
        author: "David",
        published: 1999
}]
Filtrovanie na poli objektov
let arrayResults2 = books.filter(function(oneBook){
    let weTryFind2 = oneBook.author.toLowerCase().includes("row")
    return weTryFind2
})

arrayResults2.forEach(function(oneResults){
    console.log(oneResults.title)
})

// hladanie aj v title 
let arrayResults2 = books.filter(function(oneBook){
    let weTryFind2 = oneBook.author.toLowerCase().includes("row")
    let weTryFind3 = oneBook.title.toLowerCase().includes("row")
    return weTryFind2 || weTryFind3
})

arrayResults2.forEach(function(oneResults){
    console.log(oneResults.title)
})
*/

/* vyzva na filtrovanie

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
    firstName: "Filip",
    secondName: "Modrý",
    birth: 1989,
    licencePlate: "2EP6328",
    address: "Stevardská 38",
    city: "České Budějovice"
}]

let proof = prompt("Zadaj dôkaz")
let arrayResults = criminals.filter(function(suspect){
    let myFirstSuspect = suspect.licencePlate.toLowerCase().includes(proof)
    return myFirstSuspect
})
arrayResults.forEach(function(suspect){
    console.log(`Meno: ${suspect.firstName}`)
console.log(`Priezvisko: ${suspect.secondName}`)
console.log(`Dátum narodenia: ${suspect.birth}`)
console.log(`ŠPZ: ${suspect.licencePlate}`)
console.log(`Adresa: ${suspect.address}`)
console.log(`Mesto: ${suspect.city}`)
console.log(`----------------------`)

})
*/

/*radenie pola objektov
//bezne pole
let names = ["Anna","Cecilia","Barbora"]
names.sort()
console.log(names)

let numbers = [1, 8, 5, 3, 15, 2]
numbers.sort()
console.log(numbers)

//radenie pola objektov
let books = [{
    title: "Harry Potter a kameň mudrcov",
    author: "J.K Rowlingová",
    published: 1997
}, {
    title: "Harry Potter a tajomná komnata",
    author: "J.K Rowlingová",
    published: 1998
}, {
    title: "Harry Potter a väzeň z Azkabanu",
    author: "J.K Rowlingová",
    published: 1999
}]

let result2 = books.find(function(oneBook){
    if(oneBook.published === 1999){
        return oneBook
    }
})

let sortArray = function(arrayBooks){
    arrayBooks.sort(function(a,b){
        if(a.title.toLowerCase() < b.title.toLowerCase()){
            return -1
        }   else if (b.title.toLowerCase() < a.title.toLowerCase()){
            return 1
        }   else{
            return 0
        }
    })
}

sortArray(books)
console.log(books)

let sortArray2 = function(myNumbers){
    myNumbers.sort(function(a,b){
        if(a < b){
            return -1
        }   else if (b< a){
            return 1
        }   else{
            return 0
        }
    })
}
sortArray2(numbers)
console.log(numbers)
*/

/*DOM - document object model a selektory

//querySelector
let heading = document.querySelector("h1")
console.log(heading)

//querySelectorAll
let allParagraphs = document.querySelectorAll("p")
console.log(allParagraphs[0])
console.log(allParagraphs[1])

let myClass2 = document.querySelectorAll(".link")
console.log(myClass2)
console.log(myClass2[0])
console.log(myClass2[1])

//getElementById
let myId = document.getElementById("header")
console.log(myId)

//getElementByClassName
let myClass = document.getElementsByClassName("link")
console.log(myClass)
console.log(myClass[0])
console.log(myClass[1])
*/

/* Vyzva na vyber tagov

let myHeaderH1 = document.querySelector("h1")
console.log(myHeaderH1)

let paragraphOne = document.querySelector("#test2")
console.log(paragraphOne)

let headerH2 = document.querySelectorAll("h2")
console.log(headerH2[0])
console.log(headerH2[1])

let myClass = document.querySelectorAll(".test1")
console.log(myClass[0])
console.log(myClass[1])

let myClass2 = document.getElementsByClassName("test1")
console.log(myClass2[0])
console.log(myClass2[1])

let paragraphTwo = document.getElementById("test2")
console.log(paragraphTwo)
*/

/*textContent,innerText,innerHTML
let heading = document.querySelector("h1")
console.log(heading.textContent) //pouzivat, bezpecnejsi
console.log(heading.innerText)  //nepouzivat
console.log(heading.innerHTML) //pouzit keby treba pouzit vnutorne tagy

heading.textContent = "Nový nadpis"
console.log(heading.textContent)
*/

/*pole odstavcov forEach
let paragraphs = document.querySelectorAll("p")
paragraphs.forEach(function(oneParagraph){
    console.log(oneParagraph.textContent)
})
*/

/*Remove - prvok podla obsahu

let paragraphs = document.querySelectorAll("p")

paragraphs.forEach(function(oneParagraph){
    if(oneParagraph.textContent.toLowerCase().includes("nakŕmiť")){
        oneParagraph.remove
    }
})
*/

/*Vytvaranie prvkov
const newParagraph = document.createElement("p")
newParagraph.textContent = "Text do nového odstavca"
console.log(newParagraph)
document.querySelector("header").appendChild(newParagraph)

const newDiv = document.createElement("div")
document.querySelector("header").appendChild(newDiv)
let secondParagraph = document.createElement("p")
secondParagraph.textContent = "Text pre druhý odstavec"
newDiv.appendChild(secondParagraph)
secondParagraph.append("Nový text")
secondParagraph.prepend("Starý text")
*/

/*zachytavanie kliknuti - eventListener, click, event
document.querySelector("a").addEventListener("click", function(event){
    event.target.textContent = "Zakliknuté"
})
*/

/*event listener change a input
let input = document.querySelector("#input-text")
input.addEventListener("input",function(event){
    console.log(event.target.value)
})
*/

/*fukncia tlacitka

let button1 = document.querySelector(".firstBtn")
let button2 = document.querySelector(".secondBtn")

button1.addEventListener("click",function(){
    console.log("Kliknutie na prvé tlačitko")
})

button2.addEventListener("click",function(){
    console.log("Kliknutie na druhé tlačitko")
})
*/
