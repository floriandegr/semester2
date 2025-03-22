const setup = () => {
    let lis =document.querySelectorAll("li");
    for (let li of lis) {
        li.classList.add("listitem");
    }
    const style = document.createElement("style");
    style.textContent = "listitem { color: red; }";
    document.head.appendChild(style);
    let pic = document.createElement("img");
    pic.setAttribute("src", "../../images/GigaChad.jpg");
    document.body.appendChild(pic);
}
window.addEventListener("load", setup);
