const setup = () => {
    window.alert('hoi');
    console.log(window.confirm("Weet u het zeker?"));
    console.log(window.prompt("Wat is uw naam", "onbekend"));
}
window.addEventListener("load", setup);
