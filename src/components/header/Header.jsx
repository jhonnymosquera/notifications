import NotificationCount from './NotificationCount';
import MarkRead from './MarkRead';
import './header.css';

function Header({ count, allRead }) {
	return (
		<header className="header">
			<NotificationCount count={count} />
			<MarkRead allRead={allRead} />
		</header>
	);
}

export default Header;
