import { Wrapper } from './styles';

const Card = ({
	children,
	...otherProps
}) => {
  return (
		<Wrapper
			{...otherProps}
		>
			{children}
		</Wrapper>
	);
};

export default Card