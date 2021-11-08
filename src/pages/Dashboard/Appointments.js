import React, { useEffect, useState } from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

import useAuth from '../../hook/useAuth';

const Appointments = ({ date }) => {
	const [appointments, setAppointments] = useState([]);
	const localDate = date.toLocaleDateString();
	console.log(localDate);
	const { user } = useAuth();
	useEffect(() => {
		fetch(
			`http://localhost:5000/appointments?email=${user.email}&date=${localDate}`,
		)
			.then((res) => res.json())
			.then((data) => {
				setAppointments(data);
				console.log(data);
			});
	}, [localDate]);
	return (
		<div>
			{appointments.length}
			<TableContainer component={Paper}>
				<Table
					sx={{ minWidth: 450 }}
					size='small'
					aria-label='a dense table'
				>
					<TableHead>
						<TableRow>
							<TableCell>Patient Name</TableCell>
							<TableCell align='center'>Time</TableCell>
							<TableCell align='center'>Department</TableCell>
							<TableCell align='right'>Action</TableCell>
						</TableRow>
					</TableHead>
					<TableBody>
						{appointments.map((row) => (
							<TableRow
								key={row._id}
								sx={{
									'&:last-child td, &:last-child th': {
										border: 0,
									},
								}}
							>
								<TableCell component='th' scope='row'>
									{row.patientName}
								</TableCell>
								<TableCell align='right'>{row.time}</TableCell>
								<TableCell align='right'>
									{row.serviceName}
								</TableCell>
								<TableCell align='right'>{row.carbs}</TableCell>
								<TableCell align='right'>
									{row.protein}
								</TableCell>
							</TableRow>
						))}
					</TableBody>
				</Table>
			</TableContainer>
		</div>
	);
};

export default Appointments;
