import { ActionTypes } from "../action-types";

export const updateRow = ({ value, rowId, actionType }) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes[actionType],
            payload: { value, rowId}
        })
    }
}

export const addRow = (value) => {
    return (dispatch) => {
        dispatch({
            type: ActionTypes.ROW_ADD,
            payload: { value }
        })
    }
}
