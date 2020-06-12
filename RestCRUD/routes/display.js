const express = require('express')
const displayUser = require('../controller/displayUser')
const User = require('../models/User')
const router = express.Router()

router.get('/',displayUser.displayUser)

module.exports = router