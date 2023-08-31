/* ------------------------------------ */
/* --- Exercice 1 --- */

document.querySelector("#ex1 .button").addEventListener("click", () => {
    document.querySelector("#ex1 .text").classList.toggle("hidden");
});




/* ------------------------------------ */
/* --- Exercice 2 --- */
setInterval (() => {
    document.querySelector("#ex2-scroll-value").innerHTML = scrollY
},100)

/* ------------------------------------ */
/* --- Exercice 3 --- */
document.querySelector("#ex3 .button").addEventListener("click", function(){
   let itemChange = document.querySelector("#ex3-animals").firstElementChild;
   document.querySelector("#ex3-animals").firstElementChild.remove();
   document.querySelector("#ex3-animals").appendChild(itemChange)
});

/* ------------------------------------ */
/* --- Exercice 4 --- */


let count = 0;
// Function for add class in css for change background-color on 3 times.
function toggleChangeColor(event) {
    if (count === 0) {
    this.classList.remove("button-green");
    this.classList.toggle("button-blue");
    count++;
}
else if (count === 1) {
    this.classList.remove("button-blue");
    this.classList.toggle("button-red");
    count++;
}
else {
    this.classList.remove("button-red");
    this.classList.toggle("button-green");
    count = 0;
}
}
    document.querySelector("#ex4 .button").addEventListener('click', toggleChangeColor);



/* ------------------------------------ */
/* --- Exercice 5 --- */
// Function for get random color 
function getRandomRgb (event) {
    let randomColor = [];
    for (let i = 0; i < 3; i++){
        randomColor[i] = Math.floor(Math.random() * (255 - 0)) ;
    }
    return `rgb(${randomColor.join(',')})`
}
console.log(getRandomRgb())


for (let i of document.querySelectorAll(".flex-list .button")) {
    console.log(i)
    i.addEventListener('mouseenter', function() {
        i.setAttribute("style",`background-color: ${getRandomRgb()};`);
})}

/* ------------------------------------ */
/* --- Exercice 6 --- */



/* ------------------------------------ */
/* --- Exercice 7 --- */

const taskList = [
    "🥖 Acheter du pain",
    "🗑️ Descendre la poubelle",
    "🐶 Sortir le chien",
    "🍽️ Faire la vaisselle",
    "🧹 Passer l'aspirateur",
    "🌳 Tondre la pelouse"
];


/* ------------------------------------ */
/* --- Exercice 8 --- */
