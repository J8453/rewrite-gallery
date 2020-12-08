import { FormWrapper, FormRow, FormTitle } from './styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { createAlbumStart } from '../../redux/user/user.actions';

import useForm from '../../hooks/useForm';

const CreateAlbumForm = ({
	currentUser,
	createAlbumStart,
}) => {
	const {
		values,
		handleChange,
		handleSubmit,
	} = useForm({
		onSubmit: values => {
			// console.log(values);
			if (!values?.image || !values?.name || !values?.description) return;
			
			createAlbumStart({
				userId: currentUser.id,
				name: values.name,
				description: values.description,
				images: [...values.image],
			});
		}
	});

	return (
		<FormWrapper autocomplete="off" onSubmit={handleSubmit}>
			<FormTitle>
				建立相簿
			</FormTitle>
			<FormRow>
				<label htmlFor="albumName">相簿名稱</label>
				<input type="text" name="name" onChange={handleChange} />
			</FormRow>
			<FormRow>
				<label htmlFor="description">相簿描述</label>
				<textarea type="text" name="description" rows="5" onChange={handleChange} />
			</FormRow>
			<FormRow>
				<label htmlFor="image">選取相片</label>
				<input type="file" accept="image/jpeg" name="image" multiple onChange={handleChange} />
			</FormRow>
			<FormRow>
				<button type="submit">建立相簿</button>
			</FormRow>
		</FormWrapper>
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
			createAlbumStart,
		},
		dispatch,
	);
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateAlbumForm);