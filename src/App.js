import React, { useState } from 'react';
import './App.css';

const App = () => {
	const [state, setState] = useState();
	const [items, setItems] = useState([]);

	const itemEvent = (event) => {
		setState(event.target.value);
	};

	const listItems = () => {
		setItems((oldItems) => {
			return [...oldItems, state];
		});
		setState('');
	};
	const deleteItems = (index) => {
		// filter = items.filter((_, i) => i !== index)

		const temp = [...items];
		temp.splice(index, 1);
		setItems(temp);
		setState('');
	};

	// const removeAll = () => {};
	const resetInputField = () => {
		setItems([]);
	};
	const keypress = (e) => {
		console.log(e);
		if (e.code === 'Enter' || e.code === 'NumpadEnter') {
			setItems((oldItems) => {
				return [...oldItems, state];
			});
			setState('');
		}
	};

	return (
		<>
			<div className="main-div">
				<div className="center-div">
					<h1>Todo List</h1>

					<input
						// contentEditable="true"
						value={state}
						type="text"
						className="List"
						placeholder="Enter your task"
						onChange={itemEvent}
						onKeyPress={(evt) => keypress(evt)}
					></input>

					<button className="add" onClick={listItems}>
						+
					</button>
					<ol>
						{/* <li> {state} </li> */}
						{items.map((itemVal, index) => {
							return (
								<li
									onClick={() => {
										deleteItems(index);
									}}
								>
									{' '}
									{itemVal}
								</li>
							);
						})}
					</ol>
					{items.length > 0 && (
						<button className="deleteAll" onClick={resetInputField}>
							Clear All
						</button>
					)}
				</div>
			</div>
		</>
	);
};

export default App;
