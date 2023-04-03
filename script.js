const colorContainer = document.querySelector(".color_container");

const genColorElement = () => {
    const div = document.createElement("div");
    div.setAttribute("class", "color");
    colorContainer.appendChild(div);
}

let i = 0;
for(i; i<=505; i++){genColorElement();}

const colorArray = ["orange", "dodgerblue", "aqua", "slateblue", "aquamarine", "tomato", "maroon"];
const colors = document.querySelectorAll(".color");

colors.forEach((color, index) => {
    color.addEventListener("mouseover", () => {
        color.style.backgroundColor = colorArray[Math.floor(Math.random() * colorArray.length)];
    });
    
    color.addEventListener("mouseout", () => {
        setTimeout(() => {
            color.style.backgroundColor = "transparent";
        }, 1000);
    });
});
