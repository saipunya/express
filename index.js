const express = require('express')
const app = express()
const port = 5000
const path = require('path')


app.get('/', (req, res) =>{
    res.status(200)
    res.type('text/html')
    res.send(`
        <a href='/product-detail/24680'>product detail</a>
        <a href='/search/node.js & express.js/5'>Search</a>
        <a href='/map/10.1122,50.5678/satellite/16'>Views Map</a>
        `)
})

app.get('/product-detail/:id', (req, res) =>{
    res.send (`Product detail: ${req.params.id}`)
})

app.get('/search/:q/:page', (req, res) =>{
    res.send (`
        show results for : ${req.params.q}
        on page: ${req.params.page}
        `)
})
app.get('/map/:lat,:lon/:type/:zoom', (req, res) =>{
    res.send (`
            latitude: ${req.params.lat} <br>
           latitude: ${req.params.lon} <br>
           type: ${req.params.type} <br>
           zoom: ${req.params.zoom} <br>
        
        `)
    })


app.use(function(req, res) {
    res.status(404)
    res.type('text/html')
    res.send('404 Not Found')
})

app.listen(port,()=>{
    console.log('Server start on port ' + port)
})