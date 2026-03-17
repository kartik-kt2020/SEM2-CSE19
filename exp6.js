let mainHeading = document.getElementById("mainHeading");
let userinput = document.getElementById("userinput");
let demoParagraph = document.getElementById("demoParagraph");
function changeBackground() {
    document.body.style.backgroundColor = "red";
     document.body.style.backgroundColor = "green";
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
userinput.addEventListener("input", function() {
    mainHeading.textContent = userinput.value;
});
function resetpage() {
    mainHeading.textContent = "Welcome To JAVA SCRIPT";
    userinput.value = "";
    resetBackground();
    demoParagraph.style.fontSize = "16px";
    demoParagraph.style.display = "block";
}