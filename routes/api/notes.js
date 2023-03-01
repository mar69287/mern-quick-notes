const express = require('express');
const router = express.Router();
const notesCtrl = require('../../controllers/api/notes');

// All paths start with '/api/users'

// POST /api/users
router.post('/', notesCtrl.create);

module.exports = router;