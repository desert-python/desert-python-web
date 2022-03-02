import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import data from './data';

function Fulfillment() {

	const [showProductsModal, setShowProductModal] = useState(false);
	const [selectedProducts, setSelectedProducts] = useState<any[]>([]);

	const showProducts = (order: any) => {
		setShowProductModal(!showProductsModal);
		setSelectedProducts(order);
	};

	return (
		<div className={`content content-margined`}>
			<div className='fulfillment-header'>
				<h3>Fulfillment</h3>
			</div>
			<div className='fulfillment-list'>
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
						{data.fulfillment.map(value => {
							return (
								<tr className={value.isDelivered ? 'shipped' : 'unshipped'} key={value._id}>
									<td>{value._id}</td>
									<td>{value.createdAt}</td>
									<td>{value.totalPrice}</td>
									<td>{value.user.name}</td>
									<td>{value.isPaid.toString()}</td>
									<td>{value.paidAt}</td>
									<td>{value.isDelivered.toString()}</td>
									<td>{value.deliveredDate}</td>
									<td className='fulfillment-actions'>
										<button onClick={() => showProducts(value.products)} className="button secondary">View Products</button>
										{/* <Link to={`/fulfillment/${value._id}`} className="button secondary">Details</Link> */}
									</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
			{/* Proucts Modal */}
			<div className="product-modal" hidden={!showProductsModal}>
				<div className='modal-header'>
					<h2>Products in Fulfillment</h2>
					<button onClick={() => setShowProductModal(false)} className='close-modal'>X</button>
				</div>
				<table className="products-modal-table">
					<thead>
						<tr>
							<th>NAME</th>
							<th>PRICE</th>
							<th>BRAND</th>
							<th>RATING</th>
							<th># OF REVIEW</th>
						</tr>
					</thead>
					<tbody>
						{selectedProducts.map((product, i) => {
							return (
								<tr key={i}>
									<td>{product.name}</td>
									<td>{product.price}</td>
									<td>{product.brand}</td>
									<td>{product.rating}</td>
									<td>{product.numberOfReviews}</td>
								</tr>
							);
						})}
					</tbody>
				</table>
			</div>
		</div >
	);

}

export default Fulfillment;