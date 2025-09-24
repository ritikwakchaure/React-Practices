// 4. Build a React component called Gadgets that receives an array of products as a prop.
// Render each product's name, description, and price as an ordered list.
// Add a border around the product details which has price above 50000.

export const Gadgets = ({ products }) => {
	return (
		<div>
			{/* Simple CSS inside same file */}
			<style>
				{`
          h2 {
            font-size: 20px;
            margin-bottom: 10px;
            font-weight: bold;
          }

          ol {
            padding-left: 20px;
          }

          .product {
            border: 1px solid #ccc;
            padding: 12px;
            margin-bottom: 12px;
            border-radius: 6px;
            list-style: decimal;
          }

          .product h3 {
            margin: 0;
            font-size: 18px;
            font-weight: bold;
          }

          .product p {
            margin: 4px 0;
          }

          .expensive {
            border: 2px solid red;
          }
        `}
			</style>

			<div>
				<h2>Gadgets List</h2>
				<ol>
					{products.map((product) => (
						<li
							key={product.id}
							className={
								product.price > 50000 ? "product expensive" : "product"
							}
						>
							<h3>{product.name}</h3>
							<p>{product.description}</p>
							<p>₹{product.price}</p>
						</li>
					))}
				</ol>
			</div>
		</div>
	);
};
