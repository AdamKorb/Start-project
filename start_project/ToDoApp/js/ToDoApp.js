// ToDoApp 

let myToDo = [{
    text: "Vyniesť kôš",
    completion: false
},{
    text: "Ísť nakúpiť",
    completion: false
},{
    text: "Upratať",
    completion: true
},{
    text: "Nakŕmiť psa",
    completion: true
},{
    text: "Nakŕmiť mačku",
    completion: false
}]

let toDoLeft = myToDo.filter(function(oneToDo){
    return oneToDo.completion === false // rovnake ako !return oneToDo.completion
})
//pocet nesplnenych uloh
let paragraph = document.createElement("p")
paragraph.textContent =`Počet zostávajúcich nesplnených úloh je: ${toDoLeft.length}`
document.querySelector("#number-todos").appendChild(paragraph)

/*****
 * Filtrovanie
 *****/

//2.pre ukladanie textu v policka

const filters = {
    searchingText: ""
}

//3. obecná filtrovacia funkcia
let renderToDos = function(ourToDos, weSearching){
    let ourResults = ourToDos.filter(function(oneToDo){
        return oneToDo.text.toLowerCase().includes(weSearching.searchingText.toLowerCase())
    })
    // kolko uloh zostava urobit
    document.querySelector("#filter-todos").innerHTML = ""


    let leftToDos = ourResults.filter(function(oneToDo){
        return oneToDo.completion === false
    })

    // vypisovanie uloh do stranky
    document.querySelector("#results-todos").innerHTML=""

    let paragraph = document.createElement("p")
        paragraph.textContent =`Počet zostávajúcich nesplnených úloh z filtra je: ${leftToDos.length}`
        document.querySelector("#filter-todos").appendChild(paragraph)

    ourResults.forEach(function(oneResults){
        let paragraph = document.createElement("p")
        paragraph.textContent = oneResults.text
        document.querySelector("#results-todos").appendChild
        (paragraph)
    })
}




//1.načítame text z políčka
let searchText = document.querySelector("#search-text")
searchText.addEventListener("input", function(event){
    filters.searchingText = event.target.value

        //volame filtrovaciu funkciu
        renderToDos(myToDo,filters)
})



//vypisanie vsetkych uloh do ostavcov
for (let i = 0; i < myToDo.length; i++){
    let paragraph = document.createElement("p")
    paragraph.textContent = myToDo[i].text
    document.querySelector("#results-todos").appendChild(paragraph)
}

document.querySelector(".button").addEventListener("click" , function(event){
    console.log("funguje")
})

/*vypisanie nesplenych uloh
for (let i = 0; i < myToDo.length; i++){
    if(myToDo[i].completion===false){
    let paragraph = document.createElement("p")
    paragraph.textContent = myToDo[i].text
    document.querySelector("main").appendChild(paragraph)
    }
}
*/



