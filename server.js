const express = require('express');
const morgan = require('morgan');



const app = express();
const PORT = process.env.PORT || 8080;


app.use(morgan('tiny'));
app.use(express.urlencoded({
    extended:false
}));

app.use(express.json());

app.post('/contact', (req, res)=>{

    console.log('Data:', req.body);
    res.json({message: 'hello world'})
});



app.get('/contact', (req, res)=>{
    const data = {
        name: 'HasanAdemuyiwa',
        age: 2
    };
    res.json(data)

})


app.listen(PORT, console.log(`app running on port ${8080}`))