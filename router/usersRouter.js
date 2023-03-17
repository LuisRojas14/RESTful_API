const express = require("express");
const router = express.Router();
const { Pool } = require("pg");

const pool = new Pool();

//GET  /  : To get all the Users

router.get("/", (req, res) => {
  pool
    .query("SELECT * FROM users ")
    .then((data) => res.json(data))
    .catch((err) => res.sendStatus(500));
});

// GET  /:id :  To get one user (with the id)

router.get("/:id", (req, res) => {
  const id = req.params.id;
  pool
    .query("SELECT * FROM users WHERE id=$1;", [id])
    .then(({ rows }) => res.json(rows))
    .catch((e) => res.sendStatus(500));
});

// POST / -> To create a new user
router.post("/", (req, res) => {
  //   console.log(req.body);
  const { first_name, last_name, age, active } = req.body;
  pool
    .query(
      "INSERT INTO users(first_name, last_name, age, active) VALUES ($1, $2, $3, $4 ) RETURNING *;",
      [first_name, last_name, age, active]
    )
    .then(({ rows }) => res.json(rows))
    .catch((e) => res.sendStatus(500));
});

//  PUT /:id  :  To edit one user (with the id)

router.put("/:id", (req, res) => {
  const id = req.params.id; // Retrieve the id from URl
  const { first_name } = req.body; // Retrieve tha name from the form(body*parser)
  pool
    .query("UPDATE users SET first_name=$1 WHERE id=$2 RETURNING *;", [
      first_name,
      id,
    ]) // Inject name and id in the request
    .then(({ rows }) => res.json(rows))
    .catch((e) => res.sendStatus(500));
});

// DELETE  /:id : To delete one users (with the id)

router.delete("/:id", (req, res) => {
  // res.send("delete request to homepage");
  const id = req.params.id;
  pool
    .query("DELETE  FROM users WHERE id=$1;", [id])
    .then(({ rows }) => res.json(rows))
    .catch((e) => {
      console.log(e, "error");
      res.sendStatus(500);
    });
});

module.exports = router;
