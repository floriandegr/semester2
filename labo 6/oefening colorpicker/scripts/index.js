const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    let button = document.getElementById("save");
    sliders[0].addEventListener("change", update);
    sliders[1].addEventListener("change", update);
    sliders[2].addEventListener("change", update);
    sliders[0].addEventListener("input", update);
    sliders[1].addEventListener("input", update);
    sliders[2].addEventListener("input", update);
    button.addEventListener("click", save);


}
const update = () => {
    let sliders = document.getElementsByClassName("slider");
    for (let i = 0; i < sliders.length; i++) {
        console.log(sliders[i].value);
        document.getElementById(sliders[i].className.substring(7)).innerHTML = sliders[i].value;
    }

    let r = document.getElementById("r").innerText.valueOf();
    let g = document.getElementById("g").innerText.valueOf();
    let b = document.getElementById("b").innerText.valueOf();
    r = parseInt(r, 10);
    g = parseInt(g, 10);
    b = parseInt(b, 10);
    document.getElementById("block").style.backgroundColor= `rgb(${r}, ${g}, ${b})`;
}

const save = () => {
    let color = document.getElementById("block").style.backgroundColor;
    let block = document.createElement("div");
    let body = document.getElementsByTagName("body")[0];
    block.classList.add("color");
    block.classList.add("saved");
    block.style.backgroundColor = color;
    let cross = document.createElement("input");
    cross.setAttribute("type", "button");
    cross.setAttribute("value", "x");
    cross.classList.add("cross");
    block.appendChild(cross);
    body.appendChild(block);

    cross.addEventListener("click", remove)
    block.addEventListener("click", placeColor);
}
const remove = () => {
    event.target.parentNode.remove();
    event.stopPropagation()
}
const placeColor = () => {
    document.getElementById("block").style.backgroundColor= event.target.style.backgroundColor;
   event.stopPropagation();

}
window.addEventListener("load", setup);