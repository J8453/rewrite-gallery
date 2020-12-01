import { Wrapper, Label } from './styles';

const FileInput = ({
	onChange,
	...otherProps
}) => {
  return (
		<Wrapper
			{...otherProps}
		>
			<input
				id="uploader"
				type="file"
				accept="image/jpeg"
				onChange={(e) => {
					onChange(e.target.files[0]);

					e.target.value = '';
				}}
			/>
			<Label htmlFor="uploader">
				上傳圖片
			</Label>
		</Wrapper>
	)
}

export default FileInput