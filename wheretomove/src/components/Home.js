import React, {useState, useEffect} from 'react';
import { Container, Typography, Link, ProTip, Button, Box } from '@material-ui/core';

const Copyright = () => {
	return (
		<Typography variant="body2" color="textSecondary" align="center">
			{'Copyright @ '}
			<Link color="inherit" href="https://material-ui.com/">
				Your Website
			</Link>{' '}
			{new Date().getFullYear()}
			{'.'}
		</Typography>
	)
}

export const Home = () => {
	return (
		<>
			<Container maxWidth='sm'>
				<Box my={4}>
					<Typography variant='h4' component="h1" gutterBottom>
						AI Express
					</Typography>
					<Typography variant='body2' color="textSecondary">
						Find out where to move in South Korea
					</Typography>
				</Box>
				<Box>
					
				</Box>
			</Container>
		</>
	)
}