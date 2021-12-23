module.exports = (app) => {
  const regions = require("../controller/region");
  const router = require("express").Router();

  // Create a new Region
  router.post("/", regions.create);

  app.use("/api/regions", router);
};
