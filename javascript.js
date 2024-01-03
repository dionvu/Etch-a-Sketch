let box = document.getElementById("box"); 
let color = "red";
let arr = [];
for (let i = 0; i < 16; i++) {
  arr[i] = [];
  for (let j = 0; j < 16; j++) {
    arr[i][j] = null; 
    }
}

for(let r = 0; r < 16; r++) {
    let row = document.createElement("div");
    row.classList.add("row");
    for(let c = 0; c < 16; c++) {
        let square = document.createElement("div"); 
        square.classList.add("square");
        row.appendChild(square);
        arr[r][c] = square;
    }
    box.appendChild(row);
}


for (let i = 0; i < 16; i++) {
  for (let j = 0; j < 16; j++) {
        console.log(arr[i][j]);
        arr[i][j].addEventListener("mouseover", (e) => {
            e.target.style.background = color; 
        });
    }
}
