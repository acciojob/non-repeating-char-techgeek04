function firstNonRepeatedChar(str) {
    // Create a hash map to store character counts
    const charCount = {};
    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charCount[char]) {
            charCount[char]++;
        } else {
            charCount[char] = 1;
        }
    }
    for (let i = 0; i < str.length; i++) {
        if (charCount[str[i]] === 1) {
            return str[i];
        }
    }

    return null;
}

const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input));
