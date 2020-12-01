import { Wrapper, CardContainer } from './styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { uploadImageStart, deleteImageStart } from '../../redux/image/image.actions';
import FileInput from '../../components/FileInput';
import Loader from '../../components/Loader';
import PictureCard from '../../components/PictureCard';
import WithSpinner from '../../components/WithSpinner';

const PictureCardWithSpinner = WithSpinner(PictureCard);

const ProfilePage = ({
	currentUser,
	images,
	isUploading,
	uploadImageStart,
	deleteImageStart,
	pendingIds,
}) => {
	const handleFileChange = (file) => {
		const formData = new FormData();
		formData.append('image', file);

		uploadImageStart(formData);
	};

	return (
		<Wrapper>
			{currentUser
				? <FileInput onChange={handleFileChange} />
				: null
			}
			{isUploading
				? <Loader/>
				: null
			}
			<CardContainer>
				{images.map(image => (
					<PictureCardWithSpinner
						key={image.id}
						imageUrl={image.link}
						title={image.id}
						time={image.datetime}
						onDelete={() => deleteImageStart(image.id, image.deletehash)}
						isLoading={pendingIds.includes(image.id)}
					/>	
				))}
			</CardContainer>
		</Wrapper>
	);
};


function mapStateToProps(state) {
	return {
		currentUser: state.user.currentUser,
		images: state.image.images,
		isUploading: state.image.isUploading,
		pendingIds: state.image.pendingIds,
	};
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
			uploadImageStart,
			deleteImageStart,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);