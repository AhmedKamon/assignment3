import { Container, ButtonGroup, Button, makeStyles } from "@material-ui/core";
import React, { useState } from "react";
import Title1 from '../public/title1.png'
import Title2 from '../public/title2.png'
import Image from 'next/image'

const useStyles = makeStyles({
    space: {
      paddingTop:'50px'
    },
    mainContainer: {
        backgroundColor: "#f9faf8",
        padding: '20px 20px'
    },
    text:{
        fontSize:'50px'
    }
   
})


const Cost = () => {
    const classes = useStyles()
    const [toggled, setToggled] = useState(true);

    const toggleImage = () => setToggled(!toggled);

    return (
        <div className={classes.mainContainer}>
            <Container align='center'>
                <h1 className={classes.text}>The most complete and cost-effective set of <br /> tools to tackle local SEO</h1>
                <h2>From just $1.50 per location per month!</h2>
                <p>(Based on tracking 50 locations on our SEO Pro plan – just $79/month)</p>
            </Container>
            <div>
                <Container align='center'  >
                    <ButtonGroup disableElevation variant="contained" color="primary" className={classes.space}>
                        <Button onClick={toggleImage}>Features</Button>
                        <Button onClick={toggleImage}>Pricing</Button>
                    </ButtonGroup>
                    <div className={classes.space}>
                        
                        {toggled ? <Image src={Title1}  alt="Picture of the author" /> : <Image src={Title2} alt="Picture of the author" />}

                    </div>
                </Container>
            </div>
        </div>


    );
}

export default Cost;