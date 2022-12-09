import { deleteDirectory } from "../utils/file-utils";
import { addLog } from "../utils/report-util";


export default class LauncherService {

    async onPrepare() {
        try {
            console.log("Inside OnPrepare");
            //To delete allure results folder to reatin only the  latest logs
            await deleteDirectory('./allure-results');
        } catch (error) {
            await addLog("Error in on prepare");
        }
    }
} 