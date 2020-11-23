import React, { useEffect } from 'react'
import { Container, AppBar, Typography, Grow, Grid } from "@material-ui/core";
import { useDispatch } from 'react-redux';

import { getPosts } from './actions/posts';
import memories from './images/memories.png'
import Posts from './components/posts/Posts';
import Form from './components/form/Form';
import useStyles from './styles';

function App() {
    const classes = useStyles();
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(getPosts())
        return () => {

        }
    }, [dispatch])
    return (
        <div>
            <Container maxWidth="lg">
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography className={classes.heading} variant="h2" align="center">Memories</Typography>
                    <img className={classes.image} height="60" src={memories} alt="memories" />
                </AppBar>
                <Grow in>
                    <Container>
                        <Grid container justify="space-between" alignItems="stretch" spacing={3}>
                            <Grid item xs={12} sm={7}>
                                <Posts />
                            </Grid>
                            <Grid item xs={12} sm={4}>
                                <Form />
                            </Grid>
                        </Grid>
                    </Container>
                </Grow>
            </Container>
        </div>
    )
}

export default App
