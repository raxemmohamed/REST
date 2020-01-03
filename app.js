const express = require('express');
const app = express();
const mongoose = require('mongoose');
require('dotenv/config')

//import routes
const postsRoute = require('./routes/posts')

app.use('/posts', postsRoute);


//routes
app.get('/', (req,res) => {
    res.send('We are on home')
});

app.get('/posts', (req,res) => {
    res.send('We are on post')
});

//connect to DB
mongoose.connect(process.env.DB_CONNECTION, { useNewUrlParser: true , useUnifiedTopology: true }, () => 
    console.log('connected to DB')
);

//how do we sart listening?
app.listen(3000, () => console.log('running on port 3000'));

