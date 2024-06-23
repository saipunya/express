const express = require('express')
const app = express()
app.use(express.static('public')) // ตั้งค่า folder static

app.get('/', (req, res) =>{
    res.type('text/html')
    res.send(`
        <a href="about.html">เกี่ยวกับเรา</a>
        
        `)
})

app.use((req, res) =>{
    res.status(404)
    res.send('error 404 file not found')
})

app.listen(5000,()=>{
    console.log('Server listening on port' + 5000);
})