import Navbar from "../components/Navbar";
import { Outlet } from "react-router-dom";

function Layout({ categories, selectedCategory, setSelectedCategory,cartCount }) {
  return (
    <>
      <Navbar
        categories={categories}
        selectedCategory={selectedCategory}
        setSelectedCategory={setSelectedCategory}
        cartCount={cartCount}
      />
      <Outlet />
    </>
  );
}

export default Layout;
