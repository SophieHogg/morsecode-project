import englishToMorse from "./englishToMorse";

describe("testing a function that turns English into morse code", () => {
    it("Should return a string", () => {
        expect(typeof englishToMorse("orange")).toBe("string");
        expect(typeof englishToMorse("purple")).toBe("string");
        expect(typeof englishToMorse("a b c d e f")).toBe("string");
    });
    it("Should return the correct string", () => {
        expect(englishToMorse("flow")).toBe("..-. .-.. --- .--");
        expect(englishToMorse("tangerine")).toBe("- .- -. --. . .-. .. -. .");
        expect(englishToMorse("abcdef")).toBe(".- -... -.-. -.. . ..-.");
    });
    it("Should work with spaces", () => {
        expect(englishToMorse("red orange yellow")).toBe(
            ".-. . -.. / --- .-. .- -. --. . / -.-- . .-.. .-.. --- .--"
        );
        expect(englishToMorse("translate this")).toBe(
            "- .-. .- -. ... .-.. .- - . / - .... .. ..."
        );
        expect(englishToMorse("we few")).toBe(".-- . / ..-. . .--");
        expect(englishToMorse("me you i")).toBe("-- . / -.-- --- ..- / ..");
    });
    it("Should work with capital letters", () => {
        expect(englishToMorse("ReD bLuE")).toBe(".-. . -.. / -... .-.. ..- .");
        expect(englishToMorse("flUoRO")).toBe("..-. .-.. ..- --- .-. ---");
        expect(englishToMorse("OUCH")).toBe("--- ..- -.-. ....");
    });
    it("Should work with defined symbols", () => {
        expect(englishToMorse("Hi!")).toBe(".... .. -.-.--");
        expect(englishToMorse("how are you?")).toBe(
            ".... --- .-- / .- .-. . / -.-- --- ..- ..--.."
        );
    });
    it("Should work ignore undefined symbols", () => {
        expect(englishToMorse("Hi%")).toBe(".... ..");
        expect(englishToMorse("#%$@ ouch!")).toBe("/ --- ..- -.-. .... -.-.--");
    });
});
