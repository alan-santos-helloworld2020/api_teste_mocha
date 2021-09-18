const express = require('express')
const app = express()
const dotenv = require('dotenv').config()
const cors = require('cors')
const port = process.env.PORT || 3000
const router = require('./router/router')

app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:false}))
app.use(router)


app.listen(port, () => console.log(`http://localhost:${port}`))

module.exports = app