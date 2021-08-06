const express = require('express');
const path = require('path');

const app = express();
const port = 80;

// pug specific stuff
app.use('/static', express.static('static'))         // for serving static file
app.set('views engine', 'pug')                       // set template engine as pug
app.set('views',  path.join(__dirname, 'views'))     // set views directory



// our pug demo end point
app.get("/demo", (req, res) =>{

    res.status(200).render('demo', {
        title : "hey",   message : "hello there!"
    })
});

//  status code
app.get("/", (req, res) =>{

    res.status(200).send("This is my home page status code.")
});


app.get("/about", (req, res) =>{

    res.send("This is my about page first express app with harry.")
});

app.post("/about", (req, res) =>{

    res.send("This is post request of  about page first express app with harry.")
});

app.get("/this", (req, res) =>{

    res.status(404).send("This is get request not found.")
});


// Endpoints
app.get("/", (req, res) =>{

        res.status(200).render('index.pug');
    });



// starting server 
app.listen(port, () =>{
    console.log(`This application started successfully on port  ${port}`)
});