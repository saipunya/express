const express = require('express')
const app = express()
const engine = require('ejs')
const path = require('path')
app.set('view engine', 'ejs')

app.get('/person', (req, res) => {
    res.render('person',{
        firstname: 'John',
        lastname: 'Smith',
        address : 'Bankok',
        link : '<a href="http://www.google.co.th">link</a>',
    })
})


app.listen(5000,()=>{
    console.log('Server is running on port 5000');
})