const setup = () => {
    let familieNamen = ['jan','maximilanius','little','mr.gay','Juan']
    console.log(familieNamen[0])
    console.log(familieNamen[2])
    console.log(familieNamen[4])
    VoegNaamToe(window.prompt(),familieNamen);

}
window.addEventListener("load", setup);
const VoegNaamToe =(naam,familieNamen) =>
{
    familieNamen.push(naam);
    console.log(familieNamen.toString())
}