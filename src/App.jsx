import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layouts from "./Layouts"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import Cart from "./pages/Cart"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element={<Layouts/>}>
        <Route path="/" element={<Home/>}/>
        <Route path="/shop" element={<Shop/>} />
        <Route path="/cart"  element={<Cart/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
