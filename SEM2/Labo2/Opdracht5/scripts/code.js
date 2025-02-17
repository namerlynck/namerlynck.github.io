const setup = () => {
    document.getElementById("btnWelkom").addEventListener("click", changeText);

}
const changeText = () => {
    let pElement=document.getElementById("txtOutput");
    pElement.innerHTML= "Welkom!"
}
window.addEventListener("load", setup);