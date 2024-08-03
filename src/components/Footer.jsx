import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom"

const menu = [{
    key: 'home',
    to: '/',
    label: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M9.293 2.293a1 1 0 0 1 1.414 0l7 7A1 1 0 0 1 17 11h-1v6a1 1 0 0 1-1 1h-2a1 1 0 0 1-1-1v-3a1 1 0 0 0-1-1H9a1 1 0 0 0-1 1v3a1 1 0 0 1-1 1H5a1 1 0 0 1-1-1v-6H3a1 1 0 0 1-.707-1.707l7-7Z" clipRule="evenodd" />
    </svg>
}, {
    key: 'cart',
    to: '/cart',
    label: <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="size-6">
        <path fillRule="evenodd" d="M6 5v1H4.667a1.75 1.75 0 0 0-1.743 1.598l-.826 9.5A1.75 1.75 0 0 0 3.84 19H16.16a1.75 1.75 0 0 0 1.743-1.902l-.826-9.5A1.75 1.75 0 0 0 15.333 6H14V5a4 4 0 0 0-8 0Zm4-2.5A2.5 2.5 0 0 0 7.5 5v1h5V5A2.5 2.5 0 0 0 10 2.5ZM7.5 10a2.5 2.5 0 0 0 5 0V8.75a.75.75 0 0 1 1.5 0V10a4 4 0 0 1-8 0V8.75a.75.75 0 0 1 1.5 0V10Z" clipRule="evenodd" />
    </svg>
}]

export default function Footer() {
    const cart = useSelector((state) => state.cart.products);
    const count = cart.reduce((acc, item) => acc + item.qty, 0)
    return (
        <footer className="sticky bottom-0 border-t z-10 bg-white">
            <nav>
                <ul className="flex justify-center">
                    {menu.map(({ key, label, to }) => <li key={key}>
                        <NavLink to={to} className={({ isActive }) => isActive ? 'border-b-2 border-blue-500 flex text-blue-500 p-4' : 'flex p-4'}>
                            {label}
                            {key === 'cart' ? <sup className="font-bold">{count}</sup> : ''}
                        </NavLink>
                    </li>)}
                </ul>
            </nav>
        </footer>
    )
}
