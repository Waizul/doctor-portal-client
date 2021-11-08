import { Grid } from '@mui/material';
import React from 'react';
import Booking from '../Booking/Booking';

const bookings = [
	{
		id: 1,
		name: 'Teeth Orthodontics',
		time: '08.00 AM - 09.00 AM',
		space: 10,
	},
	{
		id: 2,
		name: 'Cosmetic Dentistry',
		time: '09.00 AM - 10.00 AM',
		space: 8,
	},
	{
		id: 3,
		name: 'Teeth Cleaning',
		time: '10.00 AM - 11.00 AM',
		space: 10,
	},
	{
		id: 4,
		name: 'Cavity Protection',
		time: '1100 AM - 12.00 PM',
		space: 10,
	},
	{
		id: 5,
		name: 'Teeth Orthodontics',
		time: '08.00 AM - 09.00 AM',
		space: 10,
	},
	{
		id: 6,
		name: 'Teeth Orthodontics',
		time: '08.00 AM - 09.00 AM',
		space: 10,
	},
];
const AvailableAppointment = ({ date }) => {
	return (
		<div>
			<h3>available appointment ON {date.toDateString()}</h3>
			<Grid container spacing={2}>
				{bookings.map((booking) => (
					<Booking
						booking={booking}
						date={date}
						key={booking.id}
					></Booking>
				))}
			</Grid>
		</div>
	);
};

export default AvailableAppointment;
