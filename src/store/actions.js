export default {
  addCart(context, payload) {
    let product = context.state.cartList.find(item => item.iid === payload.iid)
    if (!product) {
      payload.count = 1;//不同商品，数量设置为一，并将它添加到cartList中
      context.commit("addToCart", payload)
    } else {
      context.commit("addCount", product)
    }
    // console.log(context.state.cartList);
  }
}