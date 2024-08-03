import { BehaviorSubject } from 'rxjs';

class CartService {
  cartSubject = new BehaviorSubject([]);

  cart$ = this.cartSubject.asObservable();

  addProduct(product) {
    const currentCart = this.cartSubject.getValue();
    const existingProduct = currentCart.find((item) => item.id === product.id);
    if (existingProduct) {
      existingProduct.qty++;
    } else {
      currentCart.push({ ...product, qty: 1 });
    }
  
    console.log('addProduct', product, currentCart);
    this.cartSubject.next(currentCart);
  }

  removeProduct(productId) {
    const currentCart = this.cartSubject.getValue();
    const index = currentCart.findIndex((item) => item.id === productId);
    if (index !== -1) {
      currentCart.splice(index, 1);
      this.cartSubject.next(currentCart);
    }
  }

  updateProductQty(productId, qty) {
    const currentCart = this.cartSubject.getValue();
    const product = currentCart.find((item) => item.id === productId);
    if (product) {
      product.qty = qty;
      this.cartSubject.next(currentCart);
    }
  }
}

export default CartService;

// import { Subject } from "rxjs";

// const subject = new Subject()

// const initialState = {
//     orders: []
// }

// let state = initialState

// const orderStore = {
//     init: () => {
//         state = { ...state }
//         subject.next(state)
//     },
//     subscribe: setState => subject.subscribe(setState),
//     addOrder: (order) => {
//         state = {
//             ...state,
//             orders: [...state.orders, order]
//         }
//         subject.next(state)
//     },
//     initialState
// }

// export default orderStore;