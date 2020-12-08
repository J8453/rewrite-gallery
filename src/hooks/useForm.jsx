import { useState, useEffect, useRef } from 'react';

const useForm = ({
	initialValues,
	onSubmit,
}) => {
	const [values, setValues] = useState(initialValues || {});
	const [onSubmitting, setOnSubmitting] = useState(false);
	const formRendered = useRef(true);

	useEffect(() => {
		if (!formRendered.current) {
			setValues(initialValues);
			setOnSubmitting(false);
		}
		formRendered.current = false;
	}, [initialValues]);

	const handleChange = (event) => {
		const { target } = event;
		const { name, files } = target;
		
		let { value } = target;
		if (files) value = files;

		event.persist();
		setValues({ ...values, [name]: value });
	};

	const handleSubmit = (event) => {
		if (event) event.preventDefault();
		onSubmit(values);
	};

	return {
		values,
		handleChange,
		handleSubmit
	};
};

export default useForm;