
import * as fs from 'fs';
import { addLog } from './report-util';

/**
 * To Delete a Directory
 * directory path :{string}
 */
export async function deleteDirectory(path: string) {
    if (fs.existsSync(path)) {
        fs.rmSync(path, { recursive: true });
        await addLog(`Directory deleted : ${path}`);
    }
}