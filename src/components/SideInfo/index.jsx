import { SideWrapper, PortraitWrapper, CoverContainer, Cover, Introduction, EditIcon } from './styles';

import Mask from '../Mask';
import Button from '../Button';

const SideInfo = ({
	editable,
	coverSrc,
	maskText,
	onClickMask,
	title,
	description,
	onClickEdit,
	btnText,
	onClickBtn,
}) => {
	return (
		<SideWrapper>
			<PortraitWrapper>
				<CoverContainer>
					<Cover src={coverSrc} alt="" />
					{editable &&
						<Mask
							onClick={onClickMask}
							style={{ backgroundColor: '#CC543A99' }}
						>
							{maskText}
						</Mask>
					}
				</CoverContainer>

				<Introduction>
					{/* {editable &&
						<EditIcon
							onClick={onClickEdit}
						>
							🖊
						</EditIcon>
					} */}
					<h1>{title}</h1>
					<p>{description}</p>
				</Introduction>

				{editable &&
					<Button
						onClick={onClickBtn}
					>
						{btnText}
					</Button>
				}
			</PortraitWrapper>
		</SideWrapper>
	);
};

export default SideInfo;
