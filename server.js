const express = require('express');
const morgan = require('morgan');
//const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');

const app = express();
const PORT = process.env.PORT || 8080;



app.use(morgan('tiny'));
app.use(express.urlencoded({extented: true}));
app.use(express.json());
app.use(cookieParser());

app.post('/contact', (req, res)=>{

    console.log(req.body);
    res.json({message: 'Message received!!!'})
});






app.listen(PORT, console.log(`app running on port ${8080}`))