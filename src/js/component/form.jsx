import React from "react";
import PropTypes from "prop-types";
const Form = ({ setFirstName, setSecondName }) => {
	const getFirstName = e => {
		setFirstName(e.target.value);
	};
	const getSecondName = e => {
		setSecondName(e.target.value);
	};

	return (
		<div className="form">
			<form>
				<div>
					<input
						className="inputStyle"
						onChange={getFirstName}
						type="text"
						placeholder="Player X"></input>
				</div>
				<div>
					<input
						className="inputStyle"
						onChange={getSecondName}
						type="text"
						placeholder="Player O"></input>
				</div>
			</form>
		</div>
	);
};

Form.propTypes = {
	setFirstName: PropTypes.function,
	setSecondName: PropTypes.function
};
export default Form;
