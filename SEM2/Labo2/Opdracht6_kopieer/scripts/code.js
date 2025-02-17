const setup = () => {
    let btnKopieer = document.getElementById("btnKopieer");
    btnKopieer.addEventListener("click", kopieer);
}
const kopieer = () => {
    let txtInput = document.getElementById("txtInput");
    let output = document.getElementById("txtOutput");
    let tekst = txtInput.value;
    output.innerText = tekst;
    console.log(tekst);
}
window.addEventListener("load", setup);