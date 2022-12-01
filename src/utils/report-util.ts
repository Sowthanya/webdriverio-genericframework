

/**
 * To log the test steps in Console log
 * @param{string} - log message
 */
export async function addLog(log: string) {
    if (browser.config.logLevel !== 'silent') {
        console.log(`${log}`);
    }
}
