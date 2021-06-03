import Container from "@material-ui/core/Container";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Typography from "@material-ui/core/Typography";
import CssBaseline from "@material-ui/core/CssBaseline";
import Grid from "@material-ui/core/Grid";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import CardActions from "@material-ui/core/CardActions";
import React from "react";
import useStyles from './insertKeynotesCSS';


export default function insertKeynotes() {
    const classes = useStyles();

    return (

        <Container className={classes.root4}>
            <Card className={classes.root}>

                <Card className={classes.root1}>
                    <CardContent>
                        <Typography className={classes.typography}component="h2" variant="h6" color="primary">
                            Speaker 01
                        </Typography>
                    </CardContent>

                </Card>


                <CardContent>

                    <CssBaseline />
                    <Card className={classes.root3}>
                        <CardContent>

                            <img src="" id="myImg" width="140"height="140"/>



                        </CardContent>

                    </Card>

                    <input className={classes.root5} type="file"
                           color="primary"

                    />


                    <div className={classes.paper}>


                        <form className={classes.form} noValidate>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField className={classes.text1}
                                               name="title"
                                               variant="outlined"
                                               required
                                               id="title"
                                               label="Title"

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField className={classes.text2}
                                               name="firstName"
                                               variant="outlined"
                                               required
                                               id="firstName"
                                               label="First Name"

                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField className={classes.text3}
                                               variant="outlined"
                                               required
                                               id="lastName"
                                               label="Last Name"
                                               name="lastName"

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField className={classes.text4}
                                               variant="outlined"
                                               required
                                               id="university"
                                               label="University"
                                               name="unversity"

                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField className={classes.text5}
                                               variant="outlined"

                                               name="description"
                                               label="Description"
                                               type="description"
                                               id="description"


                                    />
                                </Grid>
                                <Grid item xs={12}>

                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                variant="contained"
                                color="white"
                                className={classes.submit}
                            >
                                Save Details
                            </Button>
                            <Grid container justify="flex-end">
                                <Grid item>
                                </Grid>
                            </Grid>
                        </form>
                    </div>
                    <Box mt={5}>

                    </Box>
                </CardContent>
                <CardActions>

                </CardActions>
            </Card>
        </Container>
    );
}