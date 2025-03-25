const setup = () => {
    let input = document.getElementById("selBestelling");
    input.addEventListener("input", veranderAfbeelding);
    let inputLetter = document.getElementById("letter");
   aantalKeerLetterInZin();
}
const veranderAfbeelding = () => {
    let image = document.getElementById("img");
    let input = document.getElementById("selBestelling");
    //console.log(input.value);
    if(input.value === "Zonder een ei"){
        image.classList.remove("hidden");
        image.classList.remove("with-egg");
        //image.id = "img";
    } else if(input.value === "Met een ei"){
        image.classList.remove("hidden");
       // image.id = "img";
        image.classList.add("with-egg");
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