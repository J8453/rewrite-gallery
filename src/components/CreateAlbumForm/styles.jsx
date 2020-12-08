import styled from 'styled-components';

export const FormWrapper = styled.form`
	display: flex;
    flex-wrap: wrap;
`

export const FormRow = styled.div`
    flex-basis: 100%;
    margin: 10px;

    display: flex;
    justify-content: center;
    align-items: center;

    & label {
        display: flex;
        justify-content: flex-end;
        width: 100px;
    }

    & input {
        height: 32px;
    }

    & input,
    & textarea {
        width: 200px;
        margin: 5px 10px;
        padding: 5px;

        &:focus {
            outline: 2px auto ${ p => p.theme.colors.bg };
        }
    }

    & button {
        height: 32px;
        padding: 5px 10px;
        background-color: ${ p => p.theme.colors.main };
        color: white;
        border: none;
        border-radius: 4px;
        cursor: pointer;
    }
`

export const FormTitle = styled(FormRow)`
    font-weight: 500;
    font-size: 1.5em;
    color: ${ p => p.theme.colors.main };
`