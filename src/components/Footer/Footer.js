import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import { Container, Grid, Typography, Link } from '@material-ui/core';
import TwitterImage from '../../assets/img/twitter.png';
import GithubImage from '../../assets/img/github.png';
import TelegramImage from '../../assets/img/telegram.png'	;
import DiscordImage from '../../assets/img/discord.png';
import YoutubeImage from '../../assets/img/youtube.png';

const useStyles = makeStyles((theme) => ({
	footer: {
		position: 'absolute',
		bottom: '0',
		paddingTop: '15px',
		paddingBottom: '15px',
		width: '100%',
		color: 'white',
		backgroundColor: '#121212',
		textAlign: 'center',
		height: '1.3rem',
		[theme.breakpoints.down('xs')]: {
			display: 'none',
		},
	},
	link: {
		width: '24px',
		height: '24px',
		display: 'inline',
		marginLeft: '20px',
		color:"#121212"
	},

	img: {
		width: '24px',
		height: '24px',
		color:"#121212"
	},
}));

const Footer = () => {
	const classes = useStyles();
	return (
		<footer className={classes.footer}>
			<Container maxWidth="lg">
				<Grid container>
					<Grid item xs={6}>
						<Typography variant="body2" color="textSecondary" align="left">
							{'Copyright © TOMP Finance '}
							{new Date().getFullYear()}
						</Typography>
					</Grid>
					<Grid item xs={6} style={{ textAlign: 'right' }}>
						<a
							href="https://twitter.com/_TOMP"
							rel="noopener noreferrer"
							target="_blank"
							className={classes.link}
						>
							<img alt="twitter" src={TwitterImage} className={classes.img} />
						</a>
						<a href="https://bit.ly/3AUcaBI" rel="noopener noreferrer" target="_blank" className={classes.link}>
							<img alt="telegram" src={TelegramImage} className={classes.img} />
						</a>
						<a
							href="https://github.com/TOMP"
							rel="noopener noreferrer"
							target="_blank"
							className={classes.link}
						>
							<img alt="github" src={GithubImage} className={classes.img} />
						</a>
						<a href="https://discord.gg/TOMP" rel="noopener noreferrer" target="_blank" className={classes.link}>
							<img alt="discord" src={DiscordImage} className={classes.img} />
						</a>
					</Grid>
				</Grid>
			</Container>
		</footer>
	);
};

export default Footer;
