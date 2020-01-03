express = require('express');

const app = express();

//middleware
app.use('/posts', () => {
    console.log('This is middleware running');
});

//routes
app.get('/', (req,res) => {
    res.send('We are on home')
});

app.get('/posts', (req,res) => {
    res.send('We are on post')
});

//how do we sart listening?
app.listen(3000);

