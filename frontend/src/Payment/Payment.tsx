import React from 'react';

import CheckoutSteps from './CheckoutSteps';

function Payment() {

	const submitHandler = () => {
		alert('Payment processing...');
	};

	return (
		<div>
			<CheckoutSteps step1 step2 step3 />
			<div className='form'>
				<form onSubmit={submitHandler}>
					<ul className='form-container'>
						<li><h1>Payment</h1></li>
						<li>
							<div>
								<input type="radio" name="paymentMethod" id="paymentMethod" value="paypal"></input>
								<label htmlFor="paymentMethod">Paypal</label>
								<input type="radio" name="paymentMethod" id="paymentMethod" value="bitcoin"></input>
								<label htmlFor="paymentMethod">Bitcoin</label>
							</div>
						</li>
						<li>
							<button type="submit" className='button primary'>Continue</button>
						</li>
					</ul>
				</form>
			</div>
		</div>
	);

}

export default Payment;