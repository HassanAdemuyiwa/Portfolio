import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles';
import {useForm} from 'react-hook-form'
import { Typography, Grid, Box, TextField, Button} from '@material-ui/core';
import SendIcon from "@material-ui/icons/Send";
import Navbar from './Navbar';
import { FormControl } from '@material-ui/core';
//import axios from 'axios';


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

const Contact = (props) => {

    const classes = useStyles();

    // const initialFormState={id:null, fullName:"", email:"", subject:"", message:""}

    const { register, handleSubmit, errors} = useForm();

    // setValue('fullName', props.user ? props.user.fullName : '');
    // setValue('email', props.user ? props.user.email : '');
    // setValue('subject', props.user ? props.user.subject : '');
    // setValue('message', props.user ? props.user.message : '');

    const onSubmit = async (data) =>{
        const formData = new FormData()
        
        const res = await fetch('http:localhost:8080/contact',{
            method: 'POST',
            body: formData
        }).then(res => res.json())
        alert(JSON.stringify(res))
         
    }
    // const onClick = (mail) => {
    //     console.log(mail);
    // }
    return (
        <Box component='div' style={{background: '#233', height: '100vh'}}>
            <Navbar/>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5"   style={{color:'tomato', textAlign:'center', textTransform:'uppercase', fontSize:'18px'}}>
                        hire or contact me...
                    </Typography>
                    <FormControl onSubmit={handleSubmit(onSubmit)}>
                    <InputField fullWidth={true} name='fullName' label='Full Name' type='text'  variant='outlined' inputProps={{style:{color:"white", fontSize:'16px'}}} margin="dense" size="medium" {...register('fullName',{required:{value:true, message:'full name is required' } } )} /> <div>{errors?.fullName?.message}</div> <br />
                    <InputField fullWidth={true} name='email' label='Email' type='email'  variant='outlined'inputProps={{style:{color:"white", fontSize:'16px'}}}   margin="dense" size="medium" {...register('email',{required:{value:true, message:'email address is required' }})} /> <div>{errors?.email?.message}</div> <br />
                    <InputField fullWidth={true} name='subject' label='Subject' type='text' variant='outlined'inputProps={{style:{color:"white", fontSize:'16px'}}}   margin="dense" size="medium" {...register('subject', {required:{value:true, message:'subject is required'}})} /> <div>{errors?.subject?.message}</div> <br />
                    <InputField fullWidth={true} rows={5} type='text' multiline name='message' label='Message' variant='outlined' inputProps={{style:{color:"white", fontSize:'16px'}}}  margin="dense" size="medium" {...register('message', {required: {value: true, message: 'message is required'}})} /> <div>{errors?.message?.message}</div> 
                    <Button className={classes.button} variant='outlined' fullWidth={true} endIcon={<SendIcon/>} type='submit' onClick={onSubmit}>
                      contact me
                    </Button> 
                    
                    </FormControl>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contact
