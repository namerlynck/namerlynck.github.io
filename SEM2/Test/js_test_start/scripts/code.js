const setup = () => {
    let input = document.getElementById("selBestelling");
    input.addEventListener("input", veranderAfbeeldingEnTekst);
    let inputLetter = document.getElementById("letter");
   aantalKeerLetterInZin();
}
const veranderAfbeeldingEnTekst = () => {
    let image = document.getElementById("img");
    let input = document.getElementById("selBestelling");
    let tekst = document.getElementById("note");


    //console.log(input.value);
    if(input.value === "Zonder een ei"){
        image.classList.remove("hidden");
        image.classList.remove("with-egg");
        tekst.textContent = "";
        tekst.append(document.createTextNode("Hierboven een kip zonder een ei"));
        //image.id = "img";
    } else {//if(input.value === "Met een ei"){
        image.classList.remove("hidden");
       // image.id = "img";
        image.classList.add("with-egg");
        tekst.textContent = "";
        tekst.append(document.createTextNode("Hierboven een kip met een ei"));
    }
   // image.classList.remove("hidden");
}
const aantalKeerLetterInZin = () => {
    let text = document.getElementById("letter");
    let result = document.getElementById("zin");
    let zin = document.getElementById("note");
    let inputTxt = text.value;
    let array = [];
    array = zin.value;
   // console.log(stringZin);
    let count = 0;
    for(let i = 0; i <array.length; i++){
        if(inputTxt.value === array[i]){
            count++;
        }
    }
    result.innerHTML = "Letter " + inputTxt + "komt " + count + "keer voor in bovenstaande zin."

}
window.addEventListener("load", setup);