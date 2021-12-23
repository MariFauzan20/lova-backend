const db = require("../models/region");
const Region = db.region;

// Create and Save a new region
exports.create = (req, res) => {
  if (!req.body.province_name) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  const region = new Region({
    province_name: req.body.province_name,
    city: {
      city_name: req.body.city_name,
    },
  });

  region
    .save(region)
    .then((data) => {
      res.send(data);
    })
    .catch((err) => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Region.",
      });
    });
};

// Retrieve all regions from the database.
exports.findAll = (req, res) => {};

// Find a single region with an id
exports.findOne = (req, res) => {};

// Update a region by the id in the request
exports.update = (req, res) => {};

// Delete a region with the specified id in the request
exports.delete = (req, res) => {};

// Delete all regions from the database.
exports.deleteAll = (req, res) => {};

// Find all published regions
exports.findAllPublished = (req, res) => {};
