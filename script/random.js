const divElem = document.getElementById("divID");
function randomcolor() {
    return Math.floor(Math.random() * 255);
}
divElem.addEventListener('click', () => {
    divElem.style.backgroundColor =
        "rgba(" + randomcolor() + "," + randomcolor() + "," + randomcolor() + ",1)";
});

