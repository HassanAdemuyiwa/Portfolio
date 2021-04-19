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
import project1 from '../asset/html-css-javascript-lg.jpg'
import project2 from '../asset/javascript-fullstack.jpg'
import project3 from '../asset/react-redux.jpg'
import project4 from '../asset/mern-stack.jpg'

const useStyles = makeStyles({
    mainContainer: {
        background: '#223',
        height: '100%'
    },
    cardContainer:{
        maxWidth: 345,
        //margin: '3rem',
        margin: '5rem auto'
    }
})


const Portfolio = () => {
    const classes = useStyles()



    return (
        <React.Fragment>
            <Box component='div' className={classes.mainContainer}>
              <Navbar />   
              <Grid container justify='center'>
                  {/* Project1 */}
                  <Grid item xs={12} sm={8} md={6}>
                  <Card className={classes.cardContainer}>
                      <CardActionArea>
                          <CardMedia component="img" alt="Project 1" height='140' image={project1}/>
                         <CardContent>
                             <Typography gutterBottom variant='h5'>
                                 Project 1
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
