const setup = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    console.log(zin);
    zin = replace();
    console.log(zin);
}
const replace = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let tekst =[];
    tekst = zin.split(" ")
    for(let i = 0; i < tekst.length; i++) {
        if(tekst[i] === "de") {
            tekst[i] = "het";
        }
    }
    let output = "";
    for(let i = 0; i < tekst.length; i++) {
        output += tekst[i] + " " ;
    }
    return output;
}
window.addEventListener("load", setup);