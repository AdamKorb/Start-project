// uvod

/*zakladny operator*/

var ageDavid = 20;
var ageJana = 20;
var year = 2023;
var birthDavid = year - ageDavid;
var birthJana = year -20;
var rozdiel;
var age = prompt("Koľko máš rokov?")




if (age >= 18)  {
    console.log("Si plnoletý, môžeš vstúpiť")
} else {
    console.log("Neplnoletý, nemôžeš vstúpiť")
}


console.log("David má " + ageDavid)
if ((ageJana - ageDavid) == 1) {
    rozdiel = " rok";
} else {
    if ((ageJana - ageDavid) == 2,3,4) {
        rozdiel = " roky";
    } else { rozdiel = " rokov";}
}
if (ageDavid < ageJana){
        console.log("Jana je staršia o " + (ageJana - ageDavid) + rozdiel);
}   else if (ageDavid > ageJana) { 
        console.log("David je starší o " + (ageDavid - ageJana));
}   else {
        console.log("Jana je rovnako stará");
}


/*var result = ageJana == ageDavid
console.log(result);

console.log(typeof(ageDavid));
console.log(typeof(result));

var x = 1;
x += 1;
console.log(x);
x *= 5;
console.log(x);
x++; //plus jedna
console.log(x);
*/