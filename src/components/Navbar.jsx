function Navbar({ categories, selectedCategory, setSelectedCategory, cartCount }) {
  return (
    <div
      style={{
        position: "sticky",
        top: 0,
        zIndex: 100,
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "14px 24px",
        background: "#fc8019",
        color: "white",
        boxShadow: "0 4px 10px rgba(0,0,0,0.15)"
      }}
    >
      <h2 style={{ margin: 0 }}>🍽️ Aliya’s Restaurant</h2>

      <div style={{ display: "flex", alignItems: "center", gap: "16px" }}>
        <select
          value={selectedCategory}
          onChange={(e) => setSelectedCategory(e.target.value)}
          style={{
            padding: "6px 10px",
            borderRadius: "6px",
            border: "none",
            outline: "none",
            fontSize: "14px",
            cursor: "pointer"
          }}
        >
          <option value="">All</option>
          {categories.map((cat) => (
            <option key={cat} value={cat}>
              {cat}
            </option>
          ))}
        </select>

        <div
          style={{
            background: "white",
            color: "#fc8019",
            padding: "6px 12px",
            borderRadius: "20px",
            fontWeight: "bold"
          }}
        >
          🛒 {cartCount}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
