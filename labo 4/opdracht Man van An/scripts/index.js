const setup = () => {
    let button1=document.getElementById("metIndexOf");
    let button2=document.getElementById("metLastIndexOf");
    button1.addEventListener("click", metIndexOf);
    button2.addEventListener("click", metLastIndexOf);
}
const metIndexOf = () => {
    let zin=document.getElementById("zin");
    zin = zin.innerHTML.toLowerCase();
    let aantalAn = 0;
    while(zin.indexOf("an")!=-1){
            aantalAn+=1;
            zin = zin.substring(zin.indexOf("an")+1);
    }
    document.getElementById("aantalAn").innerHTML=aantalAn;
}
const metLastIndexOf = () => {
    let zin=document.getElementById("zin");
    zin = zin.innerHTML.toLowerCase();
    let aantalAn = 0;
    while(zin.indexOf("an")!=-1){
        aantalAn+=1;
        zin = zin.substring(0,zin.lastIndexOf("an")-1);
    }
    document.getElementById("aantalAn").innerHTML=aantalAn;
}

window.addEventListener("load", setup);
