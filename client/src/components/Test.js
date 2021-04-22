import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
//import {useForm} from 'react-hook-form'
import { Typography, Grid, Box, TextField, Button} from '@material-ui/core';
import SendIcon from "@material-ui/icons/Send";
import Navbar from './Navbar';
import emailjs from 'emailjs-com'
//import { FormControl } from '@material-ui/core';
// import axios from 'axios';


const useStyles = makeStyles(theme=>({
    form:{
        top: "50%",
        left:"50%",
        transform: 'translate(-50%, -50%)',
        position: 'absolute'
    },
    button:{
        marginTop:'1rem',
        color: 'tomato',
        borderColor: 'tomato'
    }
}));


// const data =(e)=>{
//     console.log(e.target.value)
// }
  function sendEmail(e){

        e.preventDefault();

        emailjs.sendForm('gmail', 'template_t3nglb1', e.target, 'user_hQVwBCDaZvajvwbOg97KA')
          .then((result) => {
              console.log(result.text);
          }, (error) => {
              console.log(error.text);
          });
          e.target.reset()


    }


const Contact = () => {

    const classes = useStyles();





  



    return (
        <Box component='div' style={{background: '#233', height: '100vh'}}>
            <Navbar/>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5"   style={{color:'tomato', textAlign:'center', textTransform:'uppercase', fontSize:'18px'}}>
                        hire or contact me...
                    </Typography>
                <form onSubmit={sendEmail}>
                    <input type='text' placeholder='fullName' name="fullName"/><br/>
                    <input type='email' placeholder='email' name="email"/><br/>
                    <input type='text' placeholder='subject' name="subject"/><br/>
                    <textarea type='text' rows="8" placeholder='message' name="message"/><br/>
                    <input type='submit' value='send message'></input>
                </form>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contact
