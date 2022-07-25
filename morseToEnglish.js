import reverseCode from "./reverseCode.js";
import secretCode from "./secretCode.js";

function morseToEnglish(text) {
    let morseToEnglishString = "";
    let morseArray = text.split(" ");
    morseArray.forEach((element) => {
        if (Object.values(secretCode).includes(element)) {
            morseToEnglishString += reverseCode[element];
        } else {
            return "ERROR";
        }
    });
    return morseToEnglishString;
}

export default morseToEnglish;
