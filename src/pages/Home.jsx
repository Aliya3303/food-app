import { useEffect, useState } from "react";
import FoodCard from "../components/FoodCard";

function Home({ addToCart }) {
  const [foods, setFoods] = useState([]);

  useEffect(() => {
    fetch("https://www.themealdb.com/api/json/v1/1/search.php?s=")
      .then((res) => res.json())
      .then((data) => {
        setFoods(data.meals || []);
      });
  }, []);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "repeat(auto-fit, minmax(250px, 280px))",
        gap: "20px",
        padding: "20px",
        justifyContent: "center"
      }}
    >
      {foods.map((food) => (
        <FoodCard
          key={food.idMeal}
          food={food}
          addToCart={addToCart}
        />
      ))}
    </div>
  );
}

export default Home;
