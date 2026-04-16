function NavBar() {
  return (
    <div className="w-full bg-white border-b border-[#E9E9E9] px-20 py-4 flex flex-col md:flex-row gap-2 md:gap-0 items-center justify-between">
      {/* Logo */}
      <a href="">
        <img src="/Images/logo/logo.png" alt="" />
      </a>

      {/* Nav Links */}
      <div className="flex items-center gap-8 text-[1rem] text-[64748B] font-semibold">
        <a href="" className="flex items-center gap-1">
          <i className="fa-solid fa-house"></i>
          <span className="hover:underline">Home</span>
        </a>

        <a href="" className="flex items-center gap-1">
          <i className="fa-regular fa-clock"></i>
          <span className="hover:underline">Timeline</span>
        </a>

        <a href="" className="flex items-center gap-1">
          <i className="fa-solid fa-chart-line"></i>
          <span className="hover:underline">Stats</span>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
