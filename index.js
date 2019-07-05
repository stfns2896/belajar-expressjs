const express = require('express')
const bodyParser = require('body-parser')
const path = require('path')

const app = express()
/*
var logger = (req, res, next)=>{
    console.log('Logging..')
    next()
}

app.use(logger)
*/
app.set('view engine', 'ejs')
app.set('views',path.join(__dirname,'views'))

app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

app.use(express.static(path.join(__dirname,'public')))

app.get('/',(req, res)=>{
    res.send('Hello World')
})

app.listen(3000,()=>{
    console.log('Server started on port 3000..')
})