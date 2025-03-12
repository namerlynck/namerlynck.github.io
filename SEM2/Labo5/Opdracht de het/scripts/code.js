const setup = () => {
    let zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";

    console.log(zin);

    let deToHet = zin.replaceAll('de', 'het');

    console.log(deToHet);
}
window.addEventListener("load", setup);