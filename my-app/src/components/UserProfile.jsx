export const UserProfile = ({ user }) => {
	return (
		<div>
			{/*  const UserProfile = ({ user }) => {
  const { name, email, age, address } = user;  // object destructuring
  return (
    <div>
      <h1>{name}</h1>
      <p>Email: {email}</p>
      <p>Age: {age}</p>
     s <p>Address: {address}</p>
    </div>
  );
};
*/}
			<div style={styles.constainer}>
				<h2 style={styles.name}>{user.name}</h2>
				<p>
					<strong>Email:</strong> {user.email}
				</p>
				<p>
					<strong>Age:</strong>
					{user.age}
				</p>
				<p>
					<strong>Address:</strong> {user.address}
				</p>
			</div>
		</div>
	);
};

const styles = {
	constainer: {
		border: "1px solid #ccc",
		borderRadius: "8px",
		padding: "16px",
		margin: "10",
	},
	name: {
		color: "#2a9d8f",
		marginBottom: "8px",
	},
};
