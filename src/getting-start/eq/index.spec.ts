import { eqNumber } from "fp-ts/lib/Eq"

describe("index functions", () => {
    describe("eqNumber", () => {
        it("should evaluate 2 numbers", () => {
            const resultFalse = eqNumber.equals(1, 2)
            expect(resultFalse).toBe(false)

            const resultTrue = eqNumber.equals(100, 100)
            expect(resultTrue).toBe(true)
        })
    })
})