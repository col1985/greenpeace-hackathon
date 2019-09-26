const express = require('express')
  , router = express.Router()
  , users = require('../controllers/users.js')
  , petition = require('../controllers/petition.js');

router.get('/api/v1/users', users.getAll);
router.get('/api/v1/user/:id', users.getOne);
router.post('/api/v1/user/', users.create);
router.delete('/api/v1/user/:id', users.delete);

router.put('/api/v1/petitions', petition.getAll);

module.exports = router;