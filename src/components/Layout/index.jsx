import { Wrapper, Content } from './styles';

import Header from '../Header';

const Layout = ({
  children,
}) => {
  return (
    <Wrapper>
      <Header />
			<Content>
				{children}
			</Content>
		</Wrapper>
  );
};

export default Layout;
