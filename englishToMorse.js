import secretCode from "./secretCode.js";

function englishToMorse(text) {
    let englishToMorseString = "";
    let lowercaseText = text.toLowerCase();
    for (let i = 0; i < text.length; i++) {
        if (Object.keys(secretCode).includes(lowercaseText.charAt(i))) {
            englishToMorseString += " " + secretCode[lowercaseText.charAt(i)];
        }
    }
    return englishToMorseString.trim();
}

export default englishToMorse;
