const express = require('express')
const service = require('../services/ergast_api')

const router = express.Router()

router.get('/', function(req, res){
    res.render('home')
})

router.get('/results', async function(req, res){
    const response = await service.getResults()
    res.render('results', {res:response})
})

router.get('/drivers', function(req, res){
    res.render('drivers')
})

module.exports = router