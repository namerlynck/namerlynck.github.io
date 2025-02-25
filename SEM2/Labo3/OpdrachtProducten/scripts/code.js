const setup = () => {
    console.log('setup')
    let products = document.getElementsByClassName("aantalProd");
    for(let i=0; i<products.length; i++) {
        products[i].addEventListener("input", update);
        products[i].addEventListener("change", update);
    }
    subtotaal();
    update();
}
const update = () => {
    // let txtbtws = document.getElementsByClassName("btw");
    // for(let i=0; i<txtbtws.length; i++) {
    //     txtbtws[i].innerHTML = txtbtws[i].value;
    // }
    let aantalProducts = document.getElementsByClassName("aantalProducts");
    for(let i = 0; i < aantalProducts.length; i++) {
        aantalProducts[i].innerHTML = aantalProducts[i].value;
    }
    // let red = document.getElementById('sldRed').value;
    // let green = document.getElementById('sldGreen').value;
    // let blue = document.getElementById('sldBlue').value;
    // document.getElementById("lblRed").innerHTML = red;
    // document.getElementById("lblGreen").innerHTML = green;
    // document.getElementById("lblBlue").innerHTML = blue;
    // let swatch = document.getElementById('swatch')
    // swatch.style.backgroundColor="rgb(" + red + "," + green + "," + blue + ")";
}
const subtotaal = () => {
    let btw = document.getElementsByClassName("btw");
    let prijs = document.getElementsByClassName("prijs");
    let subtotaal = document.getElementsByClassName("subtotaal");
    for(let i = 0; i < subtotaal.length; i++){
         subtotaal[i].value = parseInt(prijs[i].value, 10) * (1 - parseInt(btw[i].value, 10) / 100);
    }
}
window.addEventListener("load", setup);