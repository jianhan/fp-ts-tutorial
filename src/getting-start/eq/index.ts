import { Eq } from 'fp-ts/Eq'
import { getStructEq, contramap } from 'fp-ts/lib/Eq'

/**
 * 1. Reflexivity: equals(x, x) === true, for all x in A
 * 2. Symmetry: equals(x, y) === equals(y, x), for all x, y in A
 * 3. Transitivity: if equals(x, y) === true and equals(y, z) === true, then equals(x, z) === true, for all x, y, z in A
 */
export const eqNumber: Eq<number> = {
    equals: (x, y) => x === y
}

/**
 * notice how higher order function use the E to do the evaluation
 * @param E 
 */
export const elem = <A extends unknown>(E: Eq<A>): (a: A, as: Array<A>) => boolean => (a, as) => as.some(item => E.equals(a, item))

type Point = {
    x: number,
    y: number
}

const eqPoint: Eq<Point> = {
    equals: (p1, p2) => p1.x === p2.x && p1.y === p2.y
}


export const eqPointStruct: Eq<Point> = getStructEq({
    x: eqNumber,
    y: eqNumber,
})

type User = {
    userId: number
    name: string
}

const eqUser = contramap((user: User) => user.userId)(eqNumber)

eqUser.equals({ userId: 1, name: 'Giulio' }, { userId: 1, name: 'Giulio Canti' }) // true
eqUser.equals({ userId: 1, name: 'Giulio' }, { userId: 2, name: 'Giulio' }) // false
