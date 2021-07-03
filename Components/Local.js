import { Container, Grid, Button, Typography, } from "@material-ui/core";
import { makeStyles } from '@material-ui/core'
import Image from 'next/image'
import head from '../public/Header_Image-1.png'
import isg from '../public/lsg-graphic-dots-2x.png'
import lsa from '../public/LSA_Image_3_Updated.png'
import gmb from '../public/GMB_Image_3.png'
import ct from '../public/CT_Header.png'
import rep from '../public/reputation-manager_hero.png'

const useStyles = makeStyles({
    btn: {
        backgroundColor: '#a5c559',
        color: 'white',
        fontSize: '20px',
        padding: '10px 40px',
        borderRadius: '50px',
        margin: '10px 0px',
        cursor: 'pointer'
    },
    container: {
        marginTop: '7%',

    },
    color: {
        color: '#a5c559'
    },
    mainContainer: {
        backgroundColor: "#f9faf8",
        padding: '20px 20px'
    },
    container1: {
        paddingLeft: "70px"
    }


})

const Local = () => {
    const classes = useStyles()
    return (
        <div className={classes.mainContainer}>
            <Container className={classes.container}>
                <Grid container direction="row" justify="space-between" alignItems="center" >
                    <Grid item xs={12} md={6} >
                        <h3 className={classes.color}> LOCAL SEARCH RANK CHECKER</h3>
                        <h1>Know where you rank, and what to <br /> focus on</h1>
                        <ul>
                            <li><h3>Monitor rankings at city or postal code level</h3></li>
                            <li><h3>Compare rankings for 100s of locations in one report</h3></li>
                            <li><h3>Benchmark rankings vs competitors</h3></li>
                            <li><h3>Uncover localized search volumes so you know the best keywords to target</h3></li>
                        </ul>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.btn}
                        >Start your 14 Days Train
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Image src={head} alt="Picture of the author" />
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.container}>
                <Grid container direction="row" justify="space-between" alignItems="center" >
                    <Grid item xs={12} md={6} >
                        <Image src={isg} alt="Picture of the author" />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.container1}>
                        <h3 className={classes.color}> LOCAL SEARCH GRID</h3>
                        <h1>Put your rankings on the map</h1>
                        <ul>
                            <li><h3>See how much local search visibility you’re really claiming</h3></li>
                            <li><h3>Spot opportunities to outrank competitors</h3></li>
                            <li><h3>Track progress over time and react fast to any drops with a single ‘Average Map Rank’ metric</h3></li>
                            <li><h3>dentify spam in Google My Business profiles</h3></li>
                        </ul>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.btn}
                        >Start your 14 Days Train
                        </Button>
                    </Grid>
                </Grid>
            </Container>

            {/* 2nd part */}

            <Container className={classes.container}>
                <Grid container direction="row" justify="space-between" alignItems="center" >
                    <Grid item xs={12} md={6} >
                        <h3 className={classes.color}> LOCAL SEARCH RANK CHECKER</h3>
                        <h1>Know where you rank, and what to <br /> focus on</h1>
                        <ul>
                            <li><h3>Monitor rankings at city or postal code level</h3></li>
                            <li><h3>Compare rankings for 100s of locations in one report</h3></li>
                            <li><h3>Benchmark rankings vs competitors</h3></li>
                            <li><h3>Uncover localized search volumes so you know the best keywords to target</h3></li>
                        </ul>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.btn}
                        >Start your 14 Days Train
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Image src={lsa} alt="Picture of the author" />
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.container}>
                <Grid container direction="row" justify="space-between" alignItems="center" >
                    <Grid item xs={12} md={6} >
                        <Image src={gmb} alt="Picture of the author" />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.container1}>
                        <h3 className={classes.color}> LOCAL SEARCH GRID</h3>
                        <h1>Put your rankings on the map</h1>
                        <ul>
                            <li><h3>See how much local search visibility you’re really claiming</h3></li>
                            <li><h3>Spot opportunities to outrank competitors</h3></li>
                            <li><h3>Track progress over time and react fast to any drops with a single ‘Average Map Rank’ metric</h3></li>
                            <li><h3>dentify spam in Google My Business profiles</h3></li>
                        </ul>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.btn}
                        >Start your 14 Days Train
                        </Button>
                    </Grid>
                </Grid>
            </Container>
            {/* 3rd part */}
            <Container className={classes.container}>
                <Grid container direction="row" justify="space-between" alignItems="center" >
                    <Grid item xs={12} md={6} >
                        <h3 className={classes.color}> LOCAL SEARCH RANK CHECKER</h3>
                        <h1>Know where you rank, and what to <br /> focus on</h1>
                        <ul>
                            <li><h3>Monitor rankings at city or postal code level</h3></li>
                            <li><h3>Compare rankings for 100s of locations in one report</h3></li>
                            <li><h3>Benchmark rankings vs competitors</h3></li>
                            <li><h3>Uncover localized search volumes so you know the best keywords to target</h3></li>
                        </ul>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.btn}
                        >Start your 14 Days Train
                        </Button>
                    </Grid>
                    <Grid item xs={12} md={6} >
                        <Image src={ct} alt="Picture of the author" />
                    </Grid>
                </Grid>
            </Container>
            <Container className={classes.container}>
                <Grid container direction="row" justify="space-between" alignItems="center" >
                    <Grid item xs={12} md={6} >
                        <Image src={rep} alt="Picture of the author" />
                    </Grid>
                    <Grid item xs={12} md={6} className={classes.container1}>
                        <h3 className={classes.color}> LOCAL SEARCH GRID</h3>
                        <h1>Put your rankings on the map</h1>
                        <ul>
                            <li><h3>See how much local search visibility you’re really claiming</h3></li>
                            <li><h3>Spot opportunities to outrank competitors</h3></li>
                            <li><h3>Track progress over time and react fast to any drops with a single ‘Average Map Rank’ metric</h3></li>
                            <li><h3>dentify spam in Google My Business profiles</h3></li>
                        </ul>
                        <Button
                            type="submit"
                            variant="contained"
                            className={classes.btn}
                        >Start your 14 Days Train
                        </Button>
                    </Grid>
                </Grid>
                
            </Container>
            
        </div>
    );
}

export default Local;