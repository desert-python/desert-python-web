export default {
	fulfillment: [
		{
			_id: 1,
			createdAt: "1/20/2022",
			totalPrice: 42.90,
			user: {
				name: "Taylor"
			},
			isPaid: true,
			paidAt: "2/14/2022",
			isDelivered: false,
			deliveredDate: null,
			products: [
				{
					name: 'Shirt',
					imageUrl: '/images/d1.jpg',
					price: 60,
					brand: 'Nike',
					rating: 4.5,
					numberOfReviews: 10
				},
				{
					name: 'Shirt',
					imageUrl: '/images/d1.jpg',
					price: 60,
					brand: 'Nike',
					rating: 4.5,
					numberOfReviews: 10
				}
			]
		},
		{
			_id: 2,
			createdAt: "1/20/2022",
			totalPrice: 42.90,
			user: {
				name: "Taylor"
			},
			isPaid: true,
			paidAt: "2/14/2022",
			isDelivered: true,
			deliveredDate: "2/21/2022",
			products: [
				{
					name: 'Shirt',
					imageUrl: '/images/d1.jpg',
					price: 60,
					brand: 'Nike',
					rating: 4.5,
					numberOfReviews: 10
				},
				{
					name: 'Shirt',
					imageUrl: '/images/d1.jpg',
					price: 60,
					brand: 'Nike',
					rating: 4.5,
					numberOfReviews: 10
				},
				{
					name: 'Shirt',
					imageUrl: '/images/d1.jpg',
					price: 60,
					brand: 'Nike',
					rating: 4.5,
					numberOfReviews: 10
				},
				{
					name: 'Shirt',
					imageUrl: '/images/d1.jpg',
					price: 60,
					brand: 'Nike',
					rating: 4.5,
					numberOfReviews: 10
				}
			]
		},
		{
			_id: 3,
			createdAt: "1/20/2022",
			totalPrice: 42.90,
			user: {
				name: "Taylor"
			},
			isPaid: true,
			paidAt: "2/14/2022",
			isDelivered: true,
			deliveredDate: "2/18/2022",
			products: [
				{
					name: 'Shirt',
					imageUrl: '/images/d1.jpg',
					price: 60,
					brand: 'Nike',
					rating: 4.5,
					numberOfReviews: 10
				}
			]
		}
	]
}