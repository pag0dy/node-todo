require('dotenv').config()

const express = require('express')
const cors = require('cors')
const path = require('path')
const router = require('./routes')

const HOST = process.env.HOST || 'localhost'
const PORT = process.env.PORT || 3000

const app = express()

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(express.static(path.join(__dirname, 'public')))

app.use(cors({
    origin: '*'
}))

app.use(router);

app.listen(PORT, () => {
    console.log(`Server running at http://${HOST}:${PORT}`)
})