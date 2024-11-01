require('dotenv').config()
const express = require('express')

const path = require('path')
const app = express()
const port = process.env.PORT || 3000


// Set view engine
app.set('views', path.join(__dirname, 'src','views'))
app.set('view engine', 'ejs')
app.use(express.static( path.join(__dirname, './public')))


// Middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))


// Routes
app.use('/', require('./src/routes/router'))


// Start server
app.listen(port, () => {
    console.log('\n=== === === === === === === === === ===')
    console.log(`Server is running at localhost:${port}\n\n`)
})