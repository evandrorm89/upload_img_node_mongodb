const express = require('express');
const router = express.Router();

const PictureController = require('../controllers/pictureController');

router.post('/', PictureController.create);

module.exports = router;
