const express = require('express')
const router = express.Router();
const controller = require('../controller/user')
router.route('/').get(controller.abb)


module.exports = router
