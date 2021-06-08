const express = require('express');
// const morgan = require('morgan');
// const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const {sendMail} = require('./mail');
const {eMessage} = require('./eMessage');

const app = express();
const PORT = process.env.PORT || 8080;

app.use(bodyParser.urlencoded({extended:false}));
app.use(bodyParser.json());

app.post('/', async(req, res)=>{
    const {name, email, subject, message } = req.body;

    // console.log('Data: ', req.boby);

    // sendMail(name, email, subject, message, function(err, data){
    //         if(err){
    //             res.status(500).json({ message: "Internal Error"})
    //         } else {
    //             res.json({message:'Email sent'})
    //         }
        
    // });
    // res.json({message: 'Message received'})


   try { 
       if(!name && !email && !subject && !message)
       return res.json('Incomplete data');

       await sendMail({
           name,
           email,
           subject,
           message: await eMessage(name, email, subject, message)
       })
       res.status(201).json({message:'Email sent!!!'})
       
   } catch (error) {
        console.log(err);
        res.status(500).json({message:'Email not sent'})   
   }

});






app.listen(PORT, console.log(`app running on port ${8080}`))