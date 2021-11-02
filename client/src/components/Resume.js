import React from 'react'
import { makeStyles } from '@material-ui/core/styles'
import { Typography, Box} from '@material-ui/core'
import Navbar from './Navbar'

const useStyles = makeStyles(theme=>({
    toolbarMargin:{
       ...theme.mixins.toolbar
    },
    
    mainContainer:{
        background: '#223'
    },
    timeLine: {
        position: 'relative',
        padding: '1rem',
        margin: '0 auto',
        '&:before':{
            content: "''",
            position: 'absolute',
            height: '100%',
            border: '1px solid tan',
            right: '40px',
            top:0
        },
        '&:after': {
            content:"''",
            display: 'table',
            clear:'both'
        },
        [theme.breakpoints.up('md')]:{
            padding: '2rem',
            '&:before':{
                left:'calc(50% - 1px)',
                right:'auto'
            }
        }
    },
    timeLineItem:{
        padding: '1rem',
        borderBottom: '2px solid tan',
        position: 'relative',
        margin: '1rem 3rem 1rem 1rem',
        clear: 'both',
        '&:after':{
            content: "''", 
            position: 'absolute'
        },
        '&:before':{
            content:"''",
            position: 'absolute',
            right:'0.625rem',
            top:'calc(50% - 5px)',
            borderStyle:'solid',
            borderColor: 'tomato tomato transparent transparent',
            borderWidth: '0.625rem',
            transform: 'rotate(45deg)'
        },
        [theme.breakpoints.up('md')]:{
            width: '44%',
            margin: '1rem',
            '&:nth-of-type(2n)':{
                float: 'right',
                margin: '1rem',
                borderColor:'tan'
            },
            '&:nth-of-type(2n):before':{
                right: 'auto', 
                left: '-0.625rem', 
                borderColor: 'transparent transparent tomato tomato'
            }
        }

    },
    timeLineYear:{
        textAlign: 'center',
        maxWidth: '9.375rem',
        margin: '0 3rem 0 auto',
        fontSize: '1.8rem',
        background: 'tomato',
        color: 'white',
        lineHeight: 1,
        padding: '0.5rem 0 1rem',
        '&:before': {
            display: 'none'
        },
        [theme.breakpoints.up('md')]:{
            textAlign: 'center',
            margin: '0 auto',
            '&:nth-of-type(2n)':{
                float: 'none',
                margin: '0 auto'
            },
            '&:nth-of-type(2n):before':{
                display:'none'
            }
        }
    },
    heading: {
        color: 'tomato',
        padding: '3rem 0',
        textTransform:'uppercase'
    },
    subHeading:{
        color: 'white',
        padding: '0',
        textTransform:'uppercase'
    }
}))


const Resume = () => {
    const classes =useStyles();


    return (
       <React.Fragment>
            <div className={classes.toolbarMargin}/>
           <Navbar/>
           <Box component='header' className={classes.mainContainer}>
               <Typography variant='h4' align='center' className={classes.heading}> EDUCATION</Typography>
              
                <Box component='div' className={classes.timeLine}>
                <Typography variant='h2' className={ `${classes.timeLineYear} ${classes.timeLineItem}`}>  2020
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant='h5' align='center' className={classes.subHeading}>
                        National Diploma (ND)
                    </Typography>
                    <Typography variant='body1'  style={{color: 'tomato'}}>
                       Yaba College of Technology, Yaba 
                    </Typography>   
                    <Typography variant='subtitle1'  style={{color: 'tan'}}>
                      Ordinary National Diploma in Computer Science, Yaba College of Technology, Yaba, Lagos.
                    </Typography>
                </Box>
                
                <Typography variant='h2' className={ `${classes.timeLineYear} ${classes.timeLineItem}`}>  2014
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant='h5' align='center' className={classes.subHeading}>
                        Senior Secondary School Certificate Examination (SSCE)
                    </Typography>
                    <Typography variant='body1'  style={{color: 'tomato'}}>
                       Adenrele High School, Ifo
                    </Typography>   
                    <Typography variant='subtitle1'  style={{color: 'tan'}}>
                       Senior Secondary School Certificate Exam (SSCE), Adenrele High School, Ifo, Ogun State.
                    </Typography>
                </Box>
                
                
                <Typography variant='h2' className={ `${classes.timeLineYear} ${classes.timeLineItem}`}>  2009
                </Typography>
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant='h5' align='center' className={classes.subHeading}>
                      First School Leaving Certificate (FSLC)
                    </Typography>
                    <Typography variant='body1'  style={{color: 'tomato'}}>
                      Frontline International Nur &amp; Pry School, Ifo Ogun State.
                    </Typography>   
                    <Typography variant='subtitle1'  style={{color: 'tan'}}>
                      First School Leaving Certificate, Frontline International Nursery and Primary School, Ifo, Ogun State
                    </Typography>
                </Box>
                </Box>

                <Typography variant='h4' align='center' className={classes.heading}> Skill</Typography>

                <Box component='div' className={classes.timeLine}>

                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant='h5' align='center' className={classes.subHeading}>
                       Web Development
                    </Typography>
                    <Typography variant='body1'  style={{color: 'tomato'}}>
                    Programming Laguages and Frameworks
                    </Typography>   
                    <Typography variant='subtitle1'  style={{color: 'tan'}}>
                        Vanilla Javascript, Reactjs, Nodejs, SASS, Hmtl, CSS, Material-UI, Bootstrap
                    </Typography>
                </Box>
                
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant='h5' align='center' className={classes.subHeading}>
                       VERSION CONTROL SYSTEM (VCS)
                    </Typography>
                    <Typography variant='body1'  style={{color: 'tomato'}}>
                       Git
                    </Typography>   
                    <Typography variant='subtitle1'  style={{color: 'tan'}}>
                       Git and Github
                    </Typography>
                </Box>
                
                <Box component="div" className={classes.timeLineItem}>
                    <Typography variant='h5' align='center' className={classes.subHeading}>
                       Development Tools
                    </Typography>
                    <Typography variant='body1'  style={{color: 'tomato'}}>
                       Technologies
                    </Typography>   
                    <Typography variant='subtitle1'  style={{color: 'tan'}}>
                       Heroku, Netlify, MongoDB, Firebase.
                    </Typography>
                </Box>
            </Box>



            <Typography variant='h4' align='center' className={classes.heading}> Experience</Typography>
              
              <Box component='div' className={classes.timeLine}>
                  
                  
                  <Typography variant='h2' className={ `${classes.timeLineYear} ${classes.timeLineItem}`}>  2021
                  </Typography>
                  <Box component="div" className={classes.timeLineItem}>
                      <Typography variant='h5' align='center' className={classes.subHeading}>
                         Front-End Mentor
                      </Typography>
                      <Typography variant='body1'  style={{color: 'tomato'}}>
                        Code Clan Nigeria
                      </Typography>   
                      <Typography variant='subtitle1'  style={{color: 'tan'}}>
                         Front-End Mentor at Code Clan Nigeria Community.
                      </Typography>

                  </Box>
                  <Box component="div" className={classes.timeLineItem}>
                      <Typography variant='h5' align='center' className={classes.subHeading}>
                         Intern
                      </Typography>
                      <Typography variant='body1'  style={{color: 'tomato'}}>
                        MBC Securities 
                      </Typography>   
                      <Typography variant='subtitle1'  style={{color: 'tan'}}>
                         Intern at MBC Securities, St. Nicholas House, Obalende, Lagos.
                      </Typography>

                  </Box>


                  <Typography variant='h2' className={ `${classes.timeLineYear} ${classes.timeLineItem}`}>  2018
                  </Typography>
                  <Box component="div" className={classes.timeLineItem}>
                      <Typography variant='h5' align='center' className={classes.subHeading}>
                          IT Support
                      </Typography>
                      <Typography variant='body1'  style={{color: 'tomato'}}>
                         LGT Innovatives
                      </Typography>   
                      <Typography variant='subtitle1'  style={{color: 'tan'}}>
                         IT Support at LGT Innovatives, Yaba, Lagos.
                      </Typography>
                  </Box>
                
                  
  
              </Box>

           </Box>


          
       </React.Fragment>
         
    )
}

export default Resume;
