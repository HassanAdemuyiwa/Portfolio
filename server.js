const express = require('express');
const morgan = require('morgan');



const app = express();
const PORT = process.env.PORT || 8080;


app.use(morgan('tiny'));


app.get('/api', (req, res)=>{
    const data = {
        name: 'HasanAdemuyiwa',
        age: 2
    };
    res.json(data)

})


app.listen(PORT, console.log(`app running on port ${8080}`))