//Defined Variables
const translateButton = document.getElementById("translateButton");
const input = document.getElementById("input");
const output = document.getElementById("output");

const secretCode = {
    a: ".-",
    b: "-...",
    c: "-.-.",
    d: "-..",
    e: ".",
    f: "..-.",
    g: "--.",
    h: "....",
    i: "..",
    j: ".---",
    k: "-.-",
    l: ".-..",
    m: "--",
    n: "-.",
    o: "---",
    p: ".--.",
    q: "--.-",
    r: ".-.",
    s: "...",
    t: "-",
    u: "..-",
    v: "...-",
    w: ".--",
    x: "-..-",
    y: "-.--",
    z: "--..",
    " ": "/",
    "!": "-.-.--",
    "?": "..--..",
    ",": "--..--",
    ".": ".-.-.-",
    "&": ".-...",
    "/": "-..-.",
    "(": "-.--.",
    ")": "-.--.-",
    "'": ".----.",
};

//we have english to code, we want an object that does code to english

const reverseCode = Object.entries(secretCode).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {}); //defines what the acc is to start with (here, an empty object)

let englishToMorseString = "";
let englishArray = [];
function englishToMorse(text) {
    englishArray = text.split("");
    englishArray.forEach(
        (letter) => (englishToMorseString += " " + secretCode[letter])
    );
    if (!englishToMorseString) {
        englishToMorseString =
            "Sorry, there's something wrong with your input.";
    }
    return englishToMorseString;
}

let morseToEnglishString = "";
let morseArray = [];

function morseToEnglish(text) {
    morseArray = text.split(" ");
    morseArray.forEach(
        (letter) => (morseToEnglishString += reverseCode[letter])
    );
    if (!morseToEnglishString) {
        morseToEnglishString =
            "Sorry, there's something wrong with your input.";
    }
    return morseToEnglishString;
}

translateButton.addEventListener("click", () => {
    if (/[a-zA-Z!?,.]/.test(input.value)) {
        englishToMorseString = "";
        output.innerHTML = englishToMorse(input.value);
    } else if (/[\.\-\_\/\|]/.test(input.value)) {
        morseToEnglishString = "";
        output.innerHTML = morseToEnglish(input.value);
    } else {
        output.innerHTML = "Sorry, this character is unsupported.";
    }
});
