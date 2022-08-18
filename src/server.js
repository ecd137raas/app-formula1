const app = require('../src/app')
require('dotenv').config()

const port = process.env.PRD
//const port = process.env.DEV

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
  })
  
