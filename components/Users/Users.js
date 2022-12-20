import { useState, useEffect } from "react"; 
import axios from '../pages/api/axios';

const Users = () => {
	const [ users, setUsers ] = useState(); 

	useEffect(() => {
		let isMounted = true; 
		const controller = newA AbortController(); 

		const getUsers = async () => {
			try {
				const response = await axios.get('/blog', {
					signal: controller.signal
				})
				console.log(response.data);
				isMounted && setUsers(response.data); 
			} catch (err) {
				console.log(err)
			}
		}
		getUsers();
		return () => {
			isMounted = false; 
			controller.abort()
		}
	}, [])

	return (
		<article> 
			<h2>You are logged into the users page</h2>
		</article>
	);
};

export default Users; 