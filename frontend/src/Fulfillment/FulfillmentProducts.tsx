import React from 'react';

function FulfillmentProducts(props: any) {
	const { products } = props;
	return (
		<div className="content content-margined">
			<div className='order-header'>
				<h3>Fulfillment Products</h3>
			</div>
			<div className='fulfillment-products-list'>
				<table className='table'>
					<thead>
						<tr>
							<th>ID</th>
							<th>DATE</th>
							<th>TOTAL</th>
							<th>USER</th>
							<th>PAID</th>
							<th>PAID AT</th>
							<th>DELIVERED</th>
							<th>DELIVERED AT</th>
							<th>ACTIONS</th>
						</tr>
					</thead>
					<tbody>
					</tbody>
				</table>
			</div>
		</div>
	);
}

export default FulfillmentProducts;