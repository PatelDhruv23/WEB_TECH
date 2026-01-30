
import {getAllProducts,getProductsById} from "./product.js";
import { addToCart,getCartItems,removeFromCart } from "./cart.js";
import { calculateTotalPrice, discountedPrice, taxInclusivePrice } from "./price.js";

let allProducts = getAllProducts();
console.log(allProducts);

let product1 = getProductsById(6);
let product2 = getProductsById(5);
let product3 = getProductsById(4);
let product4 = getProductsById(10);
let product5 = getProductsById(1);


//! ADD TO CART:
addToCart(product1);
addToCart(product2);
addToCart(product3);
addToCart(product4);
addToCart(product5);

//! GET THE CART:
let cart = getCartItems();
console.log(`Your Cart: `, cart);

//! REMOVE FROM CART:
let updatedcart = removeFromCart(4);
console.log(`Updated Cart: `, updatedcart);

//! Calculate Price:
let totalprice  = calculateTotalPrice(updatedcart)
console.log(`Cart Total: `,totalprice);

//! Discounted Price:
let priceWithDiscount = discountedPrice(totalprice)
console.log(`Discounted Price: `, priceWithDiscount);

//! Tax Included Price:
let amountToBePaid = taxInclusivePrice(priceWithDiscount)
console.log(`Final Amount to be Paid: `,amountToBePaid);