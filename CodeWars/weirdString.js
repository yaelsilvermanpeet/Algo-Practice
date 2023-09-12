function toWeirdCase(string) {
    string = string.split(' ').map(word => {
        let weirdString = '';
        for (let i = 0; i < word.length; i++) {
            weirdString += (i % 2 === 0) ? word[i].toUpperCase() : word[i].toLowerCase();
        }
        return weirdString;
    }).join(' ');

    return string;
}


module.exports = toWeirdCase;