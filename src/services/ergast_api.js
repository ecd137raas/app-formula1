const axios = require('axios')

exports.getResults = async function () {
    try{
        const response = await axios.get('http://ergast.com/api/f1/current/last/results.json')
        return response.data
    }catch(error){
        console.log(error)
    }
    
}