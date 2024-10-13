import { useDispatch, useSelector } from "react-redux";
import product_not_found from "../assets/images/product_not_found.png";
import { FaTrashAlt } from "react-icons/fa";
import { useState } from "react";
import Modal from "../components/Modal";
import ChangeAdderss from "../components/ChangeAdderss";
import { decreaseQuantity, increaseQuantity, removeFromCart } from "../redux/cartSlice";

const Cart = () => {
  const dispatch = useDispatch()
  const cart = useSelector((state) => state.cart);
  const [isModalOpen , setIsModalOpen] = useState(false)
  const [address,setAddress] = useState('main street , kalika chowk')
  
  return (
    <div className="container mx-auto py-8 min-h-96 px-4 md:px-16 lg:px-24">
      {cart.products.length > 0 ? (
        <div>
          <h3 className="text-2xl font-semibold mb-4">SHOPPING CART</h3>
          <div className="flex flex-col md:flex-row justify-between space-x-10 mt-8">
            <div className="md:w-2/3">
              <div className="flex justify-between border-b items-center mb-4 text-xs font-bold">
                <p>products</p>
                <div className="flex space-x-12">
                  <p>Price</p>
                  <p>Quantity</p>
                  <p>Subtotal</p>
                  <p>Remove</p>
                </div>
              </div>
              <div>
                {cart.products.map((product) => (
                  <div
                    key={product.id}
                    className="flex items-center justify-between p-3 border-b"
                  >
                    <div className="md:flex items-center space-x-4">
                      <img
                        src={product.image}
                        alt=""
                        className=" w-28  font-semibold object-contain"
                      />
                      <div className="flex-1 ml-4">
                        <h3 className="text-lg font-semibold">
                          {product.name}
                        </h3>
                      </div>
                    </div>
                    <div className="flex space-x-12 items-center">
                      <p>${product.price}</p>
                      <div className="flex items-center justify-center border">
                        <button 
                        onClick={()=>dispatch(decreaseQuantity(product))}
                        className="hover:bg-slate-100 text-xl font-bold px-1 justify-center border-r">
                          -
                        </button>
                        <p className="text-xl px-2">{product.quantity}</p>
                        <button
                          onClick={() => dispatch(increaseQuantity(product))}
                          className="text-xl px-1 border-l hover:bg-slate-100"
                        >
                          +
                        </button>
                      </div>
                      <p>${(product.quantity * product.price).toFixed(2)}</p>
                      <button
                        className="text-red-700 hover:text-red-500"
                        onClick={() => dispatch(removeFromCart(product))}
                      >
                        <FaTrashAlt />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="md:w-1/3 bg-white sm:mt-[10px] mt-0 p-6 rounded-lg shadow-md border">
              <h3 className="text-sm font-semibold mb-5">CART TOTAL</h3>
              <div className="flex justify-between mb-5 border-b pb-1">
                <span className="text-sm">Total Items:</span>
                <span>{cart.totalQuantity}</span>
              </div>
              <div className="mb-4 border-b pb-2">
                <p className="ml-2">Shipping :</p>
                <p className="ml-2">Shipping to :</p>
                <span className="text-sm font-bold">{address}</span>
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="text-blue-500 hover:underline mt-1 ml-2"
                >
                  change address
                </button>
              </div>
              <div className="flex justify-between mb-4">
                <span>Total Price :</span>
                <span> ${cart.totalPrice.toFixed(2)}</span>
              </div>
              <button className="w-full bg-red-600 text-white py-2 hover:bg-red-800">
                Proceed to checkout
              </button>
            </div>
          </div>
          <Modal isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen}>
            <ChangeAdderss
              address={address}
              setAddress={setAddress}
              setIsModalOpen={setIsModalOpen}
            />
          </Modal>
        </div>
      ) : (
        <div className="flex justify-center">
          <img
            src={product_not_found}
            alt="product not found image"
            className="h-96"
          />
        </div>
      )}
    </div>
  );
};

export default Cart;
