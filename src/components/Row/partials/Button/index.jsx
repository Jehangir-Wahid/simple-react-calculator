import React from 'react'

export const Button = ({ value, onclick, disabled, rowId, actionType }) => {
	return (
		<button
			onClick={onclick}
			data-row-id={rowId}
			disabled={disabled}
			data-row-action={actionType}
		>
			{ value }
		</button>
	)
}
