import { useEffect, useState } from 'react';
import firebaseAuthentication from '../firebase/firebase.config';
import {
	getAuth,
	createUserWithEmailAndPassword,
	signOut,
	signInWithEmailAndPassword,
	onAuthStateChanged,
	GoogleAuthProvider,
	signInWithPopup,
	updateProfile,
} from 'firebase/auth';
firebaseAuthentication();

const useFirebase = () => {
	const [user, setUser] = useState({});
	const [loading, setLoading] = useState(true);
	const [authError, setAuthError] = useState('');
	const auth = getAuth();

	const registerUser = (email, password, name, history) => {
		setLoading(true);
		createUserWithEmailAndPassword(auth, email, password)
			.then((userCredential) => {
				// Signed in
				// const user = userCredential.user;
				const newUser = { email, displayName: name };
				setUser(newUser);
				saveUser(email, name, 'post');
				updateProfile(auth.currentUser, {
					displayName: name,
				})
					.then(() => {})
					.catch((error) => {});
				setAuthError('');
				history.replace('/');
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setLoading(false));
	};
	const logIn = (email, password, history, location) => {
		setLoading(true);
		signInWithEmailAndPassword(auth, email, password)
			.then((result) => {
				// Signed in
				const signedUser = result.user;
				saveUser(signedUser.email, signedUser.displayName, 'put');
				const destination = location?.state?.from || '/';
				history.replace(destination);
				setAuthError('');
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setLoading(false));
	};

	const googleProvider = new GoogleAuthProvider();

	const signInUsingGoogle = (history, location) => {
		setLoading(true);
		signInWithPopup(auth, googleProvider)
			.then((result) => {
				// This gives you a Google Access Token. You can use it to access the Google API.
				const credential =
					GoogleAuthProvider.credentialFromResult(result);
				const token = credential.accessToken;
				// The signed-in user info.
				const signedUser = result.user;
				setUser(signedUser);
				saveUser(signedUser.email, signedUser.displayName, 'put');
				const destination = location?.state?.from || '/';
				history.replace(destination);
			})
			.catch((error) => {
				setAuthError(error.message);
			})
			.finally(() => setLoading(false));
	};

	const logOut = () => {
		signOut(auth)
			.then(() => {
				// Sign-out successful.
			})
			.catch((error) => {
				// An error happened.
			});
	};

	useEffect(() => {
		const unsubscribed = onAuthStateChanged(auth, (user) => {
			if (user) {
				setUser(user);
			} else {
				// User is signed out
				setUser({});
			}
			setLoading(false);
		});
		return () => unsubscribed;
	}, []);

	const saveUser = (email, displayName, method) => {
		const user = { email, displayName };
		fetch('http://localhost:5000/users', {
			method: method,
			headers: {
				'content-type': 'application/json',
			},
			body: JSON.stringify(user),
		}).then();
	};

	return {
		user,
		registerUser,
		logIn,
		signInUsingGoogle,
		logOut,
		loading,
		authError,
	};
};
export default useFirebase;
