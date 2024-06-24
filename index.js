const express = require('express')
const app = express()
const engine = require('ejs')
const path = require('path')
app.set('view engine', 'ejs')

app.get('/', (req, res) =>{
    res.render('index',{
        title : 'Welcome to website',
    })
})

app.get('/person', (req, res) => {
    res.render('person',{
        firstname: 'John',
        lastname: 'Smith',
        address : 'Bankok',
        link : '<a href="http://www.google.co.th">link</a>',
    })
})

app.get('/product', (req, res) => {
    res.render('product',{
        title : 'product',
        products : {
            p1 : {name : 'table', price : 500 , color:'green'},
            p2 : {name : 'computer', price : 22500 , color:'red'},
        }
    })
})


app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})