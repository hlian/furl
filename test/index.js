const {furl, unfurl} = require("..")
const assert = require("assert")

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
