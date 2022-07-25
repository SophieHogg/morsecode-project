import secretCode from "./secretCode.js";

const reverseCode = Object.entries(secretCode).reduce((acc, [key, value]) => {
    acc[value] = key;
    return acc;
}, {});

export default reverseCode;
