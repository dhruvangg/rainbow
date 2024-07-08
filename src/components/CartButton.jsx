import { useEffect, useState } from "react"
import orderStore from "../utils/store"
import { v4 as uuidv4 } from 'uuid'

export default function CartButton({ name, category, price, qty }) {

    const [{ orders }, setOrderState] = useState(orderStore.initialState)
    useEffect(() => {
        orderStore.subscribe(setOrderState)
        orderStore.init()
    }, [])


    const handleOrder = ({ name, category, price, qty }) => {
        orderStore.addOrder({ id: uuidv4(), name, category, price, qty, unit: 1 })
    }
    // orders.filter(order => order.name === item.name && order.category === item.category)

    return (
        <button className="text-xs bg-blue-500 text-white rounded-full p-1 mt-1" onClick={() => handleOrder({ name, category, price, qty })}>
            <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
            </svg>
        </button>
    )
}
