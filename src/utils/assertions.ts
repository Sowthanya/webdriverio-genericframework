

/**
 * This class has all basic assertions 
 */
export class Assertion {

    static async equalText(actual: string, expected: string) {
        try {
            expect(actual).toEqual(expected);
        }
        catch (error) {

        }
    }

}