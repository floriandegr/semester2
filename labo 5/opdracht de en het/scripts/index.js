const setup = () => {


}
const update = (zin) => {
    zin = zin.toLowerCase();
    while(zin.indexOf("de")!=-1)
    {
        zin = zin.substring(0,zin.indexOf("de")) + "het" + zin.substring(zin.indexOf("de")+2);}
    console.log(zin);
}
update("Gisteren zat de jongen op de stoep en at de helft van de appel.")
window.addEventListener("load", setup);


