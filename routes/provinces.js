module.exports = (app) => {
  const provinces = require("../controller/province");
  const router = require("express").Router();

  // Create a new province
  router.post("/", provinces.create);

  // Retrieve all province
  router.get("/", provinces.findAll);

  // Retrieve a single province with id
  router.get("/:id", provinces.findOne);

  // Update a province with id
  router.put("/:id", provinces.update);

  // Delete a province with id
  router.delete("/:id", provinces.delete);

  app.use("/api/provinces", router);
};
