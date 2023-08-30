/* ------------------------------------ */
/* --- Exercice 1 --- */

document.querySelector("#ex1 .button").addEventListener("click", () => {
    document.querySelector("#ex1 .text").classList.toggle("hidden");
});




/* ------------------------------------ */
/* --- Exercice 2 --- */
const timer = setInterval (() => {
    document.querySelector("#ex2-scroll-value").innerHTML = (scrollY)
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


/* ------------------------------------ */
/* --- Exercice 5 --- */


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
