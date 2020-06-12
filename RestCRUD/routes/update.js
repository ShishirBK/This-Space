const express = require('express')
const updateUser = require('../controller/updateUser')
const User = require('../models/User')
const router = express.Router()

router.put('/',updateUser.updateUser)

module.exports = router