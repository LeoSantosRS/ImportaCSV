import { getLogsService, insertLogsService, getLogByDataService } from "../services/logs.services";

const getLogsController = async (req, res) => {
    const logs = await getLogsService();
    return res.status(201).json(logs);
}

const insertLogsController = async (req, res) => {
    const { remetente, status  } = req.body;
    const logs = await insertLogsService(remetente, status);
    return res.status(201).json(logs);
}

const getLogByDataController = async (req, res) => {
    const { data } = req.body;
    const inputData = new Date(data).toLocaleDateString('en-US', { timeZone: 'UTC' });
    const logs = await getLogByDataService(inputData);
    if(logs.length > 0){
        return res.status(201).json(true);
    }else{
        return res.status(201).json(false);
    }
}
export { getLogsController, insertLogsController, getLogByDataController };