const setup = () => {
    let image = document.getElementById('imgPhoto');
    image.addEventListener("mouseover", change);
}

const change = () => {
    let image = document.getElementById('imgPhoto');
    image.src = "./images/Tree.png";
}
window.addEventListener("load", setup);