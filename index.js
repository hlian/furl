// Each character can be neatly fitted into six bits. (<64 elements)
//
// We are going to place the digits and symbols haphazardly to make
// the final output seem like an ID.
const alphabet = "a0b1c2d3e4f5g6h7i8j9k/lm-nopqrstuvwxyz"

// This is the Base-64 alphabet, which is also indexed by six bits!
// How convenient!
const table = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

const furl = (cleartext) => {
  return cleartext
    .split("")
    .map((char) => {
      return table.charAt(reverseAlphabetLookup(char))
    })
    .join("")
}

const unfurl = (ciphertext) => {
  return ciphertext
    .split("")
    .map((char) => {
      return alphabet.charAt(tableLookup(char))
    })
    .join("")
}

const chunksOf = (hay, size) => {
  return hay.match(/.{1,2}/g)
}

const tableLookup = (char) => {
  if (_table.size === 0) {
    let i = 0
    table
      .split("")
      .forEach((char) => {
        _table.set(char, i)
        i++
      })
  }
  return _table.get(char)
}

const _table = new Map();

const reverseAlphabetLookup = (char) => {
  if (_alphabet.size === 0) {
    let i = 0
    alphabet
      .split("")
      .forEach((char) => {
        _alphabet.set(char, i)
        i++
      })
  }
  return _alphabet.get(char)
}

const _alphabet = new Map();

module.exports = {
  furl: furl,
  unfurl: unfurl
}
