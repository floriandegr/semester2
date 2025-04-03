const setup = () => {
    let vandaag = new Date();
    let geboortedag = new Date(2005,3,14);
    let age = (vandaag -geboortedag) / (1000*60*60 *24);
    console.log(age);
}
window.addEventListener("load", setup);
