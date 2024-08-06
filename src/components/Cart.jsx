import { useSelector, useDispatch } from 'react-redux';
import { removeProduct, addProductQty, removeProductQty } from '../store/cartSlice';
import { Link } from 'react-router-dom';
import { formatRupee } from '../store/utils';

export default function Cart() {
    const cart = useSelector((state) => state.cart.products);
    const dispatch = useDispatch();

    const handleRemoveProduct = (id) => {
        dispatch(removeProduct({ id }));
    };

    const handleRemoveQty = (id) => {
        dispatch(removeProductQty({ id }));
    };
    const handleAddQty = (id) => {
        dispatch(addProductQty({ id }));
    };

    const groupedCart = cart.reduce((acc, item) => {
        (acc[item.category] = acc[item.category] || []).push(item);
        return acc;
    }, {})

    if (cart.length === 0) {
        return <section>
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto text-center font-semibold text-lg my-4">
                <h4 className='mb-4'>You do not have anything in your cart.</h4>
                <Link className='text-blue-700 underline' to={'/'}>Back to Menu</Link>
            </div>
        </section>
    }

    const subTotal = cart.reduce((acc, item) => acc + (item.price * item.qty), 0)

    
    
    let whatsAppLink = 'https://wa.me/8155896243?text=';
    Object.keys(groupedCart).map((el, i) => {
        whatsAppLink += `${i+1} ${el}`
        whatsAppLink += '%0a'
        {groupedCart[el].map(({ name, size, qty }) => {
            whatsAppLink += `- ${name} _(${size})_ ${qty}%0a`
        })}
        whatsAppLink += `%0a`
    })
    whatsAppLink += `%0a%0a`
    whatsAppLink += `*SubTotal = ${subTotal}*`
    

    return (
        <section>
            <div className="w-full max-w-7xl px-4 md:px-5 lg-6 mx-auto">
                <h2 className="font-bold text-2xl leading-10 mb-5 text-center text-black">Your Order</h2>
                {Object.keys(groupedCart).map((el) => {
                    return (
                        <div key={el} className="border p-4 lg:p-8 grid grid-cols-12 mb-4 max-lg:max-w-lg max-lg:mx-auto gap-y-4">
                            <div className='text-xl font-bold col-span-12'>{el}</div>
                            {groupedCart[el].map(({ id, name, price, size, qty }) => {
                                return (
                                    <div key={id} className="col-span-12 lg:col-span-10 detail w-full lg:pl-3">
                                        <div className="flex items-center justify-between w-full">
                                            <h5 className="font-semibold text-lg text-gray-900">{name}</h5>
                                            <button className="rounded-full group flex items-center justify-center focus-within:outline-red-500" onClick={() => handleRemoveProduct(id)}>
                                                <svg width="34" height="34" viewBox="0 0 34 34" fill="none"
                                                    xmlns="http://www.w3.org/2000/svg">
                                                    <circle className="fill-red-50 transition-all duration-500 group-hover:fill-red-400"
                                                        cx="17" cy="17" r="17" fill="" />
                                                    <path className="stroke-red-500 transition-all duration-500 group-hover:strokeWhite"
                                                        d="M14.1673 13.5997V12.5923C14.1673 11.8968 14.7311 11.333 15.4266 11.333H18.5747C19.2702 11.333 19.834 11.8968 19.834 12.5923V13.5997M19.834 13.5997C19.834 13.5997 14.6534 13.5997 11.334 13.5997C6.90804 13.5998 27.0933 13.5998 22.6673 13.5997C21.5608 13.5997 19.834 13.5997 19.834 13.5997ZM12.4673 13.5997H21.534V18.8886C21.534 20.6695 21.534 21.5599 20.9807 22.1131C20.4275 22.6664 19.5371 22.6664 17.7562 22.6664H16.2451C14.4642 22.6664 13.5738 22.6664 13.0206 22.1131C12.4673 21.5599 12.4673 20.6695 12.4673 18.8886V13.5997Z"
                                                        stroke="#EF4444" strokeWidth="1.6" strokeLinecap="round" />
                                                </svg>
                                            </button>
                                        </div>
                                        <p className="mb-2 text-xs">({size})</p>
                                        <div className="flex justify-between items-center">
                                            <div className="flex items-center gap-4">
                                                <button
                                                    onClick={() => handleRemoveQty(id)}
                                                    className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                                    <svg className="stroke-black" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M4.5 9.5H13.5" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                                <input type="text" id="number"
                                                    className="border border-gray-200 rounded-full w-10 aspect-square outline-none font-semibold text-sm py-1 px-2 text-center select-none"
                                                    value={qty} readOnly />
                                                <button
                                                    onClick={() => handleAddQty(id)}
                                                    className="group rounded-[50px] border border-gray-200 shadow-sm shadow-transparent p-2 flex items-center justify-center bg-white transition-all duration-500 hover:shadow-gray-200 hover:bg-gray-50 hover:border-gray-300 focus-within:outline-gray-300">
                                                    <svg className="stroke-black" width="18" height="19" viewBox="0 0 18 19" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                        <path d="M3.75 9.5H14.25M9 14.75V4.25" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
                                                    </svg>
                                                </button>
                                            </div>
                                            <h6 className="text-indigo-600 font-bold text-right">{formatRupee(price * qty)}</h6>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    )
                })}
                <div className="flex flex-row font-bold text-xl py-4">
                    <h5 className="flex-1">Subtotal</h5>
                    <h6 className="flex-1 text-indigo-600 text-right">{formatRupee(subTotal)}</h6>
                </div>
                {/* href="https://wa.me/8155896243?text=I'm%20interested%20in%20your%20car%0afor%20sale" */}
                <a href={whatsAppLink} className="flex justify-center items-center py-4 px-6 bg-indigo-600 text-white font-semibold text-lg w-full text-center transition-all duration-500 hover:bg-indigo-700 ">
                    <span>Order on &nbsp;</span>
                    <svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="40" height="40" viewBox="0 0 48 48">
                        <path fill="#fff" d="M4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5c5.1,0,9.8,2,13.4,5.6	C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19c0,0,0,0,0,0h0c-3.2,0-6.3-0.8-9.1-2.3L4.9,43.3z"></path><path fill="#fff" d="M4.9,43.8c-0.1,0-0.3-0.1-0.4-0.1c-0.1-0.1-0.2-0.3-0.1-0.5L7,33.5c-1.6-2.9-2.5-6.2-2.5-9.6	C4.5,13.2,13.3,4.5,24,4.5c5.2,0,10.1,2,13.8,5.7c3.7,3.7,5.7,8.6,5.7,13.8c0,10.7-8.7,19.5-19.5,19.5c-3.2,0-6.3-0.8-9.1-2.3	L5,43.8C5,43.8,4.9,43.8,4.9,43.8z"></path><path fill="#cfd8dc" d="M24,5c5.1,0,9.8,2,13.4,5.6C41,14.2,43,18.9,43,24c0,10.5-8.5,19-19,19h0c-3.2,0-6.3-0.8-9.1-2.3	L4.9,43.3l2.7-9.8C5.9,30.6,5,27.3,5,24C5,13.5,13.5,5,24,5 M24,43L24,43L24,43 M24,43L24,43L24,43 M24,4L24,4C13,4,4,13,4,24	c0,3.4,0.8,6.7,2.5,9.6L3.9,43c-0.1,0.3,0,0.7,0.3,1c0.2,0.2,0.4,0.3,0.7,0.3c0.1,0,0.2,0,0.3,0l9.7-2.5c2.8,1.5,6,2.2,9.2,2.2	c11,0,20-9,20-20c0-5.3-2.1-10.4-5.8-14.1C34.4,6.1,29.4,4,24,4L24,4z"></path><path fill="#40c351" d="M35.2,12.8c-3-3-6.9-4.6-11.2-4.6C15.3,8.2,8.2,15.3,8.2,24c0,3,0.8,5.9,2.4,8.4L11,33l-1.6,5.8	l6-1.6l0.6,0.3c2.4,1.4,5.2,2.2,8,2.2h0c8.7,0,15.8-7.1,15.8-15.8C39.8,19.8,38.2,15.8,35.2,12.8z"></path><path fill="#fff" fillRule="evenodd" d="M19.3,16c-0.4-0.8-0.7-0.8-1.1-0.8c-0.3,0-0.6,0-0.9,0	s-0.8,0.1-1.3,0.6c-0.4,0.5-1.7,1.6-1.7,4s1.7,4.6,1.9,4.9s3.3,5.3,8.1,7.2c4,1.6,4.8,1.3,5.7,1.2c0.9-0.1,2.8-1.1,3.2-2.3	c0.4-1.1,0.4-2.1,0.3-2.3c-0.1-0.2-0.4-0.3-0.9-0.6s-2.8-1.4-3.2-1.5c-0.4-0.2-0.8-0.2-1.1,0.2c-0.3,0.5-1.2,1.5-1.5,1.9	c-0.3,0.3-0.6,0.4-1,0.1c-0.5-0.2-2-0.7-3.8-2.4c-1.4-1.3-2.4-2.8-2.6-3.3c-0.3-0.5,0-0.7,0.2-1c0.2-0.2,0.5-0.6,0.7-0.8	c0.2-0.3,0.3-0.5,0.5-0.8c0.2-0.3,0.1-0.6,0-0.8C20.6,19.3,19.7,17,19.3,16z" clipRule="evenodd"></path>
                    </svg>
                    <span>&nbsp;Whatsapp</span>
                </a>
            </div>
        </section >

    )
}
