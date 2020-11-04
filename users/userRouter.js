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
  users.get()
  .then(users => {
    if(users) {
      res.status(200).json(users)
    } else {
      res.status(404).json({ message: "Cannot get users" })
    }
  })
  .catch(error => {
    console.log("Error getting users ", error)
    res.status(500).json({ errorMessage: "Error getting users" })
  })
});

router.get('/:id', (req, res) => {
  // do your magic!
  users.getById(req.params.id)
  .then(user => {
    if(user) {
      res.status(200).json(user)
    } else {
      res.status(404).json({ message: "User not found" })
    }
  })
  .catch(error => {
    console.log("Error getting specified id user ", error)
    res.status(500).json({ errorMessage: "Error getting specified id user" })
  })
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
