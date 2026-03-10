function createInputs() {

let n = document.getElementById("subjects").value;
let container = document.getElementById("marksInput");

container.innerHTML = "";

for (let i = 1; i <= n; i++) {

container.innerHTML +=
"Subject " + i + " Marks: <input type='number' id='marks" + i + "'><br><br>";

}

}

function calculateResult(){

let n = document.getElementById("subjects").value;
let total = 0;

for(let i=1;i<=n;i++){

let marks = parseFloat(document.getElementById("marks"+i).value);

total += marks;

}

let average = total/n;

let grade;

if(average >= `13`)
grade = "A";

else if(average >= 10)
grade = "B";

else if(average >= 6)
grade = "C";

else
grade = "Fail";

document.getElementById("result").innerHTML =
"Total Marks: "+total+"<br>Average: "+average+"<br>Grade: "+grade;

}