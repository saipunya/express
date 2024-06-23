const express = require('express')
const app = express()
const path = require('path')

app.get('/', (req, res) =>{
    let r = Math.random()
    if(r > 0.5){
        res.redirect ('/show-value/' + r)
    }else{
        res.redirect ('/error')
    }
})

app.get('/show-value/:v', (req, res) =>{
    res.type('text/html')
    res.send(`
        Value : ${req.params.v} <br/> <br/> <br/> <br/>
        <a href='/'>Back</a>
        `)
})

app.get ('/error', (req, res) =>{
    res.status(404)
    res.send(`
 
        ERROR Value < 0.5 <br/> <br/> <br/> <br/>
        <a href="/">Back</a>
        `)
})

app.listen(5000,() => {
   console.log(`Server is running on port` + 5000 )
})