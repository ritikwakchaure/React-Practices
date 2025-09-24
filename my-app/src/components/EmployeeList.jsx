const EmployeeList = () => {
	const employees = [
		{
			name: "Jack Smith",
			level: 2,
			dept: "Tech",
			designation: "Manager",
			salary: 24000,
		},
		{
			name: "Mary Robbins",
			level: 3,
			dept: "Fin",
			designation: "Manager",
			salary: 28000,
		},
		{
			name: "Steve Williams",
			level: 4,
			dept: "Ops",
			designation: "President",
			salary: 35000,
		},
		{
			name: "Bob Andrews",
			level: 1,
			dept: "Fin",
			designation: "Trainee",
			salary: 16500,
		},
		{
			name: "Dave Martin",
			level: 2,
			dept: "Fin",
			designation: "Manager",
			salary: 21700,
		},
		{
			name: "Julia Clarke",
			level: 3,
			dept: "Ops",
			designation: "Manager",
			salary: 26900,
		},
		{
			name: "Kathy Jones",
			level: 4,
			dept: "Tech",
			designation: "President",
			salary: 42500,
		},
		{
			name: "Tom Bresnan",
			level: 2,
			dept: "Tech",
			designation: "Manager",
			salary: 22200,
		},
	];

	// Total salary expense calculate
	const totalSalary = employees.reduce((sum, emp) => sum + emp.salary, 0);

	return (
		<div>
			<h2>Employee Details</h2>
			<ul>
				{employees.map(({ name, level, dept, designation, salary }, index) => (
					<li key={index}>
						Name: {name}, level: {level}, dept: {dept}, designation:{" "}
						{designation}, salary: {salary}
					</li>
				))}
			</ul>
			<h3>Total Salary Expense: {totalSalary}</h3>
		</div>
	);
};

export default EmployeeList;

// 	return (
// 		<div>
// 			<h2>Employess Details</h2>
// 			<ul>
// 				{/* {employees.map((emp, index) => (
// 					<li key={index}>
// 						Name:{emp.name},level:{emp.level}, dep:{emp.dept}, designation:
// 						{emp.designation}, salary:{emp.salary}
// 					</li> */}
// 				method-2
// 				{/* ))} */}
// 				{/* {employees.map(({ name, level, dept, designation, salary }, index) => (
// 					<li key={index}>
// 						Name:{name},level:{level}, dep:{dept}, designation:
// 						{designation}, salary:{salary}
// 					</li>
// 				))} */}
// 				{employees.map((emp, index) => {
// 					const { name, level, dept, designation, salary } = emp;
// 					return (
// 						<li key={index}>
// 							Name:{name},level:{level}, dep:{dept}, designation:
// 							{designation}, salary:{salary}
// 						</li>
// 					);
// 				})}
// 			</ul>
// 		</div>
// 	);
// };
