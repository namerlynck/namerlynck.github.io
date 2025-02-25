const setup = () => {
    let btnTry = document.getElementById("btnTry");
    // Event-based programming
    btnTry.addEventListener("mouseover", mouseHover);
    btnTry.addEventListener("click", onClick);
    btnTry.addEventListener("mouseout", mouseOut);

    document.getElementById("btnWithoutBullets").addEventListener("click", withoutBullets);
    document.getElementById("btnWithBullets").addEventListener("click", withBullets);
    document.getElementById("btnContent").addEventListener("click", changeContent);
}
const changeContent = () => {
    document.getElementById("innerHTML")
        .innerHTML = "<a href = https://www.vives.be>VIVES</a>";
    document.getElementById("textContent")
        .innerHTML = "<a href = https://www.vives.be>VIVES</a>";
}
// mouseHoverFunction
const mouseHover = () => {
    document.getElementById("event").innerHTML += "Mouse Hovered!<br>";
}

// onClickFunction
const onClick = () => {
    document.getElementById("event").innerHTML += "Mouse Clicked!<br>";
}

// mouseOutFunction

const mouseOut = () => {
    document.getElementById("event").innerHTML += "Mouse Out!<br>";

}
// eventListeners CSS
const withoutBullets = () => {
   let listItems =
       document.getElementsByTagName("li")
    for(let i = 0; i < listItems.length; i++) {
        listItems[i].style.listStyleType = "none";
        listItems[i].style.backgroundColor ="red";
    }
}
const withBullets = () => {
    let listItems =
        document.getElementsByTagName("li")
    for(let i = 0; i < listItems.length; i++) {
        listItems[i].style.listStyleType = "disc";
        listItems[i].style.backgroundColor ="white";
    }
}

const withoutBullets2 = () => {
    let listItems =
        document.getElementsByTagName("li")
    for(let i = 0; i < listItems.length; i++) {
        listItems[i].className = "listItemsStyleNone colorRed"
    }
}
const withBullets2 = () => {
    let listItems =
        document.getElementsByTagName("li")
    for(let i = 0; i < listItems.length; i++) {
        listItems[i].className = "listItemsStyleDisc colorWhite"
    }
}
const withOutBullets3 = () =>{
    let listItems =
        document.getElementsByTagName("li")
    for(let i = 0; i < listItems.length; i++) {
        listItems[i].classList.remove("listItemsStyleDisc");
        listItems[i].classList.remove("colorWhite");
        listItems[i].classList.add("listItemsStyleNone");
        listItems[i].classList.add("colorRed");
        console.log("output " + listItems[i].innerHTML);
    }
}
const withBullets3 = () =>{
    let listItems =
        document.getElementsByTagName("li")
    for(let i = 0; i < listItems.length; i++) {

        listItems[i].classList.add("listItemsStyleDisc");
        listItems[i].classList.add("colorWhite");
    }
}

window.addEventListener("load", setup);