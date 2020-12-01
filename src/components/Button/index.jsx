import { Wrapper } from './styles';

const Button = ({
    children,
    ...otherProps
}) => {
    return (
        <Wrapper {...otherProps}>
            {children}
        </Wrapper>
    )
}

export default Button;