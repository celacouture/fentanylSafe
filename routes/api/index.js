const router = require("express").Router();
const alertRoutes = require("./alerts");

// Book routes
router.use("/alerts", alertRoutes);

module.exports = router;
