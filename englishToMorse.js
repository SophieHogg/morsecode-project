function englishToMorse(text, secretCode) {
    return text
        .toLowerCase()
        .split("")
        .map((char) => secretCode[char])
        .filter((char) => char)
        .join(" ");
}

export default englishToMorse;
