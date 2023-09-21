import React from "react";


const Card = (props) => {

	const { title, desc } = props;
	return (
		<>
			<div style={{ height: '500px', width: '500px', border: '1px solid red' }}>

				<div>
					<h3>{title} </h3>
					<p>{desc}</p>
				</div>

			</div>
		</>
	)

}
export default Card
