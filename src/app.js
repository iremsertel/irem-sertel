const express = require('express')
const weather = require('./weather.js')
const geocode = require('./geocode.js')
const { isArgumentsObject } = require('util/types')
var app = express()

const port = process.env.PORT || 3000

app.get('/', (request, response) => {
    response.send('homepage')
  
})

app.get('/test_json', (request, response) => {
    response.send({
        ad: irem,
        soyad: sertel

    })
  
})

app.get('/test_text', (request, response) => {
    response.send('<h1>18360859005</h1>')
  
})

app.get('/test_html', (request, response) => {
    response.send('<h1>irem sertel</h1>')
  
})

app.get('/test_geocode', (request, response) => {
    response.send('homepage')
  
})

app.get('/test_weather', (request, response) => {
    response.send('homepage')
  
})

app.listen(port, () => {

    console.log("port üzerinde çalışıyor:" ,port)
})