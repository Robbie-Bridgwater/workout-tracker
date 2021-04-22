// This index file is used to make the app more scalable, 
// i.e. in case I wanted to add a lot more routes into the API folder
const router = require("express").Router();

const apiRoutes = require("./API/APIroutes");
const homeRoutes = require("./homeRoutes");

router.use("/", homeRoutes);
router.use("/api", apiRoutes);

module.exports = router;