import React, {useState} from 'react'
import {Link} from 'react-router-dom'
import {
AppBar,
Toolbar,
ListItem,
IconButton,
ListItemText,
Avatar,
Divider,
List,
ListItemIcon,
Typography,
Box
} from '@material-ui/core';
import useScrollTrigger from '@material-ui/core/useScrollTrigger';
import { makeStyles } from '@material-ui/styles'
import MobileSlider from '@material-ui/core/Drawer'
import {
ArrowBack,
AssignmentInd,
Home,
Apps,
ContactMail
} from "@material-ui/icons"
import Footer from './Footer'

import avatar from '../asset/Avatar1.png'


function ElevationScroll(props) {
    const { children } = props;
   
    const trigger = useScrollTrigger({
      disableHysteresis: true,
      threshold: 0,
    });
  
    return React.cloneElement(children, {
      elevation: trigger ? 4 : 0,
    });
  }
  



//CSS STYLES
const useStyles = makeStyles(theme=>(
    {
        menuSliderContainer: {
            width:250,
            background: '#511',
            height: '100%'
        },
        avatar: {
            display: 'block',
            margin: '1rem auto',
            width: '5rem',
            height: '5rem', 
            // paddingTop: '2rem'
        },
        listItem: {
            color: 'tan'
        },
        
    }
   

));

const menuItems = [
    {
        listIcon: <Home/>,
        listText: 'Home',
        listPath: '/'
    }, 
    {
        listIcon: <AssignmentInd/>,
        listText: 'Resume',
        listPath: '/resume'
    }, 
    {
        listIcon: <Apps/>,
        listText: 'Portfolio',
        listPath: '/portfolio'
    },
    {
        listIcon: <ContactMail/>,
        listText: 'Contacts',
        listPath: '/contact'
    }
]



const Navbar = () => {
 const [state, setState] =useState({right: false})

 const toggleSlider = (slider, open) => () => {
     setState({...state, [slider]:open})
 }

 const classes = useStyles()
 

 const sideList = slider => (

    <Box className={classes.menuSliderContainer} component='div' onClick={toggleSlider(slider, false)}>
            <Avatar className={classes.avatar} src={avatar} alt='avatar'/>
            <Divider/>
            <List>
                {menuItems.map((lsItem, key)=>(
                  <ListItem button key={key}  component={Link} to={lsItem.listPath} > 
                
                    <ListItemIcon className={classes.listItem}>
                    {lsItem.listIcon}
                    </ListItemIcon>
                    <ListItemText  className={classes.listItem}primary={lsItem.listText}/>
                </ListItem>    
                ) )}
              
            </List>
            
        </Box>

 )




    return (
        <React.Fragment>
     
        
        <Box component='nav'>
           <ElevationScroll>
            <AppBar position="fixed" style={{background: '#222'}}>
                <Toolbar>
                    <IconButton onClick={toggleSlider('right', true)}> 
                        <ArrowBack style={{color: 'tomato'}}/>

                    </IconButton>
                    <Typography variant="h5" style={{color: 'tan'}}>
                        Portfolio
                    </Typography>
                    <MobileSlider open ={state.right} onClose={toggleSlider('right', false)} anchor='right'>
                       {sideList('right')}
                    <Footer/>
                    </MobileSlider>
                   
                </Toolbar> 
            </AppBar>
        </ElevationScroll>
       
        </Box>
        </React.Fragment>
    )
}

export default Navbar
