function generateRandomPassword (includeNumbers=false, includeLetters=false, includeSymbols=false, length=1) {
    const numbers = '1234567890';
    const letters = 'abcdefghijklmnopqrstuvwxyz';
    const symbols = '!@#$%^&*()';
    let validChars = '';
    let password = '';

    if (includeLetters) {
        validChars += letters;
    }
    if (includeNumbers) {
        validChars += numbers;
    }
    if (includeSymbols) {
        validChars += symbols;
    }

    for(let i = 0; i < length; i++) {
        password += validChars[Math.floor(Math.random() * validChars.length)];
    }
    return password;
}

export default generateRandomPassword;
