
for (let i of document.querySelectorAll("#gallery-thumbs li")) {
    i.addEventListener('mouseover', function (){
        document.querySelector("#gallery-picture").setAttribute("src", i.firstChild.getAttribute("src"));
        document.querySelector("#gallery-title").innerHTML = (i.firstChild.getAttribute("data-title"));
        document.querySelector("#gallery-description").innerHTML = (i.firstChild.getAttribute("data-description"));
    })
}
