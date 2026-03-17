let mainHeading = document.getElementById("mainHeading");
let userinput = document.getElementById("userinput");
let demoParagraph = document.getElementById("demoParagraph");
function changeBackground() {
    const colors = ["red", "blue", "green", "yellow", "pink"];
    let random = colors[Math.floor(Math.random() * colors.length)];
    document.body.style.backgroundColor = random;
}
function resetBackground() {
    document.body.style.backgroundColor = "white";
}
function increaseFont() {
    let currentSize = window.getComputedStyle(demoParagraph).fontSize;
    let newSize = parseInt(currentSize) + 2; // increase by 2px
    demoParagraph.style.fontSize = newSize + "px";
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