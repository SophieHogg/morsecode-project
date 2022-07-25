import reverseCode from "./reverseCode.js";

function morseToEnglish(text) {
    let morseToEnglishString = "";
    text = text.replace(/_/g, "-");
    text = text.replace(/\|/g, "/");
    text = text.replace(/\/\//g, "/ /");
    let morseArray = text.split(" ");
    morseArray.forEach((element) => {
        if (Object.keys(reverseCode).includes(element)) {
            morseToEnglishString += reverseCode[element];
        }
    });
    return morseToEnglishString;
}

export default morseToEnglish;
