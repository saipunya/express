const express = require('express')
const app = express()
const path = require('path')
app.get('/',(req, res) =>{
    res.status(200)
    res.type('text/html')
    res.send(
        `
        <a href='/member/signin'>Signin</a>
        <a href='/search?q=node.js&page=3'>Search</a>
        `
    )
})
app.get('/member/signin',(req, res) => {
        url_info(req, res)
})
app.get('/search',(req, res) => {
        url_info(req,res)
    })




function url_info (req, res) {
    res.type('text/html')
    let text = `
     hostname : ${req.hostname} <br />
     path : ${req.path} <br />
     query : ${JSON.stringify(req.query)} <br />
    
    `
    for(p in req.query){
        text += `- ${p} : ${req.query[p]} <br />`
    }
    res.send(text)
}

app.use((req, res) =>{
    res.status(404)
    res.send('Error 404 not found')
})
app.listen(5000,()=>{
    console.log('Sever is listening on port ' + 5000);
})