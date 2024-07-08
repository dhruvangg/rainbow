import { useEffect } from "react"
import { useState } from "react"
import { useRef } from "react"
import { menu } from "./menu"

export default function App() {
  const [activeMenuItem, setActiveMenuItem] = useState(null)
  const contentRef = useRef(null)

  const handleMenuClick = (index) => {
    setActiveMenuItem(index)

    const section = contentRef.current.children[0].children[index]
    section.scrollIntoView({ behavior: 'smooth' })
  }

  const handleContentScroll = () => {
    const contentSections = Array.from(contentRef.current.children[0].children)
    const scrollPosition = window.pageYOffset

    console.log(contentSections);
    contentSections.forEach((section, i) => {
      const top = section.offsetTop - 100
      const bottom = top + section.offsetHeight;
      if (scrollPosition >= top && scrollPosition < bottom) {
        console.log(i);
        setActiveMenuItem(i)
      }
    })
  }

  useEffect(() => {
    window.addEventListener('scroll', handleContentScroll)
    return () => {
      window.removeEventListener('scroll', handleContentScroll)
    }
  }, [])

  const hex2rgba = (hex, alpha = 1) => {
    const [r, g, b] = hex.match(/\w\w/g).map(x => parseInt(x, 16));
    return `rgba(${r},${g},${b},${alpha})`;
  };

  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="grid lg:grid-cols-3 grid-cols-1 gap-8 relative">
        <div className="hidden absolute lg:flex lg:h-screen lg:sticky lg:top-0 bg-white">
          <ul className="w-full lg:border-r-2">
            {menu.map(({ category, color, items }, i) => {
              const backgroundColor = activeMenuItem === i ? hex2rgba(color, 0.1) : ''
              return <li key={category} className={`p-2 w-full ${(activeMenuItem === i ? 'active' : '')}`} style={{ color, backgroundColor }} onClick={() => handleMenuClick(i)}>
                <h4 className="font-semibold text-lg">{category} ({items.length})</h4>
              </li>
            })}
          </ul>
        </div>
        <div className="col-span-2" ref={contentRef}>
          <ul className="px-4">
            {menu.map(({ category, color, items, image }) => {
              return <li key={category} style={{ color }}>

                <div className="flex items-center">
                  {image ? <div className="bg-gray-100 h-20 w-20 flex justify-center rounded-lg mr-4 my-2">
                    <img src={image} alt={category} className="max-h-full" />
                  </div> : ''}
                  <h3 className="font-semibold text-2xl my-4">{category}</h3>
                </div>
                <ul>
                  {items.map(({ name, notes, rate }) => <li key={name} className="grid grid grid-cols-5 gap-4 p-2 mb-5 rounded-lg shadow">
                    <div className="col-span-3">
                      <div className="font-medium">{name}</div>
                      <div className="text-gray-600 text-xs">{notes}</div>
                    </div>
                    <div className="col-span-2 text-right flex">
                      {rate.map(({ price, qty }, i) => <div key={i} className="flex-1">
                        <div className="text-lg font-semibold">{price}</div>
                        <div className="text-xs font-semibold" style={{ whiteSpace: "pre-wrap" }}>{qty}</div>
                      </div>)}
                    </div>
                  </li>)}
                </ul>
              </li>
            })}
          </ul>
        </div>
      </div>
    </div>

  )
}