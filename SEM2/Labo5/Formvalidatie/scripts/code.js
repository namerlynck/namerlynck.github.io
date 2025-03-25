const setup = () => {
    let btnValideer = document.getElementById("btnValideer");
    btnValideer.addEventListener("click", validate);
}
const validate = () =>{
    validateFirstName();
    validateLastName();
    validateBirthDate();
    validateEmail();
    validateChildren();
}
const validateFirstName = () => {
    let input = document.getElementById("txtFirstName");
    let error = document.getElementById("errorFirstName");
    let txtinput = input.value.trim();
    if(txtinput.length > 30){
        input.classList.add("ongeldig");
        error.innerHTML = "(error : \"max. 30 karakters\")\n"
    } else {
        error.innerHTML = "";
    }
}

const validateLastName = () => {
    let input = document.getElementById("txtLastName");
    let error = document.getElementById("errorLastName");
    let txtInput = input.value.trim();
    if(txtInput.length === 0){
        input.classList.add("ongeldig");
        error.innerHTML = "Verplicht veld!"
    } else if (txtInput.length > 50){
        input.classList.add("ongeldig");
        error.innerHTML = "error : \"max 50 karakters\""
    } else {
        error.innerHTML = "";
    }
}

const validateBirthDate = () => {
    let input = document.getElementById("txtBirthdate");
    let error = document.getElementById("errorBirthdate");
    let txtInput = input.value.trim();

    if(txtInput.length === 0){
        input.classList.add("ongeldig");
        error.innerHTML = "Verplicht veld!";
    } else if (txtInput.indexOf("-") < 4 ||txtInput.indexOf("-") === null ){
        input.classList.add("ongeldig");
        error.innerHTML = "error : formaat is niet jjjj-mm-dd";
    } else {
        input.classList.remove("ongeldig");
       error.innerHTML = "";

    }
}

const validateEmail = () => {
    let input = document.getElementById("txtEmail");
    let error = document.getElementById("errorEmail");
    let txtInput = input.value.trim();
    let inputArray = txtInput.split("@");
    //console.log(inputArray);
    if(txtInput.length === 0){
        input.classList.add("ongeldig");
        error.innerHTML = "Verplicht veld!";
    } else if (inputArray.length > 2) {
        input.classList.add("ongeldig");
        error.innerHTML = "Een email aders heeft maar 1 @ teken"
    } else if (inputArray[0] === "" || inputArray[1] === "" || inputArray.indexOf("@") === -1
        || inputArray.indexOf("@") === 0 || inputArray.indexOf("@") === inputArray.length - 1){
        input.classList.add("ongeldig");
        error.innerHTML = "Ongeldig email adres";
    } else {
        input.classList.remove("");
        error.innerHTML = "";
    }

    //(emailArray[0] === "" || emailArray[1] === "" || email.indexOf("@") === -1
    // || email.indexOf("@") === 0 || email.indexOf("@") === email.length - 1)
}
const validateChildren = () => {
    let input = document.getElementById("txtChildren");
    let error = document.getElementById("errorChildren");
    let txtInput = input.value.trim();
    let getal = 1;
    getal = txtInput;
   //console.log(getal);

    if(isGetal(txtInput)){
        if(txtInput < 0){
            input.classList.add("ongeldig");
            error.innerHTML = "Is geen positief getal";
        } else if (getal > 99){
            input.classList.add("ongeldig");
            error.innerHTML = "Is te vruchtbaar";
        } else {
            input.classList.remove("ongeldig");
            error.innerHTML = "";
        }
    } else {
        input.classList.add("ongeldig");
        error.innerHTML = "Geef een getal in"
    }
}
const isGetal = (tekst) => {
    return !isNaN(tekst);
}
window.addEventListener("load", setup);