const products = [{
		image: 'shoes.png',
		name: 'Xtep Shoes Branded',
		priceCents: '29999'
	}, {
		image: 'iwatch.jpg',
		name: 'iWatch',
		priceCents: '299999'
	}, {
		image: 'Mac.jpg',
		name: 'Macbook',
		priceCents: '599999'
	}, {
		image: 'pc-set.jpg',
		name: 'Gaming Pc Set NEW',
		priceCents: '39999'
	}, {
		image: 'light.jpg',
		name: 'Ringlight',
		priceCents: '2999'
	}];
	
	let productsHTML = '';
	
	products.forEach((product) => {
		productsHTML += `
			<div class="container js-cart">
		<div class="wrapper">
			<div class="product-image">
				<img src="${product.image}"> 
			</div>
			<div class="name">
				${product.name}
			</div>
			<div class="price">
				$${(product.priceCents/100).toFixed(2)}
			</div>
			<div class="button js-add-cart" 
			data-product-name="${product.name}">
				<button>Add to cart</button>
			</div>
		</div>
	</div>
		`;
	});
	
	document.querySelector('.js-cart')
	.innerHTML = productsHTML;
	
	const cart = [];
	
	document.querySelectorAll('.js-add-cart')
	.forEach((button) => {
		button.addEventListener ('click', () =>{
			const productName = button.dataset.productName;
			
			let matchingItem;
			
			cart.forEach((item) => {
				if(productName === item.productName){
					matchingItem = item;
				}
			});
			
			if (matchingItem) {
				matchingItem.quantity += 1;
			} else {
				cart.push({
				productName: productName,
				quantity: 1
			})
			}
			
			let cartQuantity = 0;
			
			cart.forEach((item) => {
				cartQuantity += item.quantity;
			});
			
			document.querySelector('.js-qty')
			.innerHTML = cartQuantity;
			
			
			
		});
	})