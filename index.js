const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const engine = require('ejs')
const path = require('path')
app.set('view engine', 'ejs')
app.use(bodyParser.urlencoded({ extended : true }))
app.use('/dist', express.static(__dirname + '/node_modules/bootstrap/dist'));
app.get('/', (req, res) =>{
    res.redirect('product')
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

app.get('/test', (req, res) => {
    res.render('add')
})

app.all('/add', (req, res) => {
    let data = {}
    if(req.body.num1){
        let num1 = req.body.num1
        let num2 = req.body.num2
        let r = parseFloat(num1) + parseFloat(num2)
        data = {
            n1 : num1,
            n2 : num2,
            r : r,
        }
    }
    res.render('add', data)
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