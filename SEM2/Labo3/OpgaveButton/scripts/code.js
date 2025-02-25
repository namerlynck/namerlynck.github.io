const setup = () => {
    let buttons =
        document.getElementsByClassName("btn");
    for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", (e) => {
            buttons[i].classList.toggle("active");
        })
    }
}
window.addEventListener("load", setup);