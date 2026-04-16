import { NavLink } from "react-router";
import "./Navbar.css";

function NavBar() {
  return (
    <div className="w-full bg-white border-b border-[#E9E9E9] px-20 py-4 flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between">
      {/* Logo */}
      <a href="">
        <img src="/Images/logo/logo.png" alt="" />
      </a>
      {/* Nav Links */}
      <div id="navLink" className="flex items-center gap-8 text-[1rem] text-[#64748B] font-semibold">
        <NavLink to="/" className="flex items-center gap-1 hover:underline">
          <i className="fa-solid fa-house"></i>
          <span>Home</span>
        </NavLink>

        <NavLink
          to="/timeline"
          className="flex items-center gap-1 hover:underline"
        >
          <i className="fa-regular fa-clock"></i>
          <span>Timeline</span>
        </NavLink>

        <NavLink
          to="/stats"
          className="flex items-center gap-1 hover:underline"
        >
          <i className="fa-solid fa-chart-line"></i>
          <span>Stats</span>
        </NavLink>
      </div>
    </div>
  );
}

export default NavBar;
