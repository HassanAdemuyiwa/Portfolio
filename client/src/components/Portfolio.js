import React from 'react';
import { makeStyles } from '@material-ui/core/styles'
import Navbar from './Navbar';
import {
    Box,
    Grid,
    Card,
    CardActionArea,
    CardActions,
    CardContent,
    CardMedia,
    Button,
    Typography
} from '@material-ui/core';
import Modal from '@material-ui/core/Modal';
import { FacebookShareButton,  
    EmailShareButton,
    FacebookMessengerShareButton,
    LineShareButton,
    LinkedinShareButton,
    PinterestShareButton,
    RedditShareButton,
    TelegramShareButton,
    TumblrShareButton,
    TwitterShareButton,
    WhatsappShareButton} from "react-share";
import { EmailIcon,
    FacebookIcon,
    FacebookMessengerIcon,
    LineIcon,
    LinkedinIcon,
    PinterestIcon,
    RedditIcon,
    TelegramIcon,
    TumblrIcon,
    TwitterIcon,
    WhatsappIcon } from "react-share"





// import project1 from '../asset/html-css-javascript-lg.jpg'
import project2 from '../asset/javascript-fullstack.jpg'
import project3 from '../asset/react-redux.jpg'
import project4 from '../asset/mern-stack.jpg'
import tinder from '../asset/javascript-fullstack.jpg'

//Modal style
function rand() {
    return Math.round(Math.random() * 20) - 10;
  }
  
  function getModalStyle() {
    const top = 50 + rand();
    const left = 50 + rand();
  
    return {
      top: `${top}%`,
      left: `${left}%`,
      transform: `translate(-${top}%, -${left}%)`,
    };
  }







const useStyles = makeStyles((theme)=>({
    mainContainer: {
        background: '#223',
        height: '100%'
    },
    cardContainer:{
        maxWidth: 345,
        //margin: '3rem',
        margin: '5rem auto'
    },
    paper: {
        position: 'absolute',
        width: 500,
        backgroundColor: theme.palette.background.paper,
        border: '2px solid #000',
        boxShadow: theme.shadows[5],
        padding: theme.spacing(2, 4, 3),
      }
}))


const Portfolio = () => {
    const classes = useStyles()
    const [modalStyle] = React.useState(getModalStyle);
    const [open, setOpen] = React.useState(false);
  
    const handleOpen = () => {
      setOpen(true);
    };
  
    const handleClose = () => {
      setOpen(false);
    };


    const body = (
        <div style={modalStyle} className={classes.paper}>
          <p id="simple-modal-description">
          <FacebookShareButton url="https://tinder-clone-169b6.firebaseapp.com/">
            <FacebookIcon size={32} round={true} /> <br/>facebook
          </FacebookShareButton>
          <WhatsappShareButton url="https://tinder-clone-169b6.firebaseapp.com/">
            <WhatsappIcon size={32} round={true} /><br/>WhatsApp
          </WhatsappShareButton>
          <FacebookMessengerShareButton url="https://tinder-clone-169b6.firebaseapp.com/">
            <FacebookMessengerIcon size={32} round={true} /><br/>Messenger
          </FacebookMessengerShareButton>
        <LinkedinShareButton url="https://tinder-clone-169b6.firebaseapp.com/">
            <LinkedinIcon size={32} round={true} /><br/>LinkedIn
          </LinkedinShareButton>
          <TelegramShareButton url="https://tinder-clone-169b6.firebaseapp.com/">
            <TelegramIcon size={32} round={true} /><br/>Telegram
          </TelegramShareButton>
          <EmailShareButton url="https://tinder-clone-169b6.firebaseapp.com/">
            <EmailIcon size={32} round={true} /> <br/>Email
          </EmailShareButton>
          <LineShareButton url="https://tinder-clone-169b6.firebaseapp.com/">
            <LineIcon size={32} round={true} /><br/>Line
          </LineShareButton>
          <PinterestShareButton url="https://tinder-clone-169b6.firebaseapp.com/">
            <PinterestIcon size={32} round={true} /><br/>Pinterest
          </PinterestShareButton>
          <RedditShareButton url="https://tinder-clone-169b6.firebaseapp.com/">
            <RedditIcon size={32} round={true} /><br/>Reddit
          </RedditShareButton>
          <TwitterShareButton url="https://tinder-clone-169b6.firebaseapp.com/">
            <TwitterIcon size={32} round={true} /><br/> Twitter
          </TwitterShareButton>
          <TumblrShareButton url="https://tinder-clone-169b6.firebaseapp.com/">
            <TumblrIcon size={32} round={true} /><br/>Tumblr
          </TumblrShareButton>
         
          </p>
        </div>
      );




    return (
        <React.Fragment>
            <Box component='div' className={classes.mainContainer}>
              <Navbar />   
              <Grid container justify='center'>
                  {/* Tinder clone */}
                  <Grid item xs={12} sm={8} md={6}>
                  <Card className={classes.cardContainer}>
                      <CardActionArea>
                          <CardMedia component="img" alt="Project 1" height='140' image={tinder}/>
                         <CardContent>
                             <Typography gutterBottom variant='h5'>
                                 Tinder Clone
                             </Typography>
                             <Typography variant='body2' color='textSecondary' component='p'>
                                 Do ullamco sunt ullamco officia dolore ullamco non esse et. Dolor tempor non enim nisi consectetur anim. Qui ut ea pariatur qui commodo ea nulla ea adipisicing reprehenderit. Nisi in enim consequat dolor consequat laboris aliquip tempor sint reprehenderit elit cillum non. Elit duis aute fugiat ipsum nostrud nulla eiusmod adipisicing labore.
                             </Typography>
                         </CardContent>
                      </CardActionArea>
                         <CardActions>
                             <Button size='small' color='primary' onClick={handleOpen}>
                                 Share
                             </Button>
                              <Button size='small' color='primary' href="https://tinder-clone-169b6.firebaseapp.com/" target_blank>
                                 Live Demo
                             </Button>
                         </CardActions>
                         <Modal
                         open={open}
                        onClose={handleClose}
                        aria-labelledby="simple-modal-title"
                        aria-describedby="simple-modal-description"
                        >
                            {body}
                        </Modal>
                  </Card>
                  </Grid>

                 {/* Project2 */}
                 <Grid item xs={12} sm={8} md={6}>
                  <Card className={classes.cardContainer}>
                      <CardActionArea>
                          <CardMedia component="img" alt="Project 2" height='140' image={project2}/>
                         <CardContent>
                             <Typography gutterBottom variant='h5'>
                                 Project 2
                             </Typography>
                             <Typography variant='body2' color='textSecondary' component='p'>
                                 Do ullamco sunt ullamco officia dolore ullamco non esse et. Dolor tempor non enim nisi consectetur anim. Qui ut ea pariatur qui commodo ea nulla ea adipisicing reprehenderit. Nisi in enim consequat dolor consequat laboris aliquip tempor sint reprehenderit elit cillum non. Elit duis aute fugiat ipsum nostrud nulla eiusmod adipisicing labore.
                             </Typography>
                         </CardContent>
                         <CardActions>
                             <Button size='small' color='primary'>
                                 Share
                             </Button>
                              <Button size='small' color='primary'>
                                 Live Demo
                             </Button>
                         </CardActions>
                      </CardActionArea>
                  </Card>
                  </Grid>


                {/* Project3 */}
                <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="Project 3" height='140' image={project3}/>
                                <CardContent>
                                    <Typography gutterBottom variant='h5'>
                                        Project 3
                                    </Typography>
                                    <Typography variant='body2' color='textSecondary' component='p'>
                                        Do ullamco sunt ullamco officia dolore ullamco non esse et. Dolor tempor non enim nisi consectetur anim. Qui ut ea pariatur qui commodo ea nulla ea adipisicing reprehenderit. Nisi in enim consequat dolor consequat laboris aliquip tempor sint reprehenderit elit cillum non. Elit duis aute fugiat ipsum nostrud nulla eiusmod adipisicing labore.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                                <CardActions>
                                    <Button size='small' color='primary'>
                                        Share
                                    </Button>
                                    <Button size='small' color='primary'>
                                        Live Demo
                                    </Button>
                                </CardActions>
                        </Card>
                        </Grid>


                {/* Project4 */}
                <Grid item xs={12} sm={8} md={6}>
                        <Card className={classes.cardContainer}>
                            <CardActionArea>
                                <CardMedia component="img" alt="Project 4" height='140' image={project4}/>
                                <CardContent>
                                    <Typography gutterBottom variant='h5'>
                                        Project 4
                                    </Typography>
                                    <Typography variant='body2' color='textSecondary' component='p'>
                                        Do ullamco sunt ullamco officia dolore ullamco non esse et. Dolor tempor non enim nisi consectetur anim. Qui ut ea pariatur qui commodo ea nulla ea adipisicing reprehenderit. Nisi in enim consequat dolor consequat laboris aliquip tempor sint reprehenderit elit cillum non. Elit duis aute fugiat ipsum nostrud nulla eiusmod adipisicing labore.
                                    </Typography>
                                </CardContent>
                            </CardActionArea>
                                <CardActions>
                                    <Button size='small' color='primary'>
                                        Share
                                    </Button>
                                    <Button size='small' color='primary'>
                                        Live Demo
                                    </Button>
                                </CardActions>
                        </Card>
                        </Grid>
              </Grid>
            </Box>
           

           
        </React.Fragment>
    )
}

export default Portfolio
