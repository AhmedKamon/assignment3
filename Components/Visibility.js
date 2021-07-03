import { Grid, Button, Typography, Container, Paper } from '@material-ui/core';
import { makeStyles } from '@material-ui/core'
import Image from 'next/image'
import audit from '../public/aduit.png'
import connect from '../public/connect.png'
import gmb from '../public/gmb.png'
import label from '../public/label.jpg.png'
import location from '../public/location.png'
import monitor from '../public/monitor.png'
import tool from '../public/tool.png'
import view from '../public/view.png'
import nie from '../public/nielson-hall-iprospect.png'
import star from '../public/star.png'

const useStyles = makeStyles({
    mainBG: {
        backgroundColor: "#f1f6f5",
        height: "900px",
        padding: '20px '
    },
    text: {
        paddingTop: "50px",
    },
    btn: {
        backgroundColor: '#a5c559',
        color: 'white',
        fontSize: '20px',
        padding: '10px 40px',
        borderRadius: '50px',
        margin: '10px 0px',
        cursor: 'pointer'
    },
    user: {
        backgroundColor: 'white',
        height: '600px',
        padding: '20px',
        boxShadow: "5px 5px 10px"
    },
    userText: {
        color: '#a5c559'
    }

})
const Visibility = () => {
    const classes = useStyles()
    return (

        <div className={classes.mainBG}>


            <div className={classes.text}>
                <Typography variant='h6' align='center' ><h1>Tools that help you rank higher and grow your local search visibility</h1></Typography>
            </div>
            <div className={classes.text}>
                <Container>
                    <Grid container
                        direction="row"
                        justify="space-between"
                        alignItems="center" >
                        <Grid item xs={12} md={9} container
                            direction="row"
                            justify="space-between"
                            alignItems="center" >
                            <Grid item xs={12} md={3} align="center">
                                <Image src={audit} height={150} width={200} alt="Picture of the author" />
                                <h3>Audit citations</h3>
                            </Grid>
                            <Grid item xs={12} md={3} >
                                <Image src={connect} height={150} width={200} alt="Picture of the author" />
                                <h3>Track local rankings</h3>
                            </Grid>
                            <Grid item xs={12} md={3} >
                                <Image src={gmb} height={150} width={200} alt="Picture of the author" />
                                <h3>Monitor and grow</h3>
                            </Grid>
                            <Grid item xs={12} md={3} >
                                <Image src={label} height={150} width={200} alt="Picture of the author" />
                                <h3>View and reply to reviews</h3>
                            </Grid>
                            <Grid item xs={12} md={3} >
                                <Image src={view} height={150} width={200} alt="Picture of the author" />
                                <h3>White-label reporting</h3>
                            </Grid>
                            <Grid item xs={12} md={3} >
                                <Image src={location} height={150} width={200} alt="Picture of the author" />
                                <h3>Multi-Location reporting</h3>
                            </Grid>
                            <Grid item xs={12} md={3} >
                                <Image src={monitor} height={150} width={200} alt="Picture of the author" />
                                <h3>Connect Google Analytics</h3>
                            </Grid>
                            <Grid item xs={12} md={3} >
                                <Image src={tool} height={150} width={200} alt="Picture of the author" />
                                <h3>Audit citations</h3>
                            </Grid>
                            <Grid item xs={12} md={12} align='center' className={classes.text} >
                                <Button
                                    type="submit"
                                    variant="contained"
                                    className={classes.btn}
                                >Watch A Demo
                                </Button>
                            </Grid>

                        </Grid>

                        <Grid container item xs={12} md={3} className={classes.user}>
                            <div align='center'  >
                                <h2 className={classes.userText}> BrightLocals tools are a must-have for marketers looking to optimize their organic search results.</h2>
                                <Image src={nie} height={100} width={100} alt="Picture of the author" />
                                <Typography variant='h4' align='center'>Nielson Hall</Typography>
                                <Typography variant='h6' align='center'>Head of SEO</Typography><br />
                                <Typography variant='h6' align='center'>iProspect</Typography>

                            </div>
                            <br />
                            <div className={classes.text}>
                                <Image src={star} height={100} width={500} alt="Picture of the author" />
                            </div>
                        </Grid>


                    </Grid>
                </Container>
            </div>


        </div>
    );
}

export default Visibility;