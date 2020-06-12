const express = require('express')
const deleteUser = require('../controller/deleteUser')
const router = express.Router()

router.delete('/',deleteUser.deleteUser)

module.exports = router