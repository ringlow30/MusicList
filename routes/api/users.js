const express = require('express');

const router = express.Router();

// Import our User Model
const User = require('../../models/user');

// GET User List
router.get('/list', (req, res, next) => {
// Find all matching users, which in this case is all of em'
  User.find((err, users) => {
    if (err) {
      // If something's broken, send an error
      return res.send(err);
    }
    // Otherwise, send the array of users
    return res.json(users);
  });
});

module.exports = router;
