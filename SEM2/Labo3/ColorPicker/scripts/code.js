const setup = () => {

    let sliders = document.getElementsByClassName("slider");

    // we moeten zowel op het input als het change event reageren,
    // zie http://stackoverflow.com/questions/18544890
    for(let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }
    update();

}
const update = () => {
    // let sliders = document.getElementsByClassName("slider");
    // let value=sliders[0].value;
    // console.log("de waarde van de slider is momenteel : "+value);
    let red = document.getElementById('sldRed').value;
    let green = document.getElementById('sldGreen').value;
    let blue = document.getElementById('sldBlue').value;
    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;
    let swatch = document.getElementById('swatch')
      swatch.style.backgroundColor="rgb(" + red + "," + green + "," + blue + ")";
}

window.addEventListener("load", setup);