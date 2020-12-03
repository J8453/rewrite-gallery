import { useState, useEffect, useRef } from 'react';
import { WindowWrapper } from './styles';

import Card from '../Card';

const Window = ({
	displayed,
	onClose,
	children,
	...otherProps
}) => {
	const wrapperEl = useRef(null);
	const [isDisplayed, setIsDisplayed] = useState(true);

	const handleClick = (e) => {
		if (e.target === wrapperEl.current) {
			setIsDisplayed(displayed);
			onClose();
		};
	};

	useEffect(() => {
		setIsDisplayed(displayed);
	}, [displayed]);

  return isDisplayed ? (
		<WindowWrapper
			ref={wrapperEl}
			onClick={handleClick}
			{...otherProps}
		>
		  <Card>
				{children}
			</Card>
		</WindowWrapper>
	) : null;
};

export default Window