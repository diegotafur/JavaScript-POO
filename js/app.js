
class Product{
	//metodo constructor : es un emtodo que se ejecuta apenas se crea un objeto de la clase prodcuto
	constructor(name, price, year){
		this.name = name;
		this.price = price;
		this.year = year;
	}
}

class UI{
	addProduct(product){
		const productList = document.getElementById('product-list');
		const element = document.createElement('div')
		element.innerHTML = `
		<div class = "row">
		<div  class="cyan lighten-3">
		<div class="">
			<strong>Nombre </strong>: ${product.name} 
			<strong>Precio S/.</strong>: ${product.price} 
			<strong>Año </strong>:${product.year}
		</div>
		</div>
		</div>
		<div class = "col s2" style="margin-top:10px;">
		<a class="btn-floating btn-small waves-effect waves-light red" name="delete"><i class="material-icons">delete_forever</i></a>
		</div>
		`;
		productList.appendChild(element);
		this.resetForm();
		this.showMessage('Producto agregado satisfactoriamente.','teal accent-3');
		}

	resetForm(){
		document.getElementById('product-form').reset();
	}

	deleteProduct(element){
		if(element.name == 'delete'){
			element.parentElement.parentElement.remove();
		}
		this.showMessage('Producto eliminado satisfactoriamente.','red darken-1');
	}

	showMessage(message,cssClass){
		const div = document.createElement('div');
		div.className = `toast ${M.toast({html: message, classes: 'rounded "\'cssClass\''})}`;
		//div.appendChild(document.createTextNode(message));
		//Mostrando en el DOM
		//const container = document.querySelector('.container');
		//const app = document.querySelector('#app')

		//container.insertBefore(div,app);
	}
}

//Eventos del DOM
document.getElementById('product-form').addEventListener('submit', function(e){
	const name = document.getElementById('name-product').value;
	const price = document.getElementById('price').value;
	const year = document.getElementById('year').value;
	const ui = new UI();
	const product = new Product(name,price,year);
	if(name == '' || price == '' || year == ''){
		return ui.showMessage('Complete todos los campos.','yellow accent-3');
	}
	
	ui.addProduct(product);

	e.preventDefault();
});

document.getElementById('product-list').addEventListener('click',function(e){
	const ui = new UI();
	ui.deleteProduct(e.target.parentElement);
	//console.log(e.target.parentElement.parentElement.parentElement)
});
