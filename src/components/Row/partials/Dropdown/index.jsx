import React from 'react'

export const Dropdown = ({ value, onchange, disabled, rowId, actionType }) => {
	return (
		<>
			<select
				onChange={onchange}
				defaultValue={value}
				disabled={disabled}
				data-row-id={rowId}
				data-row-action={actionType}
			>
				<option value="+">+</option>
				<option value="-">-</option>
			</select>
		</>
	)
}
