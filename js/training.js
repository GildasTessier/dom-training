/* ------------------------------------ */
/* --- Exercice 1 --- */

document.querySelector("#ex1 .button").addEventListener("click", () => {
    document.querySelector("#ex1 .text").classList.toggle("hidden");
});




/* ------------------------------------ */
/* --- Exercice 2 --- */
// setInterval (() => {
//     document.querySelector("#ex2-scroll-value").innerHTML = scrollY;
// },100)
window.addEventListener('scroll', () => {
    document.querySelector("#ex2-scroll-value").innerText = (window.scrollY);
    console.log('coucou')
})

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

for (let i of document.querySelectorAll(".flex-list .button")) {
    i.addEventListener('mouseenter', function() {
        i.setAttribute("style",`background-color: ${getRandomRgb()};`);
})}

/* ------------------------------------ */
/* --- Exercice 6 --- */
textEx6 = document.querySelector("#ex6-paragraph").innerHTML;
//Function for animate text 
function animateTexte(i) {
    setTimeout(function() {
        document.querySelector("#ex6-paragraph").innerHTML = textEx6.substr(0, i);
    }, 2 * i);
}
for (let i=0; i<textEx6.length; i++) {
    animateTexte(i);
 }


// console.log(document.querySelector("#ex6-paragraph").innerHTML.length)
// document.querySelector("#ex6-paragraph").charAt(2).classList.toggle("hidden");

// for (let i = 0; i < document.querySelector("#ex6-paragraph").innerHTML.length; i++) {
//     document.querySelector("#ex6-paragraph").innerHTML.charAt(i).classList.remove("hidden")
// }



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

document.querySelector("#ex7-button").addEventListener("click", () => {
    if (taskList.length > 0) {
    let newSection = document.createElement("li");
    newSection.classList.toggle("task-list-task");
    newSection.innerHTML = taskList[0];
    taskList.shift()
    document.querySelector("#ex7-list").appendChild(newSection);
    }

});
document.querySelector(".li").addEventListener("click", function (event){
    console.log(coucou)
})
;
function coucou (event) {
    console.log(coucou);
}

/* ------------------------------------ */
/* --- Exercice 8 --- */
