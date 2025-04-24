import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { updateRow } from '../redux/actions';

export const useFormInput = (initialValue) => {
	const [value, setValue] = useState(initialValue);
	
	const dispatch = useDispatch()

	const handleChange = (e) => {
		if (e.target.value)
			console.log('Row ID: ' + e.target.dataset.rowId)
            setValue(e.target.value)
		
		if (e.target.dataset.rowAction == 'ROW_DISABLE')
            setValue((e.target.innerHTML == 'Disable' ? 'Enable' : 'Disable'))
		
		dispatch(updateRow({
			value: e.target.value,
			rowId: e.target.dataset.rowId,
			actionType: e.target.dataset.rowAction
		}))
	};

	return {
		value,
		onchange: handleChange,
	};
};