import { Eq } from 'fp-ts/Eq'

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
export function elem<A>(E: Eq<A>): (a: A, as: Array<A>) => boolean {
    return (a, as) => as.some(item => E.equals(a, item))
}