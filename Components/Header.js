import Image from 'next/image'
import { Grid, Container, Button, Typography, Link, } from '@material-ui/core';
import HeaderImg from '../public/SEO-Tools-BrightLocal (1).png'
import { makeStyles } from '@material-ui/core'
import hilton from '../public/hilton-1.png'
import roto from '../public/roto-rooter.png'
import nandos from '../public/nandos.png'
import ikea from '../public/ikea.png'
import ipro from '../public/iprospect.png'
import valbo from '../public/valvoline-1.png'
import top from '../public/top.png'

const useStyles = makeStyles({
    HeaderText: {
        fontWeight: 'bold',
        fontSize: '50px'
    },
    HeaderSubText: {
        fontSize: '20px'
    },
    btn: {
        backgroundColor: '#a5c559',
        color: 'white',
        fontSize: '20px',
        padding: '5px 40px',
        borderRadius: '50px',
        margin: '10px 0px',
        cursor: 'pointer'
    },
    btn1: {
        backgroundColor: '#c75994',
        color: 'white',
        fontSize: '20px',
        padding: '5px 5px',
        borderRadius: '50px',
        margin: '10px 0px',
        cursor: 'pointer'
    },
    btnSide: {
        paddingRight: "10px"
    },
    HeaderImg: {
        marginTop: '30px'
    },
    last: {
        marginTop: "50px"
    },
    last1: {
        marginTop: '60px',
        marginBottom: '50px'
    }

})
const Header = () => {
    const classes = useStyles()
    return (
        <div>
            <Container align='center'>
                <Image src={top} height={120} width={250} alt="Picture of the author" />
                <Typography variant='h1'>
                    <h1 className={classes.HeaderText}>An all-in-one platform to monitor, audit, and <br /> improve local SEO</h1>
                </Typography>
                <Typography variant='h3' >
                    <h3 className={classes.HeaderSubText} >Save time and make smarter decisions with BrightLocal.
                    </h3>
                </Typography>
                <Container>
                    <Grid
                        container
                        direction="row"
                        justify="center"
                        alignItems="center">
                        <Grid item xs={12} md={6} align='center'  >
                            <Button
                                type="submit"
                                variant="contained"
                                className={classes.btn}
                            ><h4>Start a Free Trial</h4>
                            </Button>
                        </Grid>
                        {/* <Grid item xs={12} md={6} align='start'>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.btn1}
                        ><h4>Build Citation</h4>
                        </Button>
                    </Grid> */}

                    </Grid>
                </Container>
                <div className={classes.HeaderImg}>
                    <Image src={HeaderImg} alt="Picture of the author" />
                </div>
                <div className={classes.last}>
                    <Typography variant='h4' >Trusted by top brands, local businesses, and agencies alike</Typography>
                    <Container>
                        <Grid className={classes.last1}
                            container
                            direction="row"
                            justify="space-between"
                            alignItems="center">
                            <Grid item xs={12} md={2} align='end' className={classes.btnSide}>
                                <Image src={hilton} height={150} width={300} alt="Picture of the author" />
                            </Grid>
                            <Grid item xs={12} md={2} align='end' className={classes.btnSide}>
                                <Image src={roto} height={150} width={300} alt="Picture of the author" />
                            </Grid>
                            <Grid item xs={12} md={2} align='end' className={classes.btnSide}>
                                <Image src={nandos} height={150} width={300} alt="Picture of the author" />
                            </Grid>
                            <Grid item xs={12} md={2} align='end' className={classes.btnSide}>
                                <Image src={ikea} height={150} width={300} alt="Picture of the author" />
                            </Grid>
                            <Grid item xs={12} md={2} align='end' className={classes.btnSide}>
                                <Image src={ipro} height={150} width={300} alt="Picture of the author" />
                            </Grid>
                            <Grid item xs={12} md={2} align='end' className={classes.btnSide}>
                                <Image src={valbo} height={150} width={300} alt="Picture of the author" />
                            </Grid>


                        </Grid>
                    </Container>
                </div>

            </Container>
        </div>
    );
}

export default Header;