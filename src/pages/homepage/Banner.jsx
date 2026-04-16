function Banner() {
  return (
    <div className="max-w-278 flex flex-col items-center text-center mx-auto">
      <h1 className="text-[#1F2937] text-5xl font-bold mb-4">
        Friends to keep close in your life
      </h1>

      <p className="text-[#64748B] text-[1rem] mb-8">
        Your personal shelf of meaningful connections. Browse, tend, and nurture
        the relationships that matter most.
      </p>

      <button className="bg-[#244D3F] hover:bg-[#1e4135] text-white text-[1rem] font-semibold px-4 py-3 rounded transition duration-200 active:scale-95 cursor-pointer">
        <span className="text-xl">+</span> Add a Friend
      </button>
    </div>
  );
}

export default Banner;
