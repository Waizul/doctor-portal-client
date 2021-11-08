import {
	Card,
	CardContent,
	CardMedia,
	Container,
	Grid,
	Typography,
} from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import people1 from '../../../images/people-1.png';
const Testimonial = () => {
	return (
		<Container>
			<h5>Testimonial</h5>
			<h2> What our patients say </h2>
			<Grid container spacing={2}>
				<Grid xs={12} sm={4} md={4}>
					<Card
						variant='outlined'
						sx={{ width: 275, textAlign: 'center', px: 5 }}
					>
						{' '}
						<CardContent>
							<Typography
								sx={{ fontSize: 14 }}
								color='text.secondary'
								gutterBottom
							>
								Word of the Day
								ehrfasdhofhoawherfhaohasoihfioshdoifhosohawsfhoasidhoifhasoihfhy
							</Typography>
						</CardContent>
						<Box
							sx={{
								display: 'flex',

								alignItems: 'center',
								textAlign: 'center',
							}}
						>
							<CardMedia
								sx={{ width: 'auto', height: 55, mr: 2 }}
								component='img'
								image={people1}
								alt=''
							/>
							<Typography sx={{ textAlign: 'center' }}>
								<span style={{ color: 'skyblue' }}>
									{' '}
									William Henry
								</span>
								<br />
								<span style={{ fontSize: 14 }}>
									{' '}
									California
								</span>
							</Typography>
						</Box>
					</Card>
				</Grid>
				<Grid xs={12} sm={4} md={4}>
					<Card variant='outlined'>
						{' '}
						<CardContent>
							<Typography
								sx={{ fontSize: 14 }}
								color='text.secondary'
								gutterBottom
							>
								Word of the Day
							</Typography>
						</CardContent>
						<Box
							sx={{
								display: 'flex',

								alignItems: 'center',
								textAlign: 'center',
							}}
						>
							<CardMedia
								sx={{ width: 'auto', height: 55, mr: 2 }}
								component='img'
								image={people1}
								alt=''
							/>
							<Typography sx={{ textAlign: 'center' }}>
								<span style={{ color: 'skyblue' }}>
									{' '}
									William Henry
								</span>
								<br />
								<span style={{ fontSize: 14 }}>
									{' '}
									California
								</span>
							</Typography>
						</Box>
					</Card>
				</Grid>
				<Grid xs={12} sm={4} md={4}>
					<Card variant='outlined'>
						{' '}
						<CardContent>
							<Typography
								sx={{ fontSize: 14 }}
								color='text.secondary'
								gutterBottom
							>
								Word of the Day
							</Typography>
						</CardContent>
						<Box
							sx={{
								display: 'flex',

								alignItems: 'center',
								textAlign: 'center',
							}}
						>
							<CardMedia
								sx={{ width: 'auto', height: 55, mr: 2 }}
								component='img'
								image={people1}
								alt=''
							/>
							<Typography sx={{ textAlign: 'center' }}>
								<span style={{ color: 'skyblue' }}>
									{' '}
									William Henry
								</span>
								<br />
								<span style={{ fontSize: 14 }}>
									{' '}
									California
								</span>
							</Typography>
						</Box>
					</Card>
				</Grid>
			</Grid>
		</Container>
	);
};

export default Testimonial;
