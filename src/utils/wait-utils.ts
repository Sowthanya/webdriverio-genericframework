import { ChainablePromiseElement } from "webdriverio"
import { addLog } from "./report-util";


/**
 * 
 * @param {ChainablePromiseElement<WebdriverIO.Element>} - webelement 
 * @param {number} - seconds OPTIONAL
 */
export const waitForDisplayed = async (element: ChainablePromiseElement<WebdriverIO.Element>, seconds: number = 15) => {
    try {
        await element.waitForDisplayed({
            timeout: 1000 * seconds,
            timeoutMsg: 'Timeout after ' + seconds + ' secs, ' + await element.selector + ' is not displayed with in the expected duration'
        });
    }
    catch (error) {
        await addLog(`WaitForDisplayed - Expected element ${await element.selector} is not displayed`)
    }
}