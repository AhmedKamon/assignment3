import React, { useEffect } from "react";
import { Container, Typography, Button} from "@material-ui/core";
import { makeStyles } from '@material-ui/core'
const UseStyles = makeStyles({
   btn:{
    backgroundColor: '#a5c559',
    color: 'white',
    fontSize: '20px',
    padding: '10px 40px',
    borderRadius: '50px',
    margin: '10px 0px',
    cursor: 'pointer'
   },
})

const ContactMe = () => {
    const classes = UseStyles()
    return (
        <Container align='center' >

            <Typography variant='h2' align='center'> Contact Us</Typography>
            <div  >
                <div >
                </div>
                <div >
                    <div >
                        <div data-aos='fade-left' >
                            <div>
                                <form

                                    action="https://formspree.io/f/xpzklooo"
                                    method="POST"
                                >
                                    <div >

                                        <input style={{ width: '60%', height: '40px', }}

                                            type="text"
                                            id="name"
                                            name="name"
                                            required
                                            placeholder="Enter your name"
                                        />
                                        <br />
                                        <br />
                                    </div>

                                    <div >

                                        <br />
                                        <input
                                            style={{ width: '60%', height: '40px', }}
                                            type="email"
                                            id="email"
                                            name="email"
                                            placeholder="Enter your email"
                                            required
                                        />
                                        <br />
                                        <br />
                                    </div>

                                    <div >

                                        <br />
                                        <textarea
                                            style={{ width: '60%',}}
                                            name="message"
                                            id="message"
                                            cols="10"
                                            rows="6"
                                            placeholder="Enter your message"
                                        ></textarea>
                                    </div>

                                    <br />
                                    <br />

                                    <Button
                                        type="submit"
                                        formTarget="_blank"
                                        className={classes.btn}

                                    >
                                        Submit
                                    </Button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Container>
    );
};

export default ContactMe;