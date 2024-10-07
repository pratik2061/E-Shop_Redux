import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from "react-router-dom"
import Layouts from "./Layouts"
import Home from "./pages/Home"

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path = "/" element={<Layouts/>}>
        <Route path="/" element={<Home/>}/>
      </Route>
    )
  )

  return (
    <RouterProvider router={router}/>
  )
}

export default App
