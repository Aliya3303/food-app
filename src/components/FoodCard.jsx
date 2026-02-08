import { useNavigate } from "react-router-dom";

function FoodCard({ food, addToCart }) 
{
  const navigate = useNavigate();
  const price = (food.idMeal % 10) * 50 + 150;

  return (
    <div
      onClick={() => navigate(`/food/${food.idMeal}`)}
      style={{
        maxWidth: "280px",
        margin: "0 auto",
        border: "1px solid #e0e0e0",
        borderRadius: "14px",
        padding: "12px",
        cursor: "pointer",
        background: "white",
        boxShadow: "0 4px 10px rgba(0,0,0,0.08)"
      }}
    >
      <img
        src={food.strMealThumb}
        alt={food.strMeal}
        style={{
          width: "100%",
          height: "180px",
          objectFit: "cover",
          borderRadius: "10px"
        }}
      />

      <h4 style={{ margin: "10px 0 4px" }}>{food.strMeal}</h4>

      <p style={{ color: "#666", fontSize: "14px", marginBottom: "6px" }}>
        {food.strCategory}
      </p>

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <span style={{ color: "#fc8019", fontWeight: "bold" }}>
          ₹ {price}
        </span>

        {/* ⭐ ADD TO CART BUTTON */}
        <button
          onClick={(e) => {
            e.stopPropagation(); // 🔥 important
            addToCart();  
          }}
          style={{
            background: "#fc8019",
            color: "white",
            border: "none",
            padding: "6px 12px",
            borderRadius: "6px",
            cursor: "pointer",
            fontSize: "13px"
          }}
        >
          ADD
        </button>
      </div>
    </div>
  );
}

export default FoodCard;
