express = require('express');

const app = express();

//routes
app.get('/', (req,res) => {
    res.send('We are home')
})

//how do we sart listening?
app.listen(3000);

