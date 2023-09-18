function disemvowel(str) {
    let newstr='';
    const vowel="aeiouAEIOU";
    for(let letter of str) {
        if (!vowel.includes(letter)) {
            newstr += letter;
        }
    }
    return newstr;
}
