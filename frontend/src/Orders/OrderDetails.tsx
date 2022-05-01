import React from 'react';
import { useParams } from 'react-router-dom';

function OrderDetails() {
	// const { id } = useParams<{ id: string; }>();
	// const order = data.orders.find(order => order._id === parseInt(id!));

	return (
		<div>
			<h3>order name: Jack</h3>
		</div>
	);
}

export default OrderDetails;