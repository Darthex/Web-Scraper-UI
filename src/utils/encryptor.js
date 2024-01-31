export function encrypt(message, key) {
    let encryptedMessage = "";

    for (let i = 0; i < message?.length; i++) {
        let char = message.charAt(i);

        if (char.match(/[a-zA-Z]/)) {
            // Shift the character by the key value
            let isLowerCase = char === char.toLowerCase();
            let baseCharCode = isLowerCase ? 'a'.charCodeAt(0) : 'A'.charCodeAt(0);
            let encryptedChar = String.fromCharCode((char.charCodeAt(0) - baseCharCode + key + 26) % 26 + baseCharCode);
            encryptedMessage += encryptedChar;
        } else {
            // Leave non-alphabetic characters unchanged
            encryptedMessage += char;
        }
    }

    return encryptedMessage;
}

export function decrypt(encryptedMessage, key) {
    // Decryption is the same as encryption, just with a negative key
    return encrypt(encryptedMessage, -key);
}
