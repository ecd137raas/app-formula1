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

router.get('/constructors', async function(req, res){
    const response = await service.getConstructors()
    res.render('constructors', {res:response})
})

router.get('/driverstandings', async function(req, res){
    const response = await service.getDriverStandings()
    res.render('driverstandings', {res:response})
})

module.exports = router