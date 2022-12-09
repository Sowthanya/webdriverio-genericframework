import { addLog } from "./report-util";


/**
 * This class has all basic assertions 
 */
export class Assertion {

    static async equalText(actual: string, expected: string) {
        try {
            expect(actual).toEqual(expected);
        }
        catch (error) {
            await addLog("Assertion Failure>> " + "Expected: " + expected + " doesn't equal to Actual: " + actual)
        }
    }

}