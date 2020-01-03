const express = require('express');
const app = express();
const mongoose = require('mongoose');

//routes
app.get('/', (req,res) => {
    res.send('We are on home')
});

app.get('/posts', (req,res) => {
    res.send('We are on post')
});

//connect to DB
mongoose.connect('mongodb+srv://raxem:raxem@cluster0-uzhgf.mongodb.net/test?retryWrites=true&w=majority',{ useNewUrlParser: true , useUnifiedTopology: true }, () => 
    console.log('connected to DB')
);

//how do we sart listening?
app.listen(3000, () => console.log('running on port 3000'));

