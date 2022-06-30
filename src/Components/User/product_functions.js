export const addToCart = (item, qty) => {
    let cartItem = {
        itemid: item._id,
        name: item.name,
        qty: qty,
        price: item.price,
        image: item.image,
    }
    const localCart = JSON.parse(localStorage.getItem("cart"));
    const localCartCopy = [...localCart];
    console.log(localCartCopy);
    const isIncart = localCart.find(x => x.itemid === cartItem.itemid)
    if (isIncart) {
        isIncart.qty += qty
    }
    else {
        localCartCopy.push(cartItem)
    }
    localStorage.setItem("cart", JSON.stringify(localCartCopy))
    //api ma yo data send
}
export const editCart = (id, qty) => {
    const localCart = JSON.parse(localStorage.getItem("cart"));
    const localCartCopy = [...localCart];
    const isIncart = localCart.find(x => x.productid === id)
    if (isIncart) {
        localCartCopy.pop(id)
    }
    localStorage.setItem("cart", JSON.stringify(localCartCopy))
}

export const deleteFromCart = (id) => {
    console.log(id)
    const localCart = JSON.parse(localStorage.getItem("cart"));
    const localCartCopy = [...localCart];
    const newCart = localCart.filter(x => x.itemid !== id)
    console.log(localCartCopy)
    console.log(newCart);
    localStorage.setItem("cart", JSON.stringify(newCart))
}