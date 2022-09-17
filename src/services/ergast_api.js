const axios = require('axios')

exports.getResults = async function () {
    try {
        const response = await axios.get('http://ergast.com/api/f1/current/last/results.json')
        return response.data
    } catch (error) {
        console.log(error)
    }

}

exports.getConstructors = async function () {
    try {
        const response = await axios.get('http://ergast.com/api/f1/current/constructorStandings.json')
        return response.data
    } catch (error) {
        console.log(error)
    }

}

exports.getDriverStandings = async function () {
    try {
        const response = await axios.get('http://ergast.com/api/f1/current/driverStandings.json')
        return response.data
    } catch (error) {
        console.log(error)
    }

}

exports.getSchedule = async function () {
    try {
        const response = await axios.get('http://ergast.com/api/f1/current.json')
        return response.data
    } catch (error) {
        console.log(error)
    }
}
