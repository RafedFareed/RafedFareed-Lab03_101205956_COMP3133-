var expect = require("chai").expect
var converter = require("../app/calculator.js")

console.log("-------------------------------------------------------------------------------")

//add method start ----------------------------------
describe("add(2, 2)", () => {
    it("testing add method", () => {
        var result = converter.add(2, 2)

        expect(result).to.equal(4)
    })
})
describe("add(2, 2)", () => {
    it("testing add method", () => {
        var result = converter.add(2, 2)

        expect(result).to.equal(5)
    })
})
//add method end  ----------------------------------

//sub method start ----------------------------------
describe("sub(2, 2)", () => {
    it("testing sub method", () => {
        var result = converter.sub(2, 2)

        expect(result).to.equal(0)
    })
})
describe("sub(2, 2)", () => {
    it("testing sub method", () => {
        var result = converter.sub(2, 2)

        expect(result).to.equal(1)
    })
})
//sub method end ----------------------------------

//mul method start ----------------------------------
describe("mul(2, 2)", () => {
    it("testing mul method", () => {
        var result = converter.mul(2, 2)

        expect(result).to.equal(4)
    })
})
describe("mul(2, 2)", () => {
    it("testing mul method", () => {
        var result = converter.mul(2, 2)

        expect(result).to.equal(5)
    })
})
//mul method end ----------------------------------

//div method start ----------------------------------
describe("div(2, 2)", () => {
    it("testing div method", () => {
        var result = converter.div(2, 2)

        expect(result).to.equal(1)
    })
})
describe("div(2, 2)", () => {
    it("testing div method", () => {
        var result = converter.div(2, 2)

        expect(result).to.equal(2)
    })
})
//div method end ----------------------------------
