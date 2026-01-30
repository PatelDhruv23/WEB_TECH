
let cart =[]

export function addToCart(product){

    cart.push(product)
}

export function getCartItems(){
    return cart
}

export function removeFromCart(removeid){

    cart = cart.filter((product)=>{
        return product.id !== removeid;
    })
    return cart;
}

