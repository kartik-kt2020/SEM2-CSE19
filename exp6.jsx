let mainHeading = document.getElementById("mainHeading");
let userinput = document.getElementById("userinput");
let demoParagraph = document.getElementById("demoParagraph");
function changeBackground() {
    document.body.style.backgroundColor = "lightblue";
}
function resetBackground() {
    document.body.style.backgroundColor = "white";
}
function increaseFont() {
    demoParagraph.style.fontSize = "20px";
}
function showHideParagraph() {
    if (demoParagraph.style.display === "none") {
        demoParagraph.style.display = "block";
    } else {
        demoParagraph.style.display = "none";
    }
}