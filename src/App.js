import Home from './pages/Home/Home/Home';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Appointment from './pages/Appointment/Appointment';
import Login from './pages/Login/Login';
import Register from './pages/Register/Register';
import ProvideAuth from './context/ProvideAuth';
import PrivateRoute from './pages/PrivateRoute/PrivateRoute';
import Dashboard from './pages/Dashboard/Dashboard';
import Navbar from './pages/Shared/Navigation/Navbar';

function App() {
	return (
		<ProvideAuth>
			<Router>
				<Navbar></Navbar>
				<Switch>
					<Route exact path='/'>
						<Home></Home>
					</Route>
					<Route path='/home'>
						<Home></Home>
					</Route>
					<PrivateRoute path='/appointment'>
						<Appointment></Appointment>
					</PrivateRoute>
					<PrivateRoute path='/dashboard'>
						<Dashboard></Dashboard>
					</PrivateRoute>
					<Route path='/login'>
						<Login></Login>
					</Route>
					<Route path='/register'>
						<Register></Register>
					</Route>
				</Switch>
			</Router>
		</ProvideAuth>
	);
}
export default App;
