
export function calculateTotalPrice(updatedcart){
    let totalprice = updatedcart.reduce((total,cart)=>{
        return total + cart.price  
    }, 0)
    return totalprice;
}
export function discountedPrice(totalprice){

    let discount = totalprice - (totalprice * 0.1)
    return discount;
}

export function taxInclusivePrice(discountedPrice){
    let finalprice = discountedPrice + (discountedPrice * 0.12)
    return finalprice;
}
