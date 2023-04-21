const httpStatus = require("http-status");
const catchAsync = require("../utils/catchAsync");

const index = catchAsync(async (req, res) => {
    res.status(httpStatus.OK).json("Hello");
});

module.exports = { index };
