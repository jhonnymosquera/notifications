import { createContext, useState, useEffect } from 'react';
import { users as data } from '../data/data';

export const Context = createContext();

export function ContextProviders(props) {
	const [users, setUsers] = useState([]);

	useEffect(() => {
		setUsers(data);
	}, []);

	return <Context.Provider value={{ users }}>{props.children}</Context.Provider>;
}
