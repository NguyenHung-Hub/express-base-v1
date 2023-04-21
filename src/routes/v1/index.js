const router = require("express").Router();

const config = require("../../config/config");
const homeRoute = require("./home.route");
const defaultRoutes = [
    {
        path: "/",
        route: homeRoute,
    },
];
const devRoutes = [
    {
        path: "/dev",
        route: homeRoute,
    },
];

defaultRoutes.forEach((route) => {
    router.use(route.path, route.route);
});

if (config.env === "development") {
    devRoutes.forEach((route) => {
        router.use(route.path, route.route);
    });
}

module.exports = router;
