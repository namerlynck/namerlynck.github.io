const setup = () => {
    window.alert('Dit is een mededeling');

    let confirmResult = window.confirm("Weet u het zeker?");
    console.log("Confirm return value:", confirmResult);

    let putInPrompt = window.prompt("Wat is uw naam?", "onbekend");
    console.log("Confirm return value:", putInPrompt);
}
window.addEventListener("load", setup);