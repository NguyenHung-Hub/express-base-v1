const config = require("../config/config");
const httpStatus = require("http-status");
const logger = require("../config/logger");

const errorHandlerCall = (req, res, next) => {
    const error = new Error("Not found");
    error.status = 404;
    next(error);
};

const errorHandler = (error, req, res, next) => {
    res.status(error.status || 500).send({
        error: {
            status: error.status || 500,
            message: error.message || "Internal Server Error",
        },
    });
};

module.exports = { errorHandler, errorHandlerCall };
