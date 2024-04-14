const express = require('express')

const app = express();

app.get('/', (req, res) => {
    res.send('Server is up!!!');
});

app.get('/api/', (req, res) => {
    res.send('API is up!!!');
});

app.listen(3000, ()=>{
    console.log('Server is running on port 3000');
});