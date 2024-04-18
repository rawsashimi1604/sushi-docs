import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Navbar() {

  // Get the current path
  const location = useLocation();

  useEffect(() => {
    console.log(location)
  }, [location])

  return (
    <nav className="w-full border-b pb-3 border-white tracking-wider font-light">
      {/* TODO: add some breadcrumbs */}
      <div className="flex flex-row items-center gap-2">
        <FaHome className="text-custom-chaKy h-4 w-4" />
        <span className="text-custom-chaKy">/</span>
        <span>introduction</span>
      </div>
    </nav>
  );
}

export default Navbar;
