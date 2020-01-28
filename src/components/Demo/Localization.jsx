import React from 'react';
import {
    Card,
    CardHeader,
    CardContent,
    Typography,
    Icon,
    IconButton,
    GridList,
    GridListTile,
    TextField,
    Button,
    Container
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

const withStyles = makeStyles(theme => ({
    iconImg: {
        verticalAlign: 'middle'
    },
    savedAddressLink: {
        float: 'right'
    },
    dealsButton: {
        backgroundColor: theme.palette.pizzaHutRed.main,
        color: theme.palette.background.default,
    },
    iconBtn: {
        borderRadius: 0,
        '&:hover': {
            background: "none",
        }
    }
}));

export default function Localization() {
    const classes = withStyles();

    return (
        <Card raised>
            <CardHeader
                title={
                    <Typography variant="h4">
                        Start Here
                    </Typography>
                }
                avatar={
                    <Icon>
                        <img src="/images/localization_icon.png" className={classes.iconImg} />
                    </Icon>
                }
                subheader="Find your store to see local deals"
            />
            <CardContent>
                <GridList cellHeight={50} cols={2}>
                    <GridListTile>
                        <IconButton variant="outlined" className={classes.iconBtn}>
                            <img src="/images/delivery_icon.png" className={classes.iconImg} />
                            <Typography variant="subtitle2">
                                DELIVERY
                            </Typography>
                        </IconButton>
                    </GridListTile>
                    <GridListTile>
                        <IconButton variant="outlined" className={classes.iconBtn}>
                            <img src="/images/carryout_icon.png" className={classes.iconImg} />
                            <Typography variant="subtitle2">
                                CARRYOUT
                            </Typography>
                        </IconButton>
                    </GridListTile>
                </GridList>
                <Container>
                    <a href="" className={classes.savedAddressLink}>Use saved address</a>
                    <TextField
                        label="Zip code"
                        helperText="Enter zip code"
                    />
                </Container>
                <Container>
                    <Button fullWidth className={classes.dealsButton}>FIND DEALS</Button>
                </Container>
            </CardContent>
        </Card>
    )
}