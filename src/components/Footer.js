import React from 'react'
import { makeStyles} from '@material-ui/styles';
import { BottomNavigation, BottomNavigationAction } from '@material-ui/core'
import Twitter from '@material-ui/icons/Twitter';
import LinkedIn from '@material-ui/icons/LinkedIn'
//import Instagram from '@material-ui/icons/Instagram'
// import Whatsapp from '@material-ui/icons/WhatsApp'
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
                fontSize: '1.8rem'
            }
        }
    }
})

const Footer = () => {

    const classes = useStyle()

    return (
       <BottomNavigation width='auto' style={{background:'#222'}}>
           <BottomNavigationAction style={{padding: 0}} icon={<Twitter/>} className={classes.root}/>
           <BottomNavigationAction style={{padding: 0}} icon={<LinkedIn/>} className={classes.root} />
           {/* <BottomNavigationAction style={{padding: 0}} icon={<Instagram/>} className={classes.root}/> */}
           {/* <BottomNavigationAction style={{padding: 0}} icon={<Whatsapp/>} className={classes.root}/> */}
           <BottomNavigationAction style={{padding: 0}} icon={<GitHub/>} className={classes.root}/>
       </BottomNavigation>
    )
}

export default Footer
