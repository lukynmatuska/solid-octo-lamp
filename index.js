const ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

function encode(word) {
    let password = ALPHABET
    for (const letter of word) {
        password = password.replace(letter.toUpperCase(), '')
    }
    return `${word.toUpperCase()}${password.toUpperCase()}`
}

console.log(encode('heslo'))
console.log('HESLOABCDFGIJKMNPQRTUVWXYZ')

console.log(encode('DOBRERANOZUZKO'))
console.log('LMEQOQHKMZUZGM')