// Q. Build a Product component that receives product name and price as props and displays them on
//  DOM.
//  The name should be in bold and blue in color
//  Price should be in italics and green in color

import React from "react";
export const Product = ({ name, price }) => {
	return (
		<div>
			<h1 style={{ color: "blue", fontWeight: "bold" }}> {name} </h1>
			<h2 style={{ color: "red", fontWeight: "bold" }}>{price} </h2>
		</div>
	);
};
