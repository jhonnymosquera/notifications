import { useState, useEffect } from 'react';
import { Context } from './Context';
import { users as data } from '../data/data';

export function ContextProviders(props) {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		setUsers(data);
	}, []);

	return <Context.Provider value={{ users }}>{props.children}</Context.Provider>;
}
