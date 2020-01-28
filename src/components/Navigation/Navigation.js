/* eslint-disable react/prop-types */
import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Link from '../Common/Link';
import Logo from '../../../public/images/pizza-hut-logo.svg';

// Actions
import { activeClass } from '../../actions/active'

const useStyles = makeStyles(theme => ({
	root: {
		flexGrow: 1
	},
	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
		cursor: "pointer",
	},
	titleFirst: {
		paddingRight: 10,
		cursor: "pointer",
	},
	header: {
		backgroundColor: theme.palette.background.default,
		color: 'black'
	},
	spacing: {
		paddingRight: theme.spacing(2),
	},
	active: {
		color: 'red',
	}
}));

const navLinks = [
	{ route: 'deals', text: 'Deals' },
	{ route: 'menu', text: 'Menu' }
];

const DefaultLogo = () => (
	<Link href="/" color="secondary">
		<Logo />
	</Link>
);

const Items = ({ text, id, activeTab, url, onClick, className, activeClass }) => {
	return (
		<Typography
			variant="h6"
			onClick={onClick}
			id={id}
			className={activeTab === id ? `${className} ${activeClass}` : className}>
			<Link href={`demo/${url}`} style={{ color: "black" }} >
				{text}
			</Link >
		</Typography>
	);
};

const Nav = ({ list, className, activeTab, onClick, activeClass }) => {
	const lastIndex = navLinks.length - 1;
	return list ? (
		list.map((item, index) => (
			<Items
				key={index}
				text={item.text}
				activeClass={activeClass}
				className={index !== lastIndex ? className.titleFirst : className.title}
				id={index}
				onClick={onClick}
				activeTab={activeTab}
				url={item.route}
			/>
		))
	) : (
			<div>No Data</div>
		);
};
export default function Navigation() {
	const classes = useStyles();
	const [items, setlist] = useState([]);

	const active = useSelector(state => state.active.active)
	const dispatch = useDispatch()

	useEffect(() => {
		setlist(navLinks)
	}, []);

	return (
		<div className={classes.root}>
			<AppBar position="static" className={classes.header}>
				<Toolbar>
					<DefaultLogo />
					<Nav list={items} activeClass={classes.active} activeTab={active} className={classes} onClick={e => dispatch(activeClass(e.currentTarget))} />
					<Button color="inherit">Login</Button>
				</Toolbar>
			</AppBar>
		</div>
	);
}