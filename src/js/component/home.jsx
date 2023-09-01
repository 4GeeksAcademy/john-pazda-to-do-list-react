import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [ inputValue, setInputValue ] = useState("");
	const [ tasks, setTasks] = useState([]);


	return (
		<div className="container d-flex flex-column m-5 align-items-center">
			<h1 className="text-primary">Tasks: {inputValue}</h1>
			<div className="container d-flex flex-row justify-content-center m-2">	
				<span className="input-group-text" id="basic-addon1">To do tasks:</span>
				<input 
				type="text" 
				className="form-control w-50" 
				placeholder="Add your tasks here" 
				aria-label="Username" 
				aria-describedby="basic-addon1" 
				onChange={(e) => setInputValue(e.target.value)}
				onKeyUp={(e) => {
					if (e.key === "Enter"){
						setTasks(tasks.concat(inputValue));
						setInputValue('');
					} 
					
				}}
				value={inputValue}
				/>	
			</div>		
			<button 
			className="btn btn-primary btn-md mt-3 mb-3"
			onClick={(e) => {
				setTasks(tasks.concat(inputValue));
				setInputValue('');
			}}
			>
				Add to list:
			</button>
				<ul className="list-group border border-primary border-3 rounded-1 w-25 d-flex flex-column align-items-center">
					{tasks.map((task,index) => (
						<li className="list-group-item w-100 d-flex justify-content-between">
							{task} <i 
							className="fa-solid fa-trash"
							onClick={() => setTasks(tasks.filter((t, currentIndex) => index != currentIndex))}
							></i>
						</li>

					))}
				</ul>
			
		</div>
		
	);
};

export default Home;
