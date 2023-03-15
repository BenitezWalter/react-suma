const express = require('express')
const cors = require('cors')

const app = express()

const port = 3000

app.use(cors())
app.use(express.json())

app.use(require('../backend/src/routes/suma.routes'))

app.listen(port, ()=>{
    console.log("Server on port 3000")
})