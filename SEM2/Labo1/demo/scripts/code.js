const setup = () => {

    let lblCursus = document.getElementById("lblCursus");
    lblCursus.addEventListener("mouseover", change);
    // lblCursus.className = "cursus";
    let btnSend = document.getElementById("btnSend");
    btnSend.addEventListener("click", show);
}

const change = () => {
    let lblCursus = document.getElementById("lblCursus");
    lblCursus.className = "cursus";
}

const show = () => {
    console.log("show");
    let txtName = document.getElementById("txtName");
    // !== strikte vergelijking en != vergelijkt twee waarden zonder rekening te houden met hun type
    if (txtName.value !== "") {
        alert("jouw naam is " + txtName.value);
        console.log("jouw naam is " + txtName.value);
        console.log(`jouw naam is ${txtName.value}`);
    }
    else{
        alert("gelieve jouw naam in te vullen");
    }
}


window.addEventListener("load", setup);