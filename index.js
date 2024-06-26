const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const engine = require('ejs')
const path = require('path')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended : true }))
app.use('/dist', express.static(__dirname + '/node_modules/bootstrap/dist'))
app.use('/axios',express.static(__dirname + '/node_modules/axios/dist'))
app.get('/', (req, res) =>{
    res.redirect('bgoverlay')
})
app.all('/bgoverlay', async (req, res) =>{
    if(!req.body.test){
        res.render('bgoverlay')
    }else{
        if(req.xhr || req.headers.accept.indexOf('json') > -1){
            let delay = (time)=>{
                return new Promise((resolve, reject)=>{
                    setTimeout(()=> resolve(),time)
                })
            }
            await delay(2000)
            res.send({})
        }
    }
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})