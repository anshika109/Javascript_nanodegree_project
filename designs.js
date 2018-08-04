//select color input 
//select size input
//when size is submitted by user ,call makeGrid()



let row = document.getElementById("inputHeight");

let col= document.getElementById("inputWeight");

let pixel = document.getElementById("pixelCanvas");


document.getElementById("sizePicker").onsubmit = function(event) {
    event.preventDefault();
    remakeGrid();
    makeGrid();

};



function makeGrid() {
     
    for (var i = 0; i < row.value; i++) {
    
        const r = pixel.insertRow(i);
        for (var j = 0; j < col.value; j++) {
            
            const c = r.insertCell(j);
            c.addEventListener("click", click_color);
        }
    }
} 
function click_color() {
   
    this.setAttribute("style", `background-color: ${document.getElementById("colorPicker").value}`);
}



function remakeGrid() {
    
    while (pixel.firstChild) {
        pixel.removeChild(pixel.firstChild);
    }
}

