const setup = () => {
    trigram("onoorbaar")
}

const trigram = (zin) => {
    for (let i = 0 ; i < zin.length -2 ; i++) {
        console.log(zin.substring(i,i+3));
    }
}
window.addEventListener("load", setup);