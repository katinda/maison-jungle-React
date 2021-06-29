import '../styles.css/Cart.css'

function Cart(){
    var monsteraPrice = 8
	var ivyPrice = 10
	var flowerPrice = 15
    
    return(
        <div className = 'lmj-cart' >
            			<h2>Panier</h2>
			<ul>
				<li>Monstera : {monsteraPrice}€</li>
				<li>Lierre : {ivyPrice}€</li>
				<li>Fleurs : {flowerPrice}€</li>
			</ul>
			Total : {monsteraPrice + ivyPrice + flowerPrice}€
        </div>
    );
}
export default Cart;