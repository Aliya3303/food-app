import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Home from "./pages/Home";
import FoodDetails from "./pages/FoodDetails";
import Layout from "./pages/Layout";

function App() {
  const [selectedCategory, setSelectedCategory] = useState("");
  const [cartCount, setCartCount] = useState(0);

  const addToCart = () => {
    setCartCount((prev) => prev + 1);
  };

  const categories = [
    "Beef",
    "Chicken",
    "Dessert",
    "Seafood",
    "Vegetarian"
  ];

  return (
    <BrowserRouter>
      <Routes>
        <Route
          element={
            <Layout
              categories={categories}
              selectedCategory={selectedCategory}
              setSelectedCategory={setSelectedCategory}
              cartCount={cartCount}
            />
          }
        >
          <Route
            path="/"
            element={<Home addToCart={addToCart} />}
          />
          <Route path="/food/:id" element={<FoodDetails />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
