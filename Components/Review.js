import { Container, Grid, makeStyles, Paper, Link } from "@material-ui/core";
import * as React from 'react';
import Image from "next/dist/client/image";
import Typography from '@material-ui/core/Typography';
import review1 from '../public/review1.jpg'
import review2 from '../public/review2.jpg'
import review3 from '../public/review3.jpg'
import capterra from '../public/capterra.png'
import trustpilot from '../public/trustpilot-new.png'
import croz from '../public/croz-medal.png'
import gn from '../public/g2-medal.png'
import stars from '../public/Stars_4.5-1.png'
import { styled } from '@material-ui/core/styles';
import Box from '@material-ui/core/Box';
import { urlFor } from "../sanity";

import { sanityClient } from "../sanity";
import { async } from "rxjs";

const Item = styled(Paper)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const useStyles = makeStyles({
    main: {
        backgroundColor: "#f1f6f5",
        paddingTop: '100px ',
        paddingBottom: '50px'

    },
    mainBG: {
        backgroundColor: "#f1f6f5",
        paddingTop: '20px ',
    },

    text: {
        padding: '10px 50px 10px 10px'
    },
    bottom: {
        marginTop: '7%',
        marginBottom: '5%'
    }


})


const Review = ({ properties }) => {

    console.log(properties)
    const classes = useStyles()

    return (

        <div className={classes.main}>
            <Typography variant='h2' align='center'>
                Dont just take our word for it...
            </Typography>
            <Container className={classes.mainBG}>

                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={2}>
                        <Grid item xs={6} md={4}>
                            <Paper elevation={6} square >
                                <Image src={review1} alt="Picture of the author" />
                                <div className={classes.text}>
                                    <h3>If you want to save time and save money, then BrightLocal must be part of your local SEO toolkit.</h3>
                                    <br />
                                    <br />
                                    <br />
                                    <p>Susan Hallam MBE</p>
                                    <h3>Managing Director, Hallam Internet</h3>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Paper elevation={6} square >
                                <Image src={review2} alt="Picture of the author" />
                                <div className={classes.text}>
                                    <h3>Having BrightLocal on your side is then BrightLocal must be part   like having a full-time local SEO staff..</h3>
                                    <br />
                                    <br />
                                    <br />
                                    <p>Casey Marez</p>
                                    <h3>Founder and CEO, Juris Digital</h3>
                                </div>
                            </Paper>
                        </Grid>
                        <Grid item xs={6} md={4}>
                            <Paper elevation={6} square >
                                <Image src={review3} alt="Picture of the author" />
                                <div className={classes.text} style={{ padding: '10px 50px 10px 10px' }}>
                                    <h3>Easy to understand and goes deep enough to e data in a fraction of the time it would take manually.</h3>
                                    <br />
                                    <br />
                                    <br />
                                    <p>Mike Ramsey</p>
                                    <h3>President, Nifty Marketing</h3>
                                </div>
                            </Paper>
                        </Grid>
                    </Grid>
                </Box>
            </Container>

            <Container className={classes.bottom}>
                <Box sx={{ flexGrow: 1 }}>
                    <Grid container spacing={8}>
                        <Grid item xs={6} md={3} align='center'>
                            <Image src={gn} alt="Picture of the author" />
                            <br />
                            <br />
                            <Image src={stars} alt="Picture of the author" />
                            <br />
                            <h2>4.8 stars out of 5</h2>
                        </Grid>
                        <Grid item xs={6} md={3} align='center'>
                            <Image src={trustpilot} alt="Picture of the author" />
                            <br />
                            <br />
                            <Image src={stars} alt="Picture of the author" />
                            <br />
                            <h2>4.8 stars out of 5</h2>
                        </Grid>
                        <Grid item xs={6} md={3} align='center'>
                            <Image src={croz} alt="Picture of the author" />
                            <br />
                            <br />
                            <Image src={stars} alt="Picture of the author" />
                            <br />
                            <h2>4.8 stars out of 5</h2>
                        </Grid>
                        <Grid item xs={6} md={3} align='center'>
                            <Image src={capterra} alt="Picture of the author" />
                            <br />
                            <br />
                            <Image src={stars} alt="Picture of the author" />
                            <br />
                            <h2>4.8 stars out of 5</h2>
                        </Grid>


                    </Grid>
                </Box>
            </Container>

            <Container className={classes.bottom}>
                <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={8} >
                        {properties.map((property) => (
                            <Grid item xs={6} md={4} key={property._id}>
                                <h2 align='center' color='primary'>
                                    {property.title}
                                </h2>
                                <Typography variant='h6'>
                                {property.description}
                                </Typography>
                            </Grid>
                        ))}
                    </Grid>
                </Box>
            </Container>

        </div>
    );
}




// export const getServerSideProps = async () =>{
//     const query = `*[_type == "property"]`
//     const properties = await sanityClient.fetch(query)

//     if(!properties.length){
//         return {
//             props:{
//                 properties: []
//             },
//         }
//     } else{
//         return{
//             props:{
//                 properties
//             }
//         }
//     }
// }

export default Review;