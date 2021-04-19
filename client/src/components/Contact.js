import React from 'react';
import { makeStyles, withStyles } from '@material-ui/core/styles'
import { Typography, Grid, Box, TextField, Button} from '@material-ui/core';
import SendIcon from "@material-ui/icons/Send";
import Navbar from './Navbar';


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
    },
    heading:{ 
        color:'tomato', 
        textAlign:'center', 
        textTransform:'uppercase', 
        fontSize:'18px'
    }

})(TextField);

const Contact = () => {

    const classes = useStyles()

    return (
        <Box component='div' style={{background: '#233', height: '100vh'}}>
            <Navbar/>
            <Grid container justify="center">
                <Box component="form" className={classes.form}>
                    <Typography variant="h5"   style={{color:'tomato', textAlign:'center', textTransform:'uppercase', fontSize:'18px'}}>
                        hire or contact me...
                    </Typography>
                    <InputField fullWidth={true} label='Name' type='text' require='true' variant='outlined' inputProps={{style:{color:"white", fontSize:'16px'}}} margin="dense" size="medium"/> <br />
                    <InputField fullWidth={true} label='Email' type='email' require='true' variant='outlined'inputProps={{style:{color:"white", fontSize:'16px'}}}   margin="dense" size="medium"/> <br />
                    <InputField fullWidth={true} rows={4} multiline label='Message' variant='outlined' inputProps={{style:{color:"white", fontSize:'16px'}}}  margin="dense" size="medium"/> 
                    <Button className={classes.button} variant='outlined' fullWidth={true} endIcon={<SendIcon/>}>
                        contact me
                    </Button>
                </Box>
            </Grid>
        </Box>
    )
}

export default Contact
