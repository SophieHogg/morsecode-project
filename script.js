import englishToMorse from "./englishToMorse.js";
import morseToEnglish from "./morseToEnglish.js";
import reverseCode from "./reverseCode.js";
import secretCode from "./secretCode.js";

const translateButton = document.getElementById("translateButton");
const input = document.getElementById("input");
const output = document.getElementById("output");
const errorbox = document.getElementById("errorbox");

input.addEventListener("input", () => {
    errorbox.innerHTML = "";
    let inputValue = input.value;
    let ignoredLetters =
        "Sorry, some of your characters are unsupported and have been ignored.";
    output.value = "";
    if (!inputValue) {
        errorbox.innerHTML = "Please enter some characters.";
    } else if (/[a-zA-Z!?,0-9()'"&]/.test(inputValue)) {
        output.value = englishToMorse(inputValue, secretCode);
        if (
            inputValue.split("").length >
            englishToMorse(inputValue, secretCode).split(" ").length
        ) {
            errorbox.innerHTML = ignoredLetters;
        }
    } else if (/[|\_\.\-\/]/.test(inputValue)) {
        output.value = morseToEnglish(inputValue, reverseCode);
        if (
            inputValue.trim().split(" ").length >
            morseToEnglish(inputValue, reverseCode).length
        ) {
            errorbox.innerHTML = ignoredLetters;
        }
    } else {
        errorbox.innerHTML =
            "All of the characters you entered are currently unsupported.";
    }
});

function init() {
    input.value = "";
    output.value = "";
}
window.onload = init;
