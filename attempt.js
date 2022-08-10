let figure = document.getElementById("square");
console.dir(figure);

let newWidth = prompt("Choose a width in pixels");
figure.style.width = `${newWidth}px`;

let newHeight = prompt("Choose a height in pixels");
figure.style.height = `${newHeight}px`;

let newColor = prompt("Choose color for a square");
figure.style.background = newColor;

let newColorBorder = prompt("Choose color for a border");
figure.style.borderColor = newColorBorder;

let newStyleBorder = prompt("Choose style for a border (inset, dashed solid, dotted,");
figure.style.borderStyle = newStyleBorder;