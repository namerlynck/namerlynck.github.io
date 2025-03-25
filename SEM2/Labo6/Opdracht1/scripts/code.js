const setup = () => {
    let par = document.querySelectorAll("p")[0];
    y = par.childNodes[0];
    par.removeChild(y);
    let txtNode = document.createTextNode("Good Job");
    par.appendChild(txtNode);
}
window.addEventListener("load", setup);