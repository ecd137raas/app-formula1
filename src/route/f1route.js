const express = require('express')
const service = require('../services/ergast_api')

const router = express.Router()

router.get('/', async function (req, res) {
    const response = await service.getSchedule()
    res.render('index', { res: response })
})
router.get('/results', async function (req, res) {
    const response = await service.getResults()
    res.render('results', { res: response })
})
router.get('/constructors', async function (req, res) {
    const response = await service.getConstructors()
    res.render('constructors', { res: response })
})
router.get('/driverstandings', async function (req, res) {
    const response = await service.getDriverStandings()
    res.render('drivers', { res: response })
})
module.exports = router

