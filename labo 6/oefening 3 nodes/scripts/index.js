const setup = () => {
    let p = document.querySelector('p');
    p.addEventListener('click',add)
}
const add = () => {
    let p = event.target;
    console.log("yoehoe");
    let div =document.getElementById("myDIV")
    div.appendChild(p);
    event.stopPropagation();
}
window.addEventListener("load", setup);
