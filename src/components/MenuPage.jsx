import { useState } from 'react';
import { Categories, Items } from './menuNew'
import { useDispatch } from 'react-redux';
import { addProduct } from '../store/cartSlice';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { formatRupee } from '../store/utils';

export default function MenuPage() {
    const [activeCategory, setActiveCategory] = useState(Categories[0])
    const handleFilter = e => setActiveCategory(e.target.value)
    const filteredItems = Items.filter(el => el.category === activeCategory)

    const dispatch = useDispatch();
    const handleAddProduct = (product) => {
        dispatch(addProduct(product));
        toast(`${product.name} added to Cart`, {
            position: "top-center",
            autoClose: 2000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            theme: "dark",
        })
    };

    return (
        <div>
            <select name="status" aria-label="Project status" className='focus:outline-none border p-2 appearance-none w-full mb-4 text-center' onChange={handleFilter}>
                {Categories.map(category => <option key={category} value={category}>{category}</option>)}
            </select>
            <div>
                {filteredItems.map(({ name, category, rate, notes }) => {
                    return <li key={name} className={`grid grid grid-cols-2 gap-4 p-2 mb-5 border-b last:border-none`}>
                        <div className="flex items-center">
                            <div className="font-bold">{name}</div>
                            <div className="text-gray-600 text-xs">{notes}</div>
                        </div>
                        <div className="text-right flex flex-col">
                            {rate.map(({ id, price, size }, i) => <div key={i} className="flex items-center justify-between mb-2">
                                <div className="text-xs text-gray-500">{size}</div>
                                <div className="text-md font-semibold flex justify-end">{formatRupee(price)}</div>
                                <button className="text-xs bg-blue-500 text-white p-2 mt-1" onClick={() => handleAddProduct({ id, name, category, price, size, qty: 1 })}>
                                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                                        <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                                    </svg>
                                </button>
                            </div>)}
                        </div>
                    </li>
                })}
            </div>
            <ToastContainer />
        </div>
    )
}
