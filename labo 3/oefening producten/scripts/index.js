const setup = () => {


}
window.addEventListener("load", setup);

const update = () => {
    let aprijs = document.getElementsByClassName("prijs");
    let aaantal = document.getElementsByClassName("aantal");
    let abtw = document.getElementsByClassName("btw");
    let subtotaal = document.getElementsByClassName("subtotaal")
    let totaal = document.getElementsByClassName("totaal");
    let currentTotaal = 0
    for (let i = 0; i < 3; i++) {
        let prijs = Number.parseFloat(aprijs[i].innerHTML);
        let aantal = aaantal[i].value;
        let btw = Number.parseFloat(abtw[i].innerHTML);
        let subtotaaln = aantal*prijs*((btw/100)+1);
        subtotaal[i].innerHTML = subtotaaln + " Eur";
        currentTotaal = currentTotaal + subtotaaln;
        totaal[0].innerHTML = currentTotaal + "Eur";
    }


}