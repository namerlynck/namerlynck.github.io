const setup = () => {
    let btnSubstring = document.getElementById('btnSubString');
    btnSubstring.addEventListener("click", substring);
}
const substring =() => {
    let txtInput = document.getElementById('txtInput');
    let output = document.getElementById('txtOutput');
    let firstNumber = document.getElementById('firstNumber');
    let secondNumber = document.getElementById('secondNumber');
    let tekst = txtInput.value;
    let first = parseInt(firstNumber.value);
    let second = parseInt(secondNumber.value);
    let result = tekst.substring(first,second);
    output.innerText = result;
    console.log(result);
}

window.addEventListener("load", setup);