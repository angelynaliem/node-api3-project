const express = require('express');

const router = express.Router();

const users = require("./userDb.js")

router.post('/', (req, res) => {
  // do your magic!
  users.insert(req.body)
  .then(user => {
    res.status(201).json(user)
  })
  .catch(error => {
    console.log("Error adding user ", error)
    res.status(500).json({ errorMessage: "Error adding user" })
  })

});

router.post('/:id/posts', (req, res) => {
  // do your magic!
});

router.get('/', (req, res) => {
  // do your magic!
});

router.get('/:id', (req, res) => {
  // do your magic!
});

router.get('/:id/posts', (req, res) => {
  // do your magic!
});

router.delete('/:id', (req, res) => {
  // do your magic!
});

router.put('/:id', (req, res) => {
  // do your magic!
});

//custom middleware

function validateUserId(req, res, next) {
  // do your magic!
}

function validateUser(req, res, next) {
  // do your magic!
}

function validatePost(req, res, next) {
  // do your magic!
}

module.exports = router;
