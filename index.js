require('dotenv').config()
const express = require('express')
const bodyParser = require('body-parser')

const path = require('path')
const app = express()
const port = process.env.PORT || 3000


// Set view engine
app.set('views', path.join(__dirname, 'src','views'))
app.set('view engine', 'ejs')
app.use(express.static( path.join(__dirname, './public')))


// Middleware
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Routes
app.use('/', require('./src/routes/router'))


// Start server
app.listen(port, () => {
    console.log('\n=== === === === === === === === === ===')
    console.log(`Server is running at localhost:${port}\n\n`)
})