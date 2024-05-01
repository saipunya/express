const express = require('express')
const app = express()


app.use(express.urlencoded({extended: true}))
app.set('view engine', 'hbs')


app.get('/',(req, res) => {
    console.log(req.query);
    const { q , sortBy} = req.query;
    res.render('home',{
        q,sortBy
    })
})
app.get('/p/new',(req, res) => {
    res.render('postNew')
})

app.post('/p/new',(req, res) => {
    // console.log(req.body)
    const { title } = req.body ?? {};

    res.send(`submit form แล้วจ้า title=${title}`)
})

app.get('/p/:postId',(req, res) => {
    const {postId} = req.params
    res.render('postId')
})

app.listen(5000,()=>{
    console.log('มาค่ะ http://localhost:5000')
})