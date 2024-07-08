import { useEffect, useState } from 'react'
import { Button, Dialog, DialogPanel } from '@headlessui/react'
import orderStore from '../utils/store'
import logo from '../assets/bg.png'

export default function Order() {
    const [{ orders }, setOrderState] = useState(orderStore.initialState)
    useEffect(() => {
        orderStore.subscribe(setOrderState)
        orderStore.init()
    }, [])


    let [isOpen, setIsOpen] = useState(false)

    function open() {
        setIsOpen(true)
    }

    function close() {
        setIsOpen(false)
    }

    let groupedData = {}
    if (orders.length > 0) {
        groupedData = orders.reduce((acc, current) => {
            const category = current.category;
            if (!acc[category]) {
                acc[category] = [];
            }
            acc[category].push(current);
            return acc;
        }, {});
    }

    return (
        <footer className='fixed bottom-0 w-full p-2 font-semibold text-sm text-center'>
            {orders.length > 0 ? <div>Total {orders.length} item(s).
                <Button onClick={open} className="p-2 font-semibold text-rose-700">
                    Show Order
                </Button>
            </div> : <span>No Items Selected.</span>}
            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4 bg-black/75">
                        <DialogPanel
                            transition
                            className="w-full max-w-md rounded-xl bg-white/5 duration-300 ease-out data-[closed]:transform-[scale(95%)] data-[closed]:opacity-0"
                        >

                            <div className="rounded bg-gray-50 px-6 pt-8 shadow-lg">
                                <div className="flex flex-col justify-center items-center gap-2">
                                    <h4 className="font-semibold">
                                        <img src={logo} alt='logo' width={150} />
                                    </h4>
                                    <p className="text-xs">Piplag. Nadiad</p>
                                </div>
                                {/* <div className="flex flex-col gap-3 border-b py-6 text-xs">
                                    <p className="flex justify-between">
                                        <span className="text-gray-400">Order Type:</span>
                                        <span>Dine-in</span>
                                    </p>
                                </div> */}
                                <div className="flex flex-col gap-3 py-2 text-xs">
                                    <div className="table w-full text-left">
                                        <div className="flex">
                                            <div className="w-full py-2">Product</div>
                                            <div className="min-w-[44px] py-2">Unit</div>
                                            <div className="min-w-[44px] py-2">Total</div>
                                        </div>
                                        <div className="border-b border-dashed my-1"></div>

                                        {Object.keys(groupedData).map(el => <div key={el}>
                                            <div className="flex">
                                                <div className="flex-1 py-1 font-bold" colSpan={3}>{el}</div>
                                            </div>
                                            {groupedData[el].map(({ id, name, qty, unit, price }) => <div key={id} className="flex pl-2">
                                                <div className="flex-1 py-1">{name} ({qty})</div>
                                                <div className="min-w-[44px]">{unit}</div>
                                                <div className="min-w-[44px]">{price}</div>
                                            </div>)}
                                        </div>)}
                                        <div className="border-b border-dashed my-1"></div>
                                        <div>
                                            <div className="flex">
                                                <div className="w-full py-2">Total</div>
                                                <div className="min-w-[44px] py-2"></div>
                                                <div className="min-w-[44px] py-2">{orders.reduce((acc, item) => acc + item.price, 0)}</div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="py-4 justify-center items-center flex flex-col gap-2">
                                        <p className="flex gap-2">Thank you!</p>
                                        <p className="flex gap-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"><path fill="#000" d="M11.05 14.95L9.2 16.8c-.39.39-1.01.39-1.41.01-.11-.11-.22-.21-.33-.32a28.414 28.414 0 01-2.79-3.27c-.82-1.14-1.48-2.28-1.96-3.41C2.24 8.67 2 7.58 2 6.54c0-.68.12-1.33.36-1.93.24-.61.62-1.17 1.15-1.67C4.15 2.31 4.85 2 5.59 2c.28 0 .56.06.81.18.26.12.49.3.67.56l2.32 3.27c.18.25.31.48.4.7.09.21.14.42.14.61 0 .24-.07.48-.21.71-.13.23-.32.47-.56.71l-.76.79c-.11.11-.16.24-.16.4 0 .08.01.15.03.23.03.08.06.14.08.2.18.33.49.76.93 1.28.45.52.93 1.05 1.45 1.58.1.1.21.2.31.3.4.39.41 1.03.01 1.43zM21.97 18.33a2.54 2.54 0 01-.25 1.09c-.17.36-.39.7-.68 1.02-.49.54-1.03.93-1.64 1.18-.01 0-.02.01-.03.01-.59.24-1.23.37-1.92.37-1.02 0-2.11-.24-3.26-.73s-2.3-1.15-3.44-1.98c-.39-.29-.78-.58-1.15-.89l3.27-3.27c.28.21.53.37.74.48.05.02.11.05.18.08.08.03.16.04.25.04.17 0 .3-.06.41-.17l.76-.75c.25-.25.49-.44.72-.56.23-.14.46-.21.71-.21.19 0 .39.04.61.13.22.09.45.22.7.39l3.31 2.35c.26.18.44.39.55.64.1.25.16.5.16.78z"></path></svg> +91 9876543210</p>
                                    </div>
                                </div>
                                <p className='text-xs text-red-500'>We do not save any order details. If you want to keep it, Take screenshot.</p>
                            </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog >
        </footer >
    )
}
