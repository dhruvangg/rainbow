import { BrowserRouter, Route, Routes } from "react-router-dom";
import Logo from './assets/bg.png'
import Home from "./pages/Home";
import Cart from "./components/Cart";
import Footer from "./components/Footer";



export default function App() {
  return (
    <BrowserRouter>
      <main className="flex flex-col min-h-screen max-w-screen-md mx-auto shadow-lg">
        <header className="sticky p-2 top-0 flex justify-center border-b z-10 bg-white">
          <img width={200} src={Logo} alt="logo" />
        </header>
        <article className="py-6 px-3 flex-auto">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/cart" element={<Cart />} />
          </Routes>
        </article>
        <Footer />
      </main>
    </BrowserRouter>
  )
}