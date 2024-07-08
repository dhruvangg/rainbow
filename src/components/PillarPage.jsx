import { useState, useRef, useEffect } from "react"
import { menu } from "./menu"
import { getRandomColor } from "../utils/function"
import orderStore from "../utils/store"
import { v4 as uuidv4 } from 'uuid'

export default function PillarPage() {
    const [activeMenuItem, setActiveMenuItem] = useState(null)
    const contentRef = useRef(null)

    const [orderState, setOrderState] = useState(orderStore.initialState)
    useEffect(() => {
        orderStore.subscribe(setOrderState)
        orderStore.init()
    }, [])

    console.log(orderState);

    const handleMenuClick = (index) => {
        setActiveMenuItem(index)

        const section = contentRef.current.children[0].children[index]
        section.scrollIntoView({ behavior: 'smooth' })
    }


    const handleOrder = ({ name, category, price, qty }) => {
        orderStore.addOrder({ id: uuidv4(), name, category, price, qty, unit: 1 })
    }

    return (
        <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 relative">
            <div className="hidden absolute lg:flex lg:h-screen lg:sticky lg:top-0">
                <ul className="w-full lg:border-r-2">
                    {menu.map(({ category, items }, i) => <li key={category} className={`p-2 w-full ${(activeMenuItem === i ? 'active' : '')}`} onClick={() => handleMenuClick(i)}>
                        <h4 className="font-semibold text-lg" >{category} ({items.length})</h4>
                    </li>
                    )}
                </ul>
            </div>
            <div className="col-span-2" ref={contentRef}>
                <ul className="px-4">
                    {menu.map(({ category, items }) => {
                        return <li key={category}>
                            <div className="flex items-center">
                                <h3 className="w-full text-center font-semibold text-2xl my-4" style={{ color: getRandomColor() }}>{category}</h3>
                            </div>
                            <ul>
                                {items.map(({ name, notes, rate }) => <li key={name} style={{ color: getRandomColor() }} className={`grid grid grid-cols-4 gap-4 p-2 mb-5 rounded-lg shadow-lg`}>
                                    <div className="col-span-2 flex items-center">
                                        <div className="font-bold">{name}</div>
                                        <div className="text-gray-600 text-xs">{notes}</div>
                                    </div>
                                    <div className="col-span-2 text-right flex">
                                        {rate.map(({ price, qty }, i) => <div key={i} className="flex-1">
                                            <div className="text-lg font-semibold flex justify-end">{price}</div>
                                            <div className="text-xs" style={{ whiteSpace: "pre-wrap" }}>{qty}</div>
                                            <button className="text-xs bg-blue-500 text-white rounded-full p-1 mt-1" onClick={() => handleOrder({ name, category, price, qty })}>
                                                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                                    <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                                </svg>
                                            </button>
                                        </div>)}
                                    </div>
                                </li>)}
                            </ul>
                        </li>
                    })}
                </ul>
            </div>
        </div>
    )
}
