// import { EmployeeCard } from "./components/EmployeeCard";

import { Gadgets } from "./components/Gadgets";

// Data
// const items = ["pen", "pencil", "ruler", "eraser"];

function App() {
	// const user = {
	// 		name: "Ritik Wakchaure",
	// 		email: "rutikwackchaure805@gmail.com",
	// 		age: 23,
	// 		address: "Pue, Maharastra India",
	// 	};

	// const imageLink =
	// 	"https://cdn.pixabay.com/photo/2023/03/18/10/43/plum-blossoms-7860381_1280.jpg";

	// const caption = '"नीम करोली बाबा"';

	// const products = [
	// 	{ name: "Perk", quantity: 10, sales: 7 },
	// 	{ name: "Pepsi", quantity: 10, sales: 20 },
	// 	{ name: "Coke", quantity: 18, sales: 50 },
	// 	{ name: "Maggi", quantity: 41, sales: 22 },
	// 	{ name: "5Star", quantity: 7, sales: 9 },
	// ];

	// const student = {
	// 	name: "John Doe",
	// 	english: 90,
	// 	maths: 80,
	// 	computers: 70,
	// };

	const products = [
		{
			id: 1,
			name: "keyboard",
			description: "Logitech Mechanical Keyboard",
			price: 2000,
		},
		{ id: 2, name: "mouse", description: "Dell Wireless Mouse", price: 1200 },
		{
			id: 3,
			name: "monitor",
			description: "Lenovo 32-inch display Monitor",
			price: 10000,
		},
		{ id: 4, name: "mobile", description: "iPhone 13 Pro Max", price: 140000 },
		{
			id: 5,
			name: "speakers",
			description: "Creative Desktop Speakers",
			price: 5000,
		},
		{
			id: 6,
			name: "headphones",
			description: "Sony over-the-ear wired Headphones with mic",
			price: 1500,
		},
		{ id: 7, name: "mobile", description: "iPhone 12", price: 90000 },
	];

	return (
		<>
			<div>
				{/* <h1>Employee Details</h1>
				<EmployeeCard
					name="Ritik wakchaure"
					designation="SDE"
					experience={2}
				/> */}

				{/* <CustomButton
					text="Start"
					styles={{
						backgroundColor: "lightgreen",
						color: "darkgreen",
						borderRadius: "5px",
						padding: "10px",
					}}
				/> */}

				{/* <ItemList header="Stationary Items" items={items} /> */}

				{/* <h1>User Profile</h1>
				<UserProfile userData={user} /> */}

				{/* <ImagewithCaption imageLink={imageLink} caption={caption} /> */}

				{/* <h1> Products</h1>
				<ProductList products={products} /> */}

				{/* <ProductList1 items={products} /> */}

				{/* <StudentGrade student={student} /> */}
				{/* <EmployeeList /> */}

				{/* <Greeting name="Jay Ganesh" /> */}
				{/*
				<h1>Product List</h1>
				<Product name="Laptop" price="50000" /> */}

				<Gadgets products={products} />
			</div>
		</>
	);
}

export default App;

