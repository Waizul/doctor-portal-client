import React, { createContext } from 'react';
import useFirebase from '../hook/useFirebase';

export const authContext = createContext('');

const ProvideAuth = ({ children }) => {
	const allContext = useFirebase();
	return (
		<authContext.Provider value={allContext}>
			{children}
		</authContext.Provider>
	);
};

export default ProvideAuth;
