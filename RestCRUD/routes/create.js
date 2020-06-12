const express = require('express')
const createUser = require('../controller/createUser')
const User = require('../models/User')
const router = express.Router()

router.post('/',createUser.createUser)

module.exports = router