import { FaSearch, FaShoppingCart, FaUser } from "react-icons/fa"
import { Link } from "react-router-dom"

function NavBar() {
  return (
    <nav className="bg-white shadow-md">
      <div className="container mx-auto px-4 md:px-16 lg:px-24 py-4 flex justify-between items-center">
        <div className="text-lg font-bold">
          <Link to={'/'}>E-shop</Link>
        </div>
        <div className="relative flex-1 mx-4">
          <form>
            <input type="text" placeholder="Search Product.." className="w-full rounded border py-2 px-4" />
            <FaSearch className="absolute top-3 right-3 text-red-500"/>
          </form>
        </div>
        <div  className="flex items-center space-x-4 ">
          <Link to={'/cart'}>
          <FaShoppingCart className="text-xl"/>
          </Link>
          <button className="hidden md:block ">
            Login  |  Register
          </button>
          <button className=" block md:hidden">
            <FaUser/>
          </button>
        </div>
      </div>
      <div className=" flex justify-center items-center text-sm font-bold space-x-8 py-4">
        <Link className="hover:underline" to={'/'}>Home</Link>
        <Link className="hover:underline" to={'/shop'}>Shop</Link>
        <Link className="hover:underline" to={'/contact'}>Contact</Link>
        <Link className="hover:underline" to={'/about'}>About</Link>
      </div>
    </nav>
  )
}

export default NavBar