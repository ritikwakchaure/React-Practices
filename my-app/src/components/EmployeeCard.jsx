// Question:/
// 1. Build an EmployeeCard component in React to display name, designation and work experience
//    of a person. Pass name, designation and work experience as props.
// 2. The colour of “Designation:” should be green.
// 3. The colour of “Experience:” should be blue.
export const EmployeeCard = (props) => {
	return (
		<div>
			<h1>Jay Ganesh</h1>
			{/* {Displying props} */}
			<h2>Name :{props.name}</h2>
			<p style={{ color: "blue" }}>Experience:{props.experience}</p>

			<p style={{ color: "green" }}>Designation:{props.designation}</p>
		</div>
	);
};
