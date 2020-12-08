// 使用 useForm 來重用表單邏輯

import { FormWrapper, FormRow, FormTitle } from './styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { registerStart } from '../../redux/user/user.actions';

import useForm from '../../hooks/useForm';

const RegisterForm = ({
	registerStart,
}) => {
	const {
		values,
		handleChange,
		handleSubmit,
	} = useForm({
		onSubmit: values => {
			// console.log(values);
			// setCurrentUser({name: 'jenn'});
			registerStart({
				username: values.username,
				password: values.password,
			});
		}
	});

	return (
		<FormWrapper autocomplete="off" onSubmit={handleSubmit}>
			<FormTitle>
				註冊
      </FormTitle>
			<FormRow>
				<label htmlFor="username">使用者名稱</label>
				<input type="text" name="username" onChange={handleChange} />
			</FormRow>
			<FormRow>
				<label htmlFor="password">密碼</label>
				<input type="password" name="password" onChange={handleChange} />
			</FormRow>
			<FormRow>
				<label htmlFor="password">密碼確認</label>
				<input type="password" name="passwordTwice" onChange={handleChange} />
			</FormRow>
			{/* {message &&
				<FormRow>
					<span>{`* ${message}`}</span>
				</FormRow>
			} */}
			<FormRow>
				<button type="submit">註冊並登入</button>
			</FormRow>
		</FormWrapper>
	);
};

function mapDispatchToProps(dispatch) {
	return bindActionCreators(
	  {
			registerStart,
	  },
	  dispatch,
	);
};
  
export default connect(null, mapDispatchToProps)(RegisterForm);