import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Wrapper, BackgroundPic, Title } from './styles';

import { connect } from 'react-redux';
import Button from '../../components/Button';
import Window from '../../components/Window';
import LoginForm from '../../components/LoginForm';
import RegisterForm from '../../components/RegisterForm';

const HomePage = ({
	currentUser,
}) => {
	const history = useHistory();

	const [window, setWindow] = useState({
		displayed: false,
		children: undefined,
	});

	useEffect(() => {
		setWindow({displayed: false, children: undefined});
	}, [currentUser]);
	
	const buttons = {
		isLoggedIn: [
			{
				key: 'profile',
				handleClick: () => history.push(`/profile/${currentUser?.id}`),
				buttonText: 'My profile',
			},
		],
		isNotLoggedIn: [
			{
				key: 'login',
				handleClick: () => setWindow({displayed: true, children: <LoginForm />}),
				buttonText: '登入',
			},
			{
				key: 'register',
				handleClick: () => setWindow({displayed: true, children: <RegisterForm />}),
				buttonText: '註冊',
			},
		],
	};

	const displayedButtons = currentUser ? buttons.isLoggedIn : buttons.isNotLoggedIn;

	return (
		<Wrapper>
			<BackgroundPic />
			<Title>Gallery</Title>

			{displayedButtons.map(btn => (
				<Button
					key={btn.key}
					wd={180}
					hg={60}
					fs="1.2em"
					onClick={btn.handleClick}
					style={{
						position: 'relative',
						top: '50px',
					}}
				>
					{btn.buttonText}
				</Button>
			))}
			
			<Window
				displayed={window.displayed}
				onClose={() => setWindow({displayed: false, children: undefined})}
				children={window.children}
			/>
		</Wrapper>
	);
};

function mapStateToProps(state) {
	return {
		currentUser: state.user.currentUser,
	};
};

export default connect(mapStateToProps)(HomePage);