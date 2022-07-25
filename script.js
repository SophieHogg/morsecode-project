import englishToMorse from "./englishToMorse.js";
import morseToEnglish from "./morseToEnglish.js";

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
    if (
        inputValue.trim().split(" ").length >
            morseToEnglish(inputValue).length &&
        inputValue.split("").length >
            englishToMorse(inputValue).split(" ").length
    ) {
        errorbox.innerHTML =
            "Sorry, some of your characters are unsupported and have been ignored.";
    }
});
