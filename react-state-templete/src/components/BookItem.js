
import React, {Component} from 'react';
import {withStyles} from '@material-ui/core/styles';
import { Grid, ListItem, Paper, Typography } from '@material-ui/core';


const styles = {
    image : {
        width : 80,
        height : 100
    },
    itemArea : {
        width : 360
    }
}

class BookItem extends Component {
    
    render() {
        const { book, classes } = this.props;

        return (
            <ListItem>
                <Paper>
                    <Grid container spacing = {2}>
                        <Grid Item>
                            <image className = { classes.image} src = { book.imgUrl} />
                        </Grid>
                        <Grid item className = { classes.itemArea } >
                            <Typography component = 'h5' variant = 'h5'>
                                { book.title}
                            </Typography>
                            <Typography>
                                {book.author}
                            </Typography>
                        </Grid>
                    </Grid>
                </Paper>
            </ListItem>
        )
    }
}

export default withStyles(styles)(BookItem);