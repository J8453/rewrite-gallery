import { useHistory } from 'react-router-dom';

import { Wrapper, BackgroundPic, Title } from './styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCurrentUser } from '../../redux/user/user.actions';
import Button from '../../components/Button';

const HomePage = ({
	currentUser,
	setCurrentUser,
}) => {
	const history = useHistory();
	const button = {
		isLoggedIn: {
			handleClick: () => history.push('/profile'),
			text: 'My profile',
		},
		isNotLoggedIn: {
			handleClick: () => setCurrentUser({name: 'Jenn'}),
			text: 'Login as Jenn',
		},
	};

	return (
		<Wrapper>
			<BackgroundPic />
			<Title>Gallery</Title>
			<Button
				wd={180}
				hg={60}
				fs="1.5em"
				onClick={currentUser
					? button.isLoggedIn.handleClick
					: button.isNotLoggedIn.handleClick
				}
				style={{
					position: 'relative',
					top: '50px',
				}}
			>
				{currentUser
					? button.isLoggedIn.text
					: button.isNotLoggedIn.text
				}
			</Button>
		</Wrapper>
	);
};

function mapStateToProps(state) {
	return {
		currentUser: state.user.currentUser,
	};
};


function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
      setCurrentUser,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(HomePage);