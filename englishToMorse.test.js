import englishToMorse from "./englishToMorse";
import secretCode from "./secretCode";

describe("testing a function that turns English into morse code", () => {
    it("Should return a string", () => {
        expect(typeof englishToMorse("orange", secretCode)).toBe("string");
        expect(typeof englishToMorse("purple", secretCode)).toBe("string");
        expect(typeof englishToMorse("a b c d e f", secretCode)).toBe("string");
    });
    it("Should return the correct string", () => {
        expect(englishToMorse("flow", secretCode)).toBe("..-. .-.. --- .--");
        expect(englishToMorse("tangerine", secretCode)).toBe(
            "- .- -. --. . .-. .. -. ."
        );
        expect(englishToMorse("abcdef", secretCode)).toBe(
            ".- -... -.-. -.. . ..-."
        );
    });
    it("Should work with spaces", () => {
        expect(englishToMorse("red orange yellow", secretCode)).toBe(
            ".-. . -.. / --- .-. .- -. --. . / -.-- . .-.. .-.. --- .--"
        );
        expect(englishToMorse("translate this", secretCode)).toBe(
            "- .-. .- -. ... .-.. .- - . / - .... .. ..."
        );
        expect(englishToMorse("we few", secretCode)).toBe(".-- . / ..-. . .--");
        expect(englishToMorse("me you i", secretCode)).toBe(
            "-- . / -.-- --- ..- / .."
        );
    });
    it("Should work with capital letters", () => {
        expect(englishToMorse("ReD bLuE", secretCode)).toBe(
            ".-. . -.. / -... .-.. ..- ."
        );
        expect(englishToMorse("flUoRO", secretCode)).toBe(
            "..-. .-.. ..- --- .-. ---"
        );
        expect(englishToMorse("OUCH", secretCode)).toBe("--- ..- -.-. ....");
    });
    it("Should work with defined symbols", () => {
        expect(englishToMorse("Hi!", secretCode)).toBe(".... .. -.-.--");
        expect(englishToMorse("how are you?", secretCode)).toBe(
            ".... --- .-- / .- .-. . / -.-- --- ..- ..--.."
        );
    });
    it("Should ignore undefined symbols", () => {
        expect(englishToMorse("Hi%", secretCode)).toBe(".... ..");
        expect(englishToMorse("#%$@ ouch!", secretCode)).toBe(
            "/ --- ..- -.-. .... -.-.--"
        );
    });
});
