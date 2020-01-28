import React from 'react';

// MUI
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Box } from '@material-ui/core';

// Components
import Navigation from "./Navigation";
import Hero from './Hero';
import Localization from './Localization';

const useStyles = makeStyles(theme => ({
	root: {
		width: "100%",
		maxWidth: "100%",
		padding: 0,
		backgroundColor: theme.palette.background.default
	}
}));

export default function Demo() {
	const classes = useStyles();

	const gridContainer = {
		display: "flex",
		justifyContent: "center",
		m: 1,
		p: 1
	}

	return (
		<Container className={classes.root} >
			<Navigation />
			<Box {...gridContainer}>
				<Box p={1}>
					<Localization />
				</Box>
				<Box p={1}>
					<Hero />
				</Box>
			</Box>
		</Container>
	);
}
