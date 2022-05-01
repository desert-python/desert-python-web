import React from 'react';
import { Link } from 'react-router-dom';

function Orders() {
	return (
		<div className='content content-margined'>
			<div className='order-header'>
				<h3>Orders</h3>
			</div>
			<div className='order-list'>
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

export default Orders;