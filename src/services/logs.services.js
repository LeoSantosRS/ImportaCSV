import { getLogs, insertLogs, getLogByData } from "../models/logs.models";

const getLogsService = async () => {
    const logs = await getLogs();
    return logs;
}
const insertLogsService = async (rementente,status) => {
    const logs = await insertLogs(rementente,status);
    return logs;
}
const getLogByDataService = async (data) => {
    const logs = await getLogByData(data);
    return logs;
}
export { getLogsService, insertLogsService, getLogByDataService };