// 不使用 useForm

import { useState } from 'react';
import { FormWrapper, FormRow, FormTitle } from './styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { login, setCurrentUser } from '../../redux/user/user.actions';

const LoginForm = ({
	// TODO
	login,
	setCurrentUser,
}) => {
	const [form, setForm] = useState({});

	const handleFormChange = (e) => {
		setForm({
			...form,
			[e.target.name]: e.target.value,
		});
	};

	const handleSubmit = (e) => {
		e.preventDefault();

		// console.log(form);
		setCurrentUser({name: 'jenn'});
	};

	return (
		<FormWrapper autocomplete="off" onSubmit={handleSubmit}>
			<FormTitle>
				登入
      </FormTitle>
			<FormRow>
				<label htmlFor="username">使用者名稱</label>
				<input type="text" name="username" onChange={handleFormChange} />
			</FormRow>
			<FormRow>
				<label htmlFor="password">密碼</label>
				<input type="password" name="password" onChange={handleFormChange} />
			</FormRow>
			{/* {message &&
				<FormRow>
					<span>{`* ${message}`}</span>
				</FormRow>
			} */}
			<FormRow>
				<button type="submit">登入</button>
			</FormRow>
		</FormWrapper>
	);
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
	  {
			login,
			setCurrentUser,
	  },
	  dispatch,
	);
};
  
export default connect(null, mapDispatchToProps)(LoginForm);