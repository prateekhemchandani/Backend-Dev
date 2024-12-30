require('dotenv').config()
const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/great', (req, res) => {
    res.send('prateek');
});
  
app.get('/login', (req,res)=>{
    res.send('<h1>Welcome to my login page</h1>');
})

app.listen(process.env.PORT, () => {
  console.log(`This app is listening on port ${port}`);
});
