const express = require("express");
const router = express.Router();
// const galleryItems = require("../modules/gallery.data");
const pool = require("../modules/pool");
// DO NOT MODIFY THIS FILE FOR BASE MODE

// PUT Route
router.put("/:id", (req, res) => {
  const galleryId = req.params.id;

  const sqlQuery = `
    UPDATE hotdogs
    SET likes = likes + 1
    WHERE id = $1;
  `;

  const sqlParams = [galleryId];
  pool
    .query(sqlQuery, sqlParams)
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      res.sendStatus(500);
      console.log("ERROR in PUT route", err);
    });
}); // END PUT Route

// GET Route
router.get("/", (req, res) => {
  const sqlQuery = `
      SELECT * FROM hotdogs ORDER BY id DESC
      `;
  pool
    .query(sqlQuery)
    .then((response) => {
      res.send(response.rows);
    })
    .catch((err) => {
      console.log("error in GET route", err);
    });
}); // END GET Route

module.exports = router;
