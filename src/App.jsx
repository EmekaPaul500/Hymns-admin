import "./App.css";

import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  RouterProvider,
} from "react-router-dom";

import Layout from "./Components/Layout";
import Home from "./Components/Home/Home";
import NewHymn from "./Components/NewHymn/NewHymn";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="/newHymn" element={<NewHymn />} />

        {/* <Route path="/hymn" element={<Hymn />} />
        <Route path="/verses" element={<Verses />} /> */}
      </Route>
    )
  );
  return (
    <main>
      <RouterProvider router={router} />
    </main>
  );
}

export default App;
