import { Eq } from 'fp-ts/Eq'

export const eqNumber: Eq<number> = {
    equals: (x, y) => x === y
}