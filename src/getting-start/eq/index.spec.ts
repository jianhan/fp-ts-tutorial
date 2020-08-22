import { eqNumber, elem } from "./index"

describe("index functions", () => {
    describe("eqNumber", () => {
        it("should evaluate 2 numbers", () => {
            const resultFalse = eqNumber.equals(1, 2)
            expect(resultFalse).toBe(false)

            const resultTrue = eqNumber.equals(100, 100)
            expect(resultTrue).toBe(true)
        })
    })

    describe("elem", () => {
        it("should check if a number in array", () => {
            elem(eqNumber)(1, [1, 2, 3, 4, 5])
        })
    })
})