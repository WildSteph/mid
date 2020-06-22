const express = require('express');
const router = express.Router();
const superMiddleware = require('./superMiddleware');

router.use('/superMiddleware', superMiddleware);


module.exports = router;