import { Grid } from '@mui/material';
import React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';

const Service = ({ service }) => {
	const { name, description, img } = service;
	return (
		<Grid item xs={4} sm={4} md={4}>
			<Card sx={{ minWidth: 275, border: 0, boxShadow: 0 }}>
				<CardMedia
					component='img'
					style={{ width: 'auto', height: '80', margin: '0 auto' }}
					image={img}
					alt=''
				/>
				<CardContent>
					<Typography
						variant='h5'
						sx={{ textAlign: 'center' }}
						component='div'
					>
						{name}
					</Typography>
					<Typography
						variant='body2'
						sx={{ textAlign: 'center' }}
						color='text.secondary'
					>
						{description}
					</Typography>
				</CardContent>
			</Card>
		</Grid>
	);
};

export default Service;
