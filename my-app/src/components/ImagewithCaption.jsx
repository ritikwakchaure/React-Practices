export const ImagewithCaption = (props) => {
	const { imageLink, caption } = props;
	return (
		<div style={styles.container}>
			<img src={imageLink} alt={caption} style={styles.image} />
      <p style={styles.caption}>{caption}</p>
		</div>
	);
};

const styles = {
	container: {
		textAlign: "center",
		margin: "20px",
	},
	image: {
		width: "400px",
		borderRadius: "8px",
	},
	caption: {
		marginTop: "10px",
		fontStyle: "italic",
		color: "#555",
	},
};
