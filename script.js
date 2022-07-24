//Defined Variables
const translateButton = document.getElementById("translateButton");
const input = document.getElementById("input");
const output = document.getElementById("output");
const errorbox = document.getElementById("errorbox");

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
    0: "-----",
    1: ".----",
    2: "..---",
    3: "...--",
    4: "....-",
    5: ".....",
    6: "-....",
    7: "--...",
    8: "---..",
    9: "----.",
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
    "/\n/": "/\n/",
};

//we have english to code, we want an object that does code to english

const reverseCode = Object.entries(secretCode).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

console.log(secretCode["abc".charAt(1)]);

let englishToMorseString = "";

function englishToMorse(text) {
    let lowercaseText = text.toLowerCase();
    for (let i = 0; i < text.length; i++) {
        if (/[a-zA-Z!?,0-9\,\.\/\s|]/.test(lowercaseText.charAt(i))) {
            englishToMorseString += " " + secretCode[lowercaseText.charAt(i)];
        } else {
            englishToMorseString = englishToMorseString;
            errorbox.innerHTML =
                "Some characters you have entered are currently not supported by the translator and have been ignored.";
        }
    }
    return englishToMorseString;
}

let morseToEnglishString = "";
let morseArray = [];

function morseToEnglish(text) {
    morseArray = text.split(" ");
    for (let i = 0; i < morseArray.length; i++) {
        if (/[\.\-_\/\s]/.test(morseArray[i])) {
            morseToEnglishString += reverseCode[morseArray[i]];
        } else {
            morseToEnglishString = morseToEnglishString;
            errorbox.innerHTML =
                "Some characters you have entered are currently not supported by the translator and have been ignored.";
        }
    }
    if (!morseToEnglishString) {
        morseToEnglishString =
            "Sorry, there's something wrong with your input.";
    }
    return morseToEnglishString;
}

translateButton.addEventListener("click", () => {
    errorbox.innerHTML = "";
    let inputValue = input.value;
    if (!inputValue) {
        errorbox.innerHTML = "Please enter some characters.";
    } else if (/[a-zA-Z!?,0-9]/.test(input.value)) {
        englishToMorseString = "";
        output.innerHTML = englishToMorse(input.value);
    } else if (/[\.\-\/]/.test(input.value)) {
        inputValue = inputValue.replace(" _", " -");
        morseToEnglishString = "";
        output.innerHTML = morseToEnglish(input.value);
    } else {
        errorbox.innerHTML =
            "One or more of the characters you entered are currently unsupported.";
    }
});
