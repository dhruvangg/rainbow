const menu = [{
  category: 'American Thickshake',
  items: [
    { name: "Vanilla", price: 90 },
    { name: "Strawberry", price: 90 },
    { name: "Pineapple", price: 90 },
    { name: "Chickoo", price: 90 },
    { name: "Coee Caramel", price: 90 },
    { name: "Plain Chocolate", price: 90 },
    { name: "Bubble Gum", price: 90 },
    { name: "Mango", price: 90 },
    { name: "Chickoo Chocolate", price: 90 },
    { name: "Oreo Cookie (name: Cream)", price: 90 },
    { name: "Paan Masala", price: 90 },
    { name: "Gulkand", price: 90 },
    { name: "Buer Scotch", price: 90 },
    { name: "Vanilla Chips", price: 90 },
    { name: "Rose Malai", price: 90 },
    { name: "Mango Malai", price: 90 },
    { name: "Kaju Draksh", price: 90 },
    { name: "Chocolate Chips", price: 90 },
    { name: "Black Current", price: 90 },
    { name: "Kaju Anjeer", price: 90 },
    { name: "Kaju Badam", price: 90 },
    { name: "Mava Malai", price: 90 },
    { name: "Almond Caramel", price: 90 },
    { name: "Kaju Gulkand", price: 140 },
    { name: "Kaju Mango", price: 140 },
    { name: "Kesar Pista", price: 140 },
    { name: "Kaju Khajur", price: 140 },
    { name: "Choco Crunch", price: 140 },
    { name: "Gulab Masti", price: 140 },
    { name: "Nuy Nutella", price: 140 },
    { name: "Kit Kat", price: 140 },
    { name: "Dairy Milk", price: 140 },
    { name: "Walnut Chocolate", price: 140 },
    { name: "Fresh Kiwi", price: 140 },
    { name: "Fresh Sitafal", price: 140 },
    { name: "Crunchy Red Velvet", price: 140 },
    { name: "Roasted Almond", price: 140 },
    { name: "Kaju Chocolate", price: 140 },
    { name: "Dryfruit", price: 140 },
    { name: "Fresh Strawberry", price: 140 },
    { name: "Pista Malai", price: 140 },
    { name: "Rajbhog", price: 140 },
    { name: "Lotus Bisco", price: 140 },
    { name: "Kaju Coconut", price: 140 },
    { name: "Kaju Katri", price: 150 },
    { name: "Choco Brownie", price: 160 },
    { name: "Maakhan Bhog", price: 160 },
    { name: "Rajwadi Kaju", price: 160 },
    { name: "Kaju Malai Tukda", price: 170 },
    { name: "Kaju Anjeer Tukda", price: 170 },
    { name: "Kaju Badam Tukda", price: 170 },
    { name: "Fresh Mango", price: 170 },
    { name: "American Dryfruit", price: 170 },
    { name: "Rajwadi Dryfruit", price: 170 },
    { name: "Rocher Ferrero", price: 170 },
    { name: "Dryfruit Khazana", price: 180 }
  ]
}, {
  category: 'SPECIAL FALOODA',
  items: [
    { name: "Mastani (250 ML)", price: 70 },
    { name: "Shalimar (250 ML)", price: 80 },
    { name: "Rose Falooda", price: 120 },
    { name: "Mango Falooda", price: 140 },
    { name: "Strawberry Falooda", price: 140 },
    { name: "Green Pista Falooda", price: 140 },
    { name: "Chocolate Falooda", price: 140 },
    { name: "Red Rose Falooda", price: 150 },
    { name: "Black Current Falooda", price: 150 },
    { name: "Badam Pista Falooda", price: 150 },
    { name: "Kaju Anjeer Falooda", price: 150 },
    { name: "Kesar Pista Falooda", price: 150 },
    { name: "Sitafal Falooda", price: 160 },
    { name: "Rajwadi Falooda", price: 170 },
    { name: "Rajbhog Falooda", price: 170 }
  ]
}, {
  category: "Fresh Juice",
  items: [
    { name: "Mosambi (250 ML)", price: 60 },
    { name: "Watermelon (250 ML)", price: 60 },
    { name: "Pineapple (250 ML)", price: 70 },
    { name: "Orange", price: 80 },
    { name: "Jambu", price: 120 },
    { name: "Kiwi", price: 120 },
    { name: "Apple", price: 120 },
    { name: "Dadam", price: 120 },
    { name: "Mango (Seasonal)", price: 120 },
    { name: "Strawberry (Seasonal)", price: 120 }
  ]
}]

export default function App() {

  return (
    <div className="grid grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="grid gap-4 bg-amber-100">
        <ul className="flex flex-col p-4">
          {/* {menu['thickShakes'].items.map(item => {
            return <li key={item.name} className="border-gray-400 flex flex-row mb-4">
              <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4">
                <div className="flex-1 pl-1 mr-16">
                  <div className="font-medium">{item.name}</div>
                  <div className="text-gray-600 text-xs">200ml</div>
                </div>
                <div className="text-gray-600 text-lg font-semibold">{item.price}</div>
              </div>
            </li>
          })
          } */}
          {menu.map((category) => {
            return 
          })}
          <li className="border-gray-400 flex flex-row mb-2">
            <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">⚽️</div>
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium">Training</div>
                <div className="text-gray-600 text-sm">1h</div>
              </div>
              <div className="text-gray-600 text-xs">10:00 AM</div>
            </div>
          </li>
          <li className="border-gray-400 flex flex-row mb-2">
            <div className="select-none cursor-pointer bg-gray-200 rounded-md flex flex-1 items-center p-4  transition duration-500 ease-in-out transform hover:-translate-y-1 hover:shadow-lg">
              <div className="flex flex-col rounded-md w-10 h-10 bg-gray-300 justify-center items-center mr-4">?</div>
              <div className="flex-1 pl-1 mr-16">
                <div className="font-medium">Study</div>
                <div className="text-gray-600 text-sm">4h</div>
              </div>
              <div className="text-gray-600 text-xs">1:00 PM</div>
            </div>
          </li>
        </ul>
      </div>
      <div className="grid gap-4 bg-amber-100">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-3.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-4.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-5.jpg" alt="" />
        </div>
      </div>
      <div className="grid gap-4 bg-amber-100">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-6.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-7.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-8.jpg" alt="" />
        </div>
      </div>
      <div className="grid gap-4 bg-amber-100">
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-9.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-10.jpg" alt="" />
        </div>
        <div>
          <img className="h-auto max-w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/docs/gallery/masonry/image-11.jpg" alt="" />
        </div>
      </div>
    </div>
  )
}