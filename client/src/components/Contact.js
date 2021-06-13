import React, { useState} from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
//import {useForm} from 'react-hook-form'
import { Typography, Grid, Box, TextField, Button} from '@material-ui/core';
import SendIcon from "@material-ui/icons/Send";
import Navbar from './Navbar';
// import emailjs from 'emailjs-com'
//import { FormControl } from '@material-ui/core';
import axios from 'axios';
// import { Switch } from 'react-router';


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
    const [ fullName, setFullName] = useState('')
    const [ email, setEmail] = useState('')
    const [ subject, setSubject] = useState('')
    const [ message, setMessage] = useState('')


    const handleChange=(e)=> {
        e.preventDefault();
    switch(e.target.id){
        case 'fullName':
            setFullName(e.target.value);
        break;
        case 'email':
            setEmail(e.target.value);
        break;
        case 'subject':
            setSubject(e.target.value);
        break;
        case 'message':
            setMessage(e.target.value);
        break;
    default:
    break;
    }
   
    }


    const handleSubmit=(e)=>{
        e.preventDefault();
        const dataToSubmit ={
            fullName,
            email,
            subject,
            message
        }

    axios.post('http://localhost:8080/contact',dataToSubmit, function(){ console.log('Server received data')} );


    }

    return (
        <Box component='div' style={{background: '#233', height: '100vh'}}>
            <Navbar/>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5"   style={{color:'tomato', textAlign:'center', textTransform:'uppercase', fontSize:'18px'}}>
                        hire or contact me...
                    </Typography>
                    <form onSubmit={handleSubmit}>
                
                     <InputField fullWidth={true} id='fullName' value={fullName} label='Full Name' type='text'  variant='outlined' inputProps={{style:{color:"white", fontSize:'16px'}}} margin="dense" size="medium" onChange={handleChange} /> <br />

                    <InputField fullWidth={true} id='email' value={email} label='Email' type='email'  variant='outlined'inputProps={{style:{color:"white", fontSize:'16px'}}}   margin="dense" size="medium" onChange={handleChange} /> <br />

                    <InputField fullWidth={true} id='subject' value={subject} label='Subject' type='text' variant='outlined'inputProps={{style:{color:"white", fontSize:'16px'}}}   margin="dense" size="medium" onChange={handleChange} /> <br />

                    <InputField fullWidth={true} rows={5} type='text' multiline id='message' value={message} label='Message' variant='outlined' inputProps={{style:{color:"white", fontSize:'16px'}}}  margin="dense" size="medium" onChange={handleChange} />

                    <Button className={classes.button} variant='outlined' fullWidth={true} endIcon={<SendIcon/>} type='submit' onClick={handleSubmit}>
                      contact me
                    </Button>
                    
                    </form>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contact
