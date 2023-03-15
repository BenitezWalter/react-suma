const router = require('express').Router()

const {postSuma} = require('../controllers/suma.controllers')

router.post("/Suma",postSuma)

module.exports = router