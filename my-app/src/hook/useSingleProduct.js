import { useEffect } from "react";

const useSingleProduct = () => {
	useEffect(() => {
		fetchSingleProduct();
	}, []);

	const fetchSingleProduct = async () => {
		const data = await fetch("https://jsonplaceholder.typicode.com/todos/1")
			.then((response) => response.json())
			.then((json) => console.log(json));
	};
};

export default useSingleProduct;
