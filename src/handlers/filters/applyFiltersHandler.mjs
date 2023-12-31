import applyFilters from "../../controllers/filters/applyFilters.mjs";
import Boom from "@hapi/boom"
import HttpStatusCode from  "http-status-codes"
const applyFiltersHandler = async (req, res, next) => {
    try {
        const body = req.body;
        const response =  await applyFilters(body);
        return res.status(HttpStatusCode.OK).json(response);
    } catch (error) {
        const err = Boom.isBoom(error)? error: Boom.internal(error);
        next(error);
    }
}

    ;
    export default applyFiltersHandler;