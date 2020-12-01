import { Mask, ButtonsWrapper, Button, Picture, InfoWrapper } from './styles';
import Card from '../Card';

const PictureCard = ({
	imageUrl,
	title,
	time,
	spinning,
	onDelete,
	onCopy,
	onEdit,
	...otherProps
}) => {
	const date = time ? new Date(time) : undefined;
	
  return (
		<Card
			{...otherProps}
		>
			<Picture url={imageUrl} />
			<Mask>
				<ButtonsWrapper>
					{onDelete
						? (
							<Button onClick={onDelete}>
								𝗫
							</Button>
						)
						: null
					}
					{onCopy
						? (
							<Button onClick={onCopy}>
								📑
							</Button>
						)
						: null
					}
					{onEdit
						? (
							<Button onClick={onEdit}>
								✏
							</Button>
						)
						: null
					}
				</ButtonsWrapper>

				{date
					? (
						<InfoWrapper>
							<div>{title}</div>
							<div>{`編輯時間：${date.getFullYear()}.${date.getMonth()+1}.${date.getDate()}`}</div>
						</InfoWrapper>
					)
					: null
				}
			</Mask>
		</Card>
	)
}

export default PictureCard