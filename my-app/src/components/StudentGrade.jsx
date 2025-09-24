export const StudentGrade = ({ student }) => {
	const {name,english, maths, computers} = student

	const totalMarks = student.english + student.maths + student.computers;

	const getGrade = (total) => {
		if (total >= 225) return "A";
		if (total >= 180) return "B";
		if (total >= 150) return "C";
		return "D";
	};
	return (
		<div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px" }}>
			<h2>Student Name:{name}</h2>
			<p>English: {english}</p>
			<p>Math: {maths}</p>
			<p>Computers:{computers}</p>
			<p>Total Marks: {totalMarks}</p>
			<p>Grade: {getGrade(totalMarks)}</p>
		</div>
	);
};
