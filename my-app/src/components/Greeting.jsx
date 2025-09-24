// Q1. Create a React component called Greeting that receives a name prop and displays a message
//  like "Hello, name!" on the DOM
export const Greeting = ({ name }) => {
	return (
		<div>
			<h1>Hello {name}</h1>
		</div>
	);
};
