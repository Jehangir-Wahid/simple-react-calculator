import React, { useState, useEffect } from 'react'
import { Button } from '../../components/Row/partials'
import { Row } from '../../components/Row'
import { useDispatch, useSelector } from 'react-redux'
import { addRow } from '../../redux/actions'

export const Home = () => {
	const [result, setResult] = useState(0)
	const [rowId, setRowId] = useState(0)

	const { rows } = useSelector(state => state.calculator)
	
	const dispatch = useDispatch()
	
	const do_the_math = {
		'+': function (x, y) { return x + y },
		'-': function (x, y) { return x - y }
	}
	
	useEffect(() => {
		setRowId(Date.now() + (Math.floor((Math.random() * 9999) + 1)))

		let res = 0
		
		rows.map((row) => {
			if (!row.isDisabled) {
				res = do_the_math[row.operator](Number(res), Number(row.inputValue))
			}
		})
		
		setResult(res)
	}, [rows])

	return (
		<div>
			<Button
				value="Add"
				onclick={() => {
					dispatch(addRow({
						operator: '+',
						inputValue: 0,
						isDisabled: false,
						rowId }
					))}}
				rowId={rowId}
				/>
			<ul>
				{rows.length > 0 ? (
					rows.map((row) => (
						<li key={row.rowId}>
							<Row
								operator={row.operator}
								inputValue={row.inputValue}
								isDisabled={row.isDisabled}
								rowId={row.rowId}
							/>
						</li>
					))
				) : (
					<li>Please add some rows.</li>
				)}
			</ul>
			<div>
				Result: { result }
			</div>
		</div>
	)
}