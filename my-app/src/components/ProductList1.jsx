export const ProductList1 = ({ items }) => {
	return (
		<div>
			<h1>Products with sales greter than quantity</h1>
			<ul>
				{items
					.filter((product) => product.sales > product.quantity)
					.map((product, index) => (
						<li key={index}>
							Name:{product.name}, Quantity: {product.quantity}, Sales:{" "}
							{product.sales}
						</li>
					))}
			</ul>
		</div>
	);
};
