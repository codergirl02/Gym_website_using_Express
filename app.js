const express = require('express');
const fs  = require('fs');
const path = require('path');

const app = express();
const port = 80;

// expree specific stuff
app.use('/static', express.static('static'))  // for serving static files
app.use(express.urlencoded())

// pug specific stuff
app.set('views engine', 'pug')                       // set template engine as pug
app.set('views',  path.join(__dirname, 'views'))     // set views directory

// Endpoints
app.get("/", (req, res) =>{
    const con = "This is the best content"
    const params = {'title' : 'pubg is best game', "content" : con}
    res.status(200).render('index.pug', params);
})

app.post('/', (req, res)=>{
   
    name1 = req.body.name1
    age = req.body.age
    gender = req.body.gender
    address = req.body.address
    more = req.body.more

 // console.log(req.body);

    let outputToWrite = `The name of client is ${name1}, ${age} years old, ${gender}, residing at ${address}. More about him/her : ${more}`
    fs.writeFileSync('output.txt', outputToWrite)

    const params = {'message' : 'your form has been successfully submited!'}
    res.status(200).render('index.pug', params);

})

// starting server 
app.listen(port, () =>{
    console.log(`This application started successfully on port  ${port}`)
});