import React from 'react';

// MUI
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import { makeStyles } from '@material-ui/core/styles';

// SEO
import { NextSeo } from 'next-seo';

// Components
import ProTip from '../src/components/Common/ProTip';
import Copyright from '../src/components/Common/Copyright';
import Navigation from "../src/components/Navigation/Navigation";

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
			<ProTip />
			<Copyright />
		</Container>
	);
}
