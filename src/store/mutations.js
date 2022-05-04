export default {
  // addCart(state, payload) {
  //   // //方法一：使用循环
  //   // let flag = true
  //   // state.cartList.forEach(ele => {
  //   //   if (ele.iid === payload.iid) {//判断是否是同一个商品
  //   //     flag = false;
  //   //     ele.count += 1;//同一个商品：数量加一
  //   //   }
  //   // });
  //   // if (flag) {
  //   //   payload.count = 1;//不同商品，数量设置为一，并将它添加到cartList中
  //   //   state.cartList.push(payload);
  //   // }
  //   //方法二：使用find函数

  //   let product = state.cartList.find(item => item.iid === payload.iid)
  //   if (!product) {
  //     payload.count = 1;//不同商品，数量设置为一，并将它添加到cartList中
  //     state.cartList.push(payload);
  //   } else {
  //     product.count += 1
  //   }
  //   console.log(state.cartList);
  // }


  addToCart(state, payload) {
    payload.checked = true
    state.cartList.push(payload)
  },
  addCount(state, payload) {
    payload.count++
  }
}