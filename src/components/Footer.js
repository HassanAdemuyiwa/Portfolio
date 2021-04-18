import React from 'react'
import { makeStyles} from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
//import { Link } from "react-router-dom";
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn'
// import Instagram from '@material-ui/icons/Instagram'
import Whatsapp from '@material-ui/icons/WhatsApp'
import GitHub from '@material-ui/icons/GitHub'


const useStyle = makeStyles({
    root:{
        '& .MuiBottonNavigationAction-root':{
            minWidth: 0,
            maxWidth: 250,
            
        },
        '& .MuiSvgIcon-root':{
            fill: 'tan',
            '&:hover':{
                fill: 'tomato',
                fontSize: '1.6rem'
            }
        }
    }
})

const Footer = () => {

    const classes = useStyle()

    return (
       <BottomNavigation width='auto' style={{background:'#222'}}>
          <a target="blank" href='https://twitter.com/HassanAdemuyiwa'style={{paddingTop: 5, marginRight:'-1.5rem', marginLeft:"-1.5rem"}} ><BottomNavigationAction  icon={<Twitter/>} className={classes.root}/> </a> 
           <a target="blank" href="https://www.linkedin.com/in/hassan-ademuyiwa-b3258211a/"style={{paddingTop: 5, marginRight:'-1.5rem'}}><BottomNavigationAction  icon={<LinkedIn/>} className={classes.root} /></a>
           <a target="blank" href="https://github.com/HassanAdemuyiwa"style={{paddingTop: 5, marginRight:'-1.5rem'}}><BottomNavigationAction  icon={<GitHub/>} className={classes.root}/></a>
           <a target="blank" href="https://wa.me/+2349098936071"style={{paddingTop: 5, marginRight:'-1.5rem'}}><BottomNavigationAction  icon={<Whatsapp/>} className={classes.root}/></a>
       </BottomNavigation>
    )
}

export default Footer
