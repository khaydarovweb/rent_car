import React, { useEffect, useState } from 'react';
import { default as Card } from './components/card';
import { IEntity } from './types';

function App() {
	const [products, setProducts] = useState<IEntity.IProduct[]>([]);

	useEffect(() => {
		async function Product() {
			const data = await fetch('https://fakestoreapi.com/products');
			const response = await data.json();
			setProducts(response);
		}
		Product();
	}, []);
	return (
		<div className="App">
			{products.map(({ id, title, price, image, description }: IEntity.IProduct) => (
				<Card key={id} title={title} price={price} thumbnail={image} description={description} />
			))}
		</div>
	);
}

export default App;
