import React from 'react'
import { useFormInput } from '../../hooks/useFormInput'
import { Button, Dropdown, TextInput } from './partials'

export const Row = ({ operator, inputValue, isDisabled, rowId }) => {
	const input = useFormInput(inputValue)
	const dropdown = useFormInput(operator)
	const deleteButton = useFormInput('Delete')
	const disableButton = useFormInput('Disable')
	
	return (
		<div>
			<Dropdown
				{...dropdown}
				disabled={isDisabled}
				rowId={rowId}
				actionType='ROW_OPERATOR'
			/>
			<TextInput
				{...input}
				disabled={isDisabled}
				rowId={rowId}
				actionType='ROW_INPUT'
			/>
			<Button
				value={deleteButton.value}
				onclick={deleteButton.onchange}
				disabled={isDisabled}
				rowId={rowId}
				actionType='ROW_DELETE'
			/>
			<Button
				value={disableButton.value}
				onclick={disableButton.onchange}
				rowId={rowId}
				actionType='ROW_DISABLE'
			/>
		</div>
	)
}
