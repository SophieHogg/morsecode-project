import morseToEnglish from "./morseToEnglish";
import reverseCode from "./reverseCode";

describe("Testing a function that turns morse code into English letters", () => {
    it("Should return a string", () => {
        expect(typeof morseToEnglish(".--", reverseCode)).toBe("string");
        expect(typeof morseToEnglish("- / -", reverseCode)).toBe("string");
        expect(typeof morseToEnglish("- / .-- -", reverseCode)).toBe("string");
    });
    it("Should return the correct string", () => {
        expect(morseToEnglish("-", reverseCode)).toBe("t");
        expect(morseToEnglish("-.. / ..", reverseCode)).toBe("d i");
        expect(morseToEnglish("--- .-. .- -. --. .", reverseCode)).toBe(
            "orange"
        );
    });
    it("Should work with spaces", () => {
        expect(
            morseToEnglish("--- .-. .- -. --. . / -... .-.. ..- .", reverseCode)
        ).toBe("orange blue");
        expect(
            morseToEnglish("... .--. .- -.-. . / - . ... -", reverseCode)
        ).toBe("space test");
    });
    it("Should ignore non-Morse characters", () => {
        expect(morseToEnglish("--- $", reverseCode)).toBe("o");
        expect(morseToEnglish("--- # .-- $ . ^", reverseCode)).toBe("owe");
        expect(morseToEnglish("--- .-# #.. .--", reverseCode)).toBe("ow");
    });
    it("Should correctly translate defined symbols", () => {
        expect(morseToEnglish("-.-.--", reverseCode)).toBe("!");
        expect(morseToEnglish(".... .. ..--..", reverseCode)).toBe("hi?");
        expect(
            morseToEnglish(" .... .. / .-... / -... -.-- .", reverseCode)
        ).toBe("hi & bye");
    });
    it("Should work with alternate morse spellings i.e. with | or _ instead of / and -", () => {
        expect(morseToEnglish("-._.-_", reverseCode)).toBe("!");
        expect(morseToEnglish("_... ._. ___ .__ _.", reverseCode)).toBe(
            "brown"
        );
        expect(morseToEnglish(" .... .. | .- .-.. ._..", reverseCode)).toBe(
            "hi all"
        );
        expect(morseToEnglish(".. | .. | ..", reverseCode)).toBe("i i i");
    });
});
