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
    res.redirect('login')
})
app.all('/login',(req, res) =>{
    if(!req.body.login){
        res.render('login')
    }else{
        if(req.xhr || req.headers.accept.indexOf('json') > -1){
            let loginExist = false
            let users = ['admin','node','express']
            if(users.includes(req.body.login)){
                loginExist = true
            }
            res.send({ exist: loginExist})
        }
    }
})

app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})