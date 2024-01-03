let box = document.getElementById("box"); 
let color = "red";
let spaces = 100; 
let colors = ["red", "orange", "yellow", "green", "blue", "purple"];

spaces = prompt("How many spaces do you want? (0 - 100)");

let arr = [];
for (let i = 0; i < spaces; i++) {
  arr[i] = [];
  for (let j = 0; j < spaces; j++) {
    arr[i][j] = null; 
    }
}

for(let r = 0; r < spaces; r++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for(let c = 0; c < spaces; c++) {
        let square = document.createElement("div"); 
        square.classList.add("square");
        row.appendChild(square);
        arr[r][c] = square;
    }
    box.appendChild(row);
}


for (let i = 0; i < spaces; i++) {
  for (let j = 0; j < spaces; j++) {
        console.log(arr[i][j]);
        arr[i][j].addEventListener("mouseover", (e) => {
            e.target.style.background = color; 
        });
    }
}

for (let i = 0; i < colors.length; i++) {
    let current = document.getElementById(colors[i]);
    current.style.background = colors[i];
    current.style.border = "0px";
    current.addEventListener("click", () => {
        color = colors[i];
    });
}
