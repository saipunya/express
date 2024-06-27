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
    res.redirect('/random')
})

app.get('/random', (req, res) => {
    if(Object.keys(req.query).length == 0 ){
        res.render('random')
    }else{
        if(req.xhr || req.headers.accept.indexOf('json') > -1){
            let min = parseInt(req.query.min)
            let max = parseInt(req.query.max)
            let rand = min + Math.floor(Math.random()*((max-min) +1))
            res.send({ ra : rand})
        }

       
    }
})

app.all('/form', (req, res) =>{
    let data = {}
    if(Object.keys(req.body).length > 0){
        let fruit = ''
        if(req.body.fruit){
            if(Array.isArray(req.body.fruit)){
                fruit = req.body.fruit.join(', ')
            }else{
                fruit = req.body.fruit
            }
        }
        let flower = req.body.flower || ''
        let color = req.body.color
        let animal = ''
        if(Array.isArray(req.body.animal)){
            animal = req.body.animal.join(',')
        }else{
            animal = req.body.animal
        }
        data = { data : true, fr: fruit,flo : flower, color: color,anm:animal}
    }
    res.render('form', data)
})
app.all('/search' , (req, res) =>{

    // let query = req.query
    let data = {}
    if(Object.keys(req.query).length > 0){
        data = {
            q : req.query.q,
            p : req.query.p,

        }
    }
    res.render('search', data)
})

app.all('/person', (req, res) => {
    res.render('person',{
        firstname: 'John',
        lastname: 'Smith',
        address : 'Bankok',
        link : '<a href="http://www.google.co.th">link</a>',
    })
})

app.all('/product2', (req, res) => {
    res.render('product',{
        title : 'product',
        products : {
            p1 : {name : 'table', price : 500 , color:'green'},
            p2 : {name : 'computer', price : 22500 , color:'red'},
        }
    })
})




app.all('/product',(req, res) => {
    let data = {}
    if(req.body.product){
        data = {
            product : req.body.product,
            price : req.body.price,
            quantity : req.body.quantity,
            desc : req.body.desc,
            date_add : req.body.date_add.split('-').reverse().join('-'),
        }

    }
    res.render('product',data)
})


app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})