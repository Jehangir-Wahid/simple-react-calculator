import { ActionTypes } from '../../action-types';

export const calculator = (state = { rows: [] }, { type, payload }) => {
	var updatedRows = [...state.rows]
	var rowIndex = state.rows.findIndex((row) => row.rowId === Number(payload.rowId));

	switch (type) {
		case ActionTypes.ROW_ADD:
			return { ...state, rows: [...state.rows, payload.value] }

		case ActionTypes.ROW_DELETE:
			const filteredRows = state.rows.filter((row) => row.rowId != Number(payload.rowId))
			return { ...state, rows: filteredRows }

		case ActionTypes.ROW_DISABLE:
			updatedRows[rowIndex].isDisabled = !updatedRows[rowIndex].isDisabled
			return { ...state, rows: updatedRows }
			
		case ActionTypes.ROW_OPERATOR:
			updatedRows[rowIndex].operator = payload.value
			return { ...state, rows: updatedRows }

		case ActionTypes.ROW_INPUT:
			updatedRows[rowIndex].inputValue = payload.value
			return { ...state, rows: updatedRows }

		default:
			return state
	}
};