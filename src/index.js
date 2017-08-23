// Each character can be neatly fitted into six bits. (<64 elements)
//
// We are going to place the digits and symbols haphazardly to make
// the final output seem like an ID.
const forward = "a0b1c2d3e4f5g6h7i8j9k/lm-nopqrstuvwxyz"

// This is the Base-64 alphabet, which is also indexed by six bits.
// How convenient!
const backward = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/"

const furl = (cleartext) => {
  return cleartext
    .split("")
    .map((char) => {
      return backward.charAt(lookup(forward, _forwardTable, char))
    })
    .join("")
}

const unfurl = (ciphertext) => {
  return ciphertext
    .split("")
    .map((char) => {
      return forward.charAt(lookup(backward, _backwardTable, char))
    })
    .join("")
}

const lookup = (source, table, char) => {
  if (table.size === 0) {
    source
      .split("")
      .forEach((char, i) => {
        table.set(char, i)
      })
  }
  return table.get(char)
}

const _forwardTable = new Map();
const _backwardTable = new Map();

module.exports = {furl, unfurl}
