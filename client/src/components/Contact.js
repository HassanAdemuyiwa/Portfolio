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

const InputField = withStyles({
    root:{
        '& label.Mui-focused':{
            color: 'tomato'
        },
        '& label':{
            color: 'tan'
        },
        '& .MuiOutlinedInput-root':{
            '& fieldset':{
                borderColor: 'tan'
            },
            '&: hover fieldset':{
                borderColor: 'tan'
            },
            '& .Mui-focused fieldset':{
                borderColor: 'tan'
            }
        }
    }
})(TextField);

const Contact = () => {

    const classes = useStyles();



    // const { register, handleSubmit, errors} = useForm();

 

    // const onSubmit = (data) =>{
    //    //e.preventDefault()
    //         console.log(data)
    //     // const formData = new FormData()
        
    //     // const res = await fetch('http:localhost:8080/contact',{
    //     //     method: 'POST',
    //     //     body: formData
    //     // }).then(res => res.json())
    //     // alert(JSON.stringify(res))
         
    // }
    // const onClick = (mail) => {
    //     console.log(mail);
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



    return (
        <Box component='div' style={{background: '#233', height: '100vh'}}>
            <Navbar/>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5"   style={{color:'tomato', textAlign:'center', textTransform:'uppercase', fontSize:'18px'}}>
                        hire or contact me...
                    </Typography>
                    <form onSubmit={sendEmail}>
                
                     <InputField fullWidth={true} name='fullName' label='Full Name' type='text'  variant='outlined' inputProps={{style:{color:"white", fontSize:'16px'}}} margin="dense" size="medium"/> <br />

                    <InputField fullWidth={true} name='email' label='Email' type='email'  variant='outlined'inputProps={{style:{color:"white", fontSize:'16px'}}}   margin="dense" size="medium"/> <br />

                    <InputField fullWidth={true} name='subject' label='Subject' type='text' variant='outlined'inputProps={{style:{color:"white", fontSize:'16px'}}}   margin="dense" size="medium"/> <br />

                    <InputField fullWidth={true} rows={5} type='text' multiline name='message' label='Message' variant='outlined' inputProps={{style:{color:"white", fontSize:'16px'}}}  margin="dense" size="medium"/>

                    <Button className={classes.button} variant='outlined' fullWidth={true} endIcon={<SendIcon/>} type='submit'>
                      contact me
                    </Button>
                    
                    </form>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contact
