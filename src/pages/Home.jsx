import { useDispatch, useSelector } from "react-redux";
import { categories } from "../assets/MockData";
import home_image from "../assets/images/home_image.avif";
import Category from "../components/Category";
import Info from "../components/Info";
import { setProducts } from "../redux/productSlice";
import { useEffect } from "react";
import { imgContainer } from "../assets/MockData";
import Card from "../components/Card";
import Shop from "./Shop";

const Home = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setProducts(imgContainer));
  });
  const products = useSelector((state) => state.product.products);

  return (
    <div>
      <div className=" bg-white mt-2 px-4 md:px-16 lg:px-24">
        <div className="container mx-auto py-4 space-x-2 flex flex-col md:flex-row">
          <div className="w-full md:w-3/12 ">
            <div className="bg-red-600 text-white text-xs font-bold px-2 py-2.5">
              SHOP BY CATEGORIES
            </div>
            <ul className="space-y-4 bg-gray-100 p-3 border">
              {categories.map((category, index) => (
                <li
                  key={index}
                  className="flex items-center text-sm font-medium"
                >
                  <div className="w-2 h-2 border border-red-500 rounded-full mr-2"></div>
                  {category}
                </li>
              ))}
            </ul>
          </div>

          <div className="w-full md:w-9/12 mt-8 md:mt-0 h-96 relative">
            <img src={home_image} alt="home image" className="h-full w-full" />
            <div className="absolute top-[20px] right-[20px]">
              <p className="text-gray-600 mb-4">Shop anything you want.</p>
              <h2 className="text-3xl font-bold">Welcome to E-shop</h2>
              <p className="text-xl mt-2.5 font-bold text-gray-800">
                Millons of products available
              </p>
              <button className="bg-red-600 px-8 py-1.5 text-white mt-4 hover:bg-red-700 transform transition-transfrom duration-300 hover:scale-105">
                Shop Now
              </button>
            </div>
          </div>
        </div>
        <Info />
        <Category />
        <div className="mx-auto py-12">
          <h2 className="text-2xl font-bold mb-6 text-center">Top Products</h2>
          <div className=" grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-6 cursor-pointer">
            {products.slice(0, 5).map((product) => (
              <Card key={product.id} product={product} />
            ))}
          </div>
        </div>
      </div>
      <Shop />
    </div>
  );
};

export default Home;
