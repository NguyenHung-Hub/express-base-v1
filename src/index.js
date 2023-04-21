const app = require("./app");
const config = require("./config/config");
const logger = require("./config/logger");

let server;

server = app.listen(config.port, () => {
    logger.info(`Server listening to port ${config.port}`);
});
