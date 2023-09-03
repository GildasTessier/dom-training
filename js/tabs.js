for (let ul of document.querySelectorAll("#tabs-links")) {
    ul.addEventListener("click", function (event) {
        for (let a of document.querySelector("#tabs-links").getElementsByClassName('active')) {
            if (event.target.classList.contains('active')) return;
            a.classList.remove('active');
            event.target.classList.add("active");
            document.querySelector(`#${a.getAttribute("data-tab")}`).classList.remove("active");
            document.querySelector(`#${event.target.getAttribute("data-tab")}`).classList.add("active");
    }
});
}

