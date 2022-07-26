function morseToEnglish(text, secretCode) {
    text = text.replace(/_/g, "-");
    text = text.replace(/\|/g, "/");
    text = text.replace(/\/\//g, "/ /");
    return text
        .split(" ")
        .map((char) => secretCode[char])
        .filter((char) => char)
        .join("");
}

export default morseToEnglish;
