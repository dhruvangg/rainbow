import { Subject } from "rxjs";

const subject = new Subject()

const initialState = {
    orders: []
}

let state = initialState

const orderStore = {
    init: () => {
        state = { ...state }
        subject.next(state)
    },
    subscribe: setState => subject.subscribe(setState),
    addOrder: (order) => {
        state = {
            ...state,
            orders: [...state.orders, order]
        }
        subject.next(state)
    },
    initialState
}

export default orderStore;