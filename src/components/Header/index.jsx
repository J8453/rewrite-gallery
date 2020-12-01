import { useHistory } from 'react-router-dom';

import { Wrapper, Logo, Enlarge, GreetingLine } from './styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { logout, setCurrentUser } from '../../redux/user/user.actions';
import Button from '../Button';

const Header = ({
  currentUser,
  logout,
  setCurrentUser,
}) => {
  const history = useHistory();

  return (
    <Wrapper>
      <Logo onClick={() => history.push('/')}><Enlarge>G</Enlarge>allery.</Logo>
      {currentUser
        ? (<>
          <GreetingLine
            onClick={() => history.push('/hello')}
          >
            Hi, {currentUser.name}!
          </GreetingLine>
          <Button
            reverse
            wd={50}
            fs="0.8em"
            onClick={logout}
          >
            登出
          </Button>
        </>)
        : (
          <Button
            reverse
            wd={50}
            fs="0.8em"
            onClick={() => setCurrentUser({name: 'Jenn'})}
          >
            登入
          </Button>
        )
      }
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
      logout,
      setCurrentUser,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(Header);
