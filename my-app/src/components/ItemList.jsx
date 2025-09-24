//  3. Build a React component to display a list of stationery items with a header. The items and
//  header should be passed as props. Header should be “Stationery Items”.
//  Data:
//  const items = ['pen', 'pencil', 'ruler', 'eraser']
export const ItemList = ({ header, items }) => {
	return (
		<div>
			<h2>{header}</h2>
			<ul>
				{items.map((item, index) => (
					<li key={index}>{item}</li>
				))}
			</ul>
		</div>
	);
};
