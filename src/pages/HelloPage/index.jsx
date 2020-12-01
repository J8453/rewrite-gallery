import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

import { Wrapper } from './styles';

import { connect } from 'react-redux';
import Button from '../../components/Button';

const HelloPage = ({
	currentUser,
}) => {
	const history = useHistory();
	useEffect(() => {
		if (!currentUser) history.push('/');
	}, [currentUser]);

	return (
		<Wrapper>
			👋🏻
			<Button
				wd={180}
				fs="16px"
				onClick={() => history.push('/profile')}
			>
				回到 Profile
			</Button>
		</Wrapper>
	);
};


function mapStateToProps(state) {
	return {
		currentUser: state.user.currentUser,
	};
};

export default connect(mapStateToProps)(HelloPage);