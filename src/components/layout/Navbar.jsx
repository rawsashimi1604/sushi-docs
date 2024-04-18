import { useEffect } from "react";
import { FaHome } from "react-icons/fa";
import { useLocation } from "react-router-dom";

function Navbar() {
  const location = useLocation();
  
  // useEffect(() => {
  // }, [location]);

  return (
    <nav className="w-full border-b-[0.2px] pb-3 border-custom-lightWhite tracking-wider font-light">
      <div className="flex flex-row items-center gap-2">
        <FaHome className="text-custom-chaKy h-4 w-4" />
        {location.pathname === "/" ? (
          <div className="flex items-center gap-2">
            <span className="text-custom-chaKy">/</span>
            <span className="text-sm tracking-widest">home</span>
          </div>
        ) : (
          <>
            {location.pathname.split("/").map((item) => {
              if (item !== "") {
                return (
                  <div className="flex items-center gap-2">
                    <span className="text-custom-chaKy">/</span>
                    <span className="text-sm tracking-widest">{item}</span>
                  </div>
                );
              }
            })}
          </>
        )}
      </div>
    </nav>
  );
}

export default Navbar;
