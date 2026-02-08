import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";

function FoodDetails() {
  const { id } = useParams();
  const [food, setFood] = useState(null);
  const [error, setError] = useState(false);

  const price = (id % 10) * 50 + 150;

  useEffect(() => {
    fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`)
      .then(res => res.json())
      .then(data => {
        if (data.meals) {
          setFood(data.meals[0]);
        } else {
          setError(true);
        }
      })
      .catch(() => setError(true));
  }, [id]);

  if (error) return <h3 style={{ textAlign: "center" }}>Failed to load food</h3>;
  if (!food) return <h3 style={{ textAlign: "center" }}>Loading...</h3>;

  return (
    <div
      style={{
        maxWidth: "1100px",
        margin: "30px auto",
        padding: "20px",
        display: "flex",
        gap: "30px",
        flexWrap: "wrap"
      }}
    >
      {/* LEFT: IMAGE */}
      <div style={{ flex: "1", minWidth: "280px" }}>
        <img
          src={food.strMealThumb}
          alt={food.strMeal}
          style={{
            width: "100%",
            borderRadius: "16px",
            boxShadow: "0 8px 20px rgba(0,0,0,0.15)"
          }}
        />
      </div>

      {/* RIGHT: DETAILS */}
      <div style={{ flex: "1", minWidth: "280px" }}>
        <h1 style={{ marginBottom: "10px" }}>{food.strMeal}</h1>

        <span
          style={{
            background: "#ffe6d5",
            color: "#fc8019",
            padding: "6px 12px",
            borderRadius: "20px",
            fontSize: "14px",
            display: "inline-block",
            marginBottom: "15px"
          }}
        >
          {food.strCategory}
        </span>

        <h2 style={{ color: "#fc8019", margin: "15px 0" }}>
          ₹ {price}
        </h2>

        <p style={{ lineHeight: "1.6", color: "#555" }}>
          {food.strInstructions}
        </p>

        <button
          style={{
            marginTop: "20px",
            padding: "12px 20px",
            backgroundColor: "#fc8019",
            color: "white",
            border: "none",
            borderRadius: "8px",
            cursor: "pointer",
            fontSize: "16px"
          }}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
}

export default FoodDetails;
