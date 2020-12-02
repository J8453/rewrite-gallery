import { useEffect, useState } from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { setCurrentUser } from './redux/user/user.actions';

import { Switch, Route, Redirect } from 'react-router-dom';

import Layout from './components/Layout';

import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';
import HelloPage from './pages/HelloPage';

const pages = [
  {
    path: '/profile',
    component: ProfilePage,
    exact: true,
  },
  {
    path: '/hello',
    component: HelloPage,
    exact: false,
  },
];

function App({
  setCurrentUser,
}){
  useEffect(() => {
    setCurrentUser({
      name: 'Jenn',
    });
  }, []);

  const [state] = useState('test');

  return (
    <Switch>

      <Route exact path="/">
        <HomePage />
      </Route>

      <Route path="*">
        <Layout>
          <Switch>

            {pages.map(page => (
              <Route
                key={page.path}
                exact={page.exact}
                path={page.path}
                component={page.component}
              />
            ))}

            <Route path="*">
              <Redirect to="/" />
            </Route>

          </Switch>
        </Layout>
      </Route>

    </Switch>
  );
}

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

export default connect(mapStateToProps, mapDispatchToProps)(App);