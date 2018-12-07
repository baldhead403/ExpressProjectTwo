const express = require('express')
const app = express()
const path = require('path')
require('dotenv').config()

app.set("view engine", "pug")
app.use('/bootstrap',express.static(__dirname + '/node_modules/pug-bootstrap'))
app.use(express.static(__dirname + "/public"));


app.get('/maps', (req, res) =>{
    res.render('maps.pug',{key:process.env.MAP_KEY} )
   
});


app.get('/youtube', (req, res) =>{
    res.render('youtube.pug',{key:process.env.KEY})
    
});


app.get('/shortener', (req, res) =>{
    res.render('shortener.pug',{key:process.env.KEY})
});


app.listen(8080)