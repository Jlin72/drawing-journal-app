const express = require('express');
const app = express();
const path = require('path');
const PORT = process.env.PORT || 8082;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.get('/data', (req, res)=> {
    res.send("Hello")
})

app.listen(PORT, () => {
    console.log('connected');
})