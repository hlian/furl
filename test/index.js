const {furl, unfurl} = require("../src")
const assert = require("assert")

console.log(furl, unfurl)

describe("uh", () => {
  it("should roundtrip", () => {
    const t = (x) => assert.equal(x, unfurl(furl(x)))
    t("")
    t("a")
    t("abc")
    t("/api/people/1")
  })
  it("should look nice", () => {
    console.warn(">> make sure this looks nice, human:", furl("/api/people/1"))
  })
})
