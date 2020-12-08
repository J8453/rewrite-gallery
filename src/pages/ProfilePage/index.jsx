import { useState, useEffect } from 'react';
import { ContentWrapper, CardContainer } from './styles';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { getProfilePageDataStart, deleteAlbumStart } from '../../redux/user/user.actions';
import { uploadImageStart, deleteImageStart } from '../../redux/image/image.actions';
// import FileInput from '../../components/FileInput';
// import Loader from '../../components/Loader';
import PictureCard from '../../components/PictureCard';
import WithSpinner from '../../components/WithSpinner';

import SideInfo from '../../components/SideInfo';
import Window from '../../components/Window';
import CreateAlbumForm from '../../components/CreateAlbumForm';

const PictureCardWithSpinner = WithSpinner(PictureCard);
const CreateAlbumFormWithSpinner = WithSpinner(CreateAlbumForm);

const ProfilePage = ({
	match,
	currentUser,
	userInfo,
	albums,
	isCreating,
	pendingIds,
	getProfilePageDataStart,
	deleteAlbumStart,
	// images,
	// isUploading,
	// uploadImageStart,
	// deleteImageStart,
}) => {
	const [window, setWindow] = useState({
		displayed: false,
		children: undefined,
	});

	useEffect(() => {
		const { userId } = match.params;
		getProfilePageDataStart(userId);
	}, [getProfilePageDataStart]);

	useEffect(() => {
		if (window.displayed) setWindow({displayed: true, children: <CreateAlbumFormWithSpinner isLoading={isCreating} />});
		if (window.displayed && !isCreating) setWindow({displayed: false, children: undefined})
	}, [isCreating]);

	// const handleFileChange = (file) => {
	// 	const formData = new FormData();
	// 	formData.append('image', file);

	// 	uploadImageStart(formData);
	// };

	const isOwner = currentUser && userInfo?.id === currentUser?.id;
	const getDeleteFn = (albumId) => isOwner
		? () => deleteAlbumStart(albumId)
		: undefined

	return (<>
		<SideInfo
			editable={isOwner}
			coverSrc={"https://i.imgur.com/M60mTZd.jpg"}
			maskText="變更頭貼"
			onClickMask={() => console.log('show form')}
			title={userInfo?.username ? userInfo.username : '載入中'}
			description={userInfo?.description ? userInfo.description : '載入中'}
			onClickEdit={() => console.log('show edit form')}
			btnText="建立相簿"
			onClickBtn={() => setWindow({displayed: true, children: <CreateAlbumFormWithSpinner isLoading={isCreating} />})}
		/>
		<ContentWrapper>
			{/* {currentUser
				? <FileInput onChange={handleFileChange} />
				: null
			}
			{isUploading
				? <Loader/>
				: null
			} */}
			<CardContainer>
				{albums.map(album => (
					<PictureCardWithSpinner
						key={album.id}
						imageUrl={album.coverSrc}
						title={album.name}
						time={album.updatedAt}
						onDelete={getDeleteFn(album.id)}
						isLoading={pendingIds.includes(album.id)}
					/>	
				))}
			</CardContainer>
		</ContentWrapper>

		<Window
			displayed={window.displayed}
			onClose={() => setWindow({displayed: false, children: undefined})}
			children={window.children}
		/>
	</>);
};

function mapStateToProps(state) {
	return {
		currentUser: state.user.currentUser,
		userInfo: state.user.userInfo,
		albums: state.user.albums,
		isCreating: state.user.isCreating,
		pendingIds: state.user.pendingIds,

		// images: state.image.images,
		// isUploading: state.image.isUploading,
	};
};

function mapDispatchToProps(dispatch) {
  return bindActionCreators(
    {
			uploadImageStart,
			deleteImageStart,
			getProfilePageDataStart,
			deleteAlbumStart,
    },
    dispatch,
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);