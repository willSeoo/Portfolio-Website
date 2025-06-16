import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, User, Bell, Settings, Code, Palette } from "lucide-react";

const BottomNavbar = () => {
  const location = useLocation();
  const [hoverIndex, setHoverIndex] = useState(null);

  const navItems = [
    { path: "/", icon: <Home size={17} />, label: "Home" },
    { path: "/profile", icon: <User size={17} />, label: "Profile" },
    { path: "/project", icon: <Code size={17} />, label: "Project" },
    { path: "/portfolio", icon: <Palette size={17} />, label: "Design" },
    { path: "/portfolio", icon: <Palette size={17} />, label: "Design" },
  ];
  

  return (
    <div
      className={`fixed bottom-4 left-1/2 transform -translate-x-1/2 
        lg:w-[20%] w-[60%] lg:max-w-[50%] max-w-[60%] bg-white rounded-3xl shadow-[0_0px_4px_rgba(0,0,0,0.40)] 
        flex justify-around items-center h-13 z-50 
        transition-all duration-300 ease-in-out
      `}
    >
      {navItems.map((item, index) => {
        const isActive = location.pathname === item.path;
        const isHovered = index === hoverIndex;
        const isLeft = hoverIndex !== null && index === hoverIndex - 1;
        const isRight = hoverIndex !== null && index === hoverIndex + 1;

        const shift = isLeft
          ? "-translate-x-1"
          : isRight
          ? "translate-x-1"
          : "translate-x-0";

        return (
          <Link
            key={item.path}
            to={item.path}
            onMouseEnter={() => setHoverIndex(index)}
            onMouseLeave={() => setHoverIndex(null)}
            className="relative flex flex-col items-center text-xs transition-all duration-300 ease-in-out textz-gray-500"
          >
            {/* Label di atas icon */}
            <span
              className={`
                absolute -top-6 px-2 py-1 rounded-md text-[10px] bg-gray-800 text-white 
                opacity-0 group-hover:opacity-100 transition-all duration-200
                ${isHovered ? "opacity-100 scale-100" : "opacity-0 scale-90"}
              `}
            >
              {item.label}
            </span>

            {/* Icon + bg */}
            <div
              className={`
                relative flex items-center justify-center 
                w-10 h-10 rounded-full transition-all duration-300 ease-in-out
                ${isHovered ? "bg-gray-200 z-10" : ""}
                ${shift}
              `}
            >
              {React.cloneElement(item.icon, {
                className: isActive ? "text-black" : "text-black",
              })}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default BottomNavbar;
