import { Description } from './styles';

const HelloWording = ({
	match,
}) => {
  return (<>
		<div>
			{match.params.wording}
		</div>
		<Description>// nested-routing</Description>	
	</>);
};

export default HelloWording