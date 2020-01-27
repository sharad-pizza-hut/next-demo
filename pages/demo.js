import React from 'react';

// MUI
import Container from '@material-ui/core/Container';
import { makeStyles } from '@material-ui/core/styles';
import { Grid } from '@material-ui/core';

// SEO
import { NextSeo } from 'next-seo';

// Components
import Navigation from "../src/components/Navigation/Navigation";
import Hero from '../src/components/Hero/Hero';
import Localization from '../src/components/Localization/Localization';

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
	return (
		<Container className={classes.root} >
			<NextSeo
				title="Demo"
				description="This is the demo.js page. This is being set by the NextSEO component."
			/>
			<Navigation />
			<Grid container spacing={2}>
				<Grid item xs={4}>
					<Localization />
				</Grid>
				<Grid item xs={8}>
					<Hero />
				</Grid>

			</Grid>
			
		</Container>
	);
}
