import englishToMorse from "./englishToMorse.js";
import morseToEnglish from "./morseToEnglish.js";
import secretCode from "./secretCode.js";

const translateButton = document.getElementById("translateButton");
const input = document.getElementById("input");
const output = document.getElementById("output");
const errorbox = document.getElementById("errorbox");

translateButton.addEventListener("click", () => {
    errorbox.innerHTML = "";
    let inputValue = input.value;
    output.innerHTML = "";
    if (!inputValue) {
        errorbox.innerHTML = "Please enter some characters.";
    } else if (/[a-zA-Z!?,0-9]/.test(input.value)) {
        output.innerHTML = englishToMorse(inputValue);
    } else if (/[\.\-\/]/.test(input.value)) {
        output.innerHTML = morseToEnglish(input.value);
    } else {
        errorbox.innerHTML =
            "All of the characters you entered are currently unsupported.";
    }
});
