import { useHistory, Route } from 'react-router-dom';

import { Wrapper } from './styles';

import { connect } from 'react-redux';
import Button from '../../components/Button';
import HelloWording from '../../components/HelloWording';

const HelloPage = ({
	currentUser,
	match,
}) => {
	const history = useHistory();

	return (
		<Wrapper>
			👋🏻
			{currentUser
				? (
					<Button
						wd={180}
						fs="16px"
						onClick={() => history.push('/profile')}
					>
						回到 Profile
					</Button>
				)
				: null
			}

			<Button
				fs="16px"
				onClick={() => history.push(`${match.path}/hi`)}
			>
				1
			</Button>

			<Button
				fs="16px"
				onClick={() => history.push(`${match.path}/hello`)}
			>
				2
			</Button>

			<Route
				path={`${match.path}/:wording`}
				component={HelloWording}
			/>
		</Wrapper>
	);
};


function mapStateToProps(state) {
	return {
		currentUser: state.user.currentUser,
	};
};

export default connect(mapStateToProps)(HelloPage);