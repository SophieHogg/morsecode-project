import morseToEnglish from "./morseToEnglish";

describe("Testing a function that turns morse code into English letters", () => {
    it("Should return a string", () => {
        expect(typeof morseToEnglish(".--")).toBe("string");
        expect(typeof morseToEnglish("- / -")).toBe("string");
        expect(typeof morseToEnglish("- / .-- -")).toBe("string");
    });
    it("Should return the correct string", () => {
        expect(morseToEnglish("-")).toBe("t");
        expect(morseToEnglish("-.. / ..")).toBe("d i");
        expect(morseToEnglish("--- .-. .- -. --. .")).toBe("orange");
    });
    it("Should work with spaces", () => {
        expect(morseToEnglish("--- .-. .- -. --. . / -... .-.. ..- .")).toBe(
            "orange blue"
        );
        expect(morseToEnglish("... .--. .- -.-. . / - . ... -")).toBe(
            "space test"
        );
    });
    it("Should ignore non-Morse characters", () => {
        expect(morseToEnglish("--- $")).toBe("o");
        expect(morseToEnglish("--- # .-- $ . ^")).toBe("owe");
        expect(morseToEnglish("--- .-# #.. .--")).toBe("ow");
    });
    it("Should correctly translate defined symbols", () => {
        expect(morseToEnglish("-.-.--")).toBe("!");
        expect(morseToEnglish(".... .. ..--..")).toBe("hi?");
        expect(morseToEnglish(" .... .. / .-... / -... -.-- .")).toBe(
            "hi & bye"
        );
    });
    it("Should work with alternate morse spellings i.e. with | or _ instead of / and -", () => {
        expect(morseToEnglish("-._.-_")).toBe("!");
        expect(morseToEnglish("_... ._. ___ .__ _.")).toBe("brown");
        expect(morseToEnglish(" .... .. | .- .-.. ._..")).toBe("hi all");
        expect(morseToEnglish(".. | .. | ..")).toBe("i i i");
    });
});
