import React from 'react'

export const TextInput = ({ value, onchange, disabled, rowId, actionType }) => {
	return (
		<>
			<input
				type='number'
				value={value}
				onChange={onchange}
				disabled={disabled}
				data-row-id={rowId}
				data-row-action={actionType}
			/>
		</>
	)
}
