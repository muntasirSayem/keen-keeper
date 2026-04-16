import React from "react";

function HomePage() {
  return (
    <div className="py-20 space-y-10">
      {/* BANNER */}
      <div className="max-w-278 flex flex-col items-center text-center mx-auto">
        <h1 className="text-[#1F2937] text-5xl font-bold mb-4">
          Friends to keep close in your life
        </h1>

        <p className="text-[#64748B] text-[1rem] mb-8">
          Your personal shelf of meaningful connections. Browse, tend, and
          nurture the relationships that matter most.
        </p>

        <button className="bg-[#244D3F] hover:bg-[#1e4135] text-white text-[1rem] font-semibold px-4 py-3 rounded">
          <span className="text-xl">+</span> Add a Friend
        </button>
      </div>

      {/* SUMMARY */}
      <div className="max-w-278 mx-auto grid grid-cols-4 gap-6 border-b border-[#E9E9E9] pb-10 mb-10">
        <div className="bg-white rounded-lg shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center gap-2">
          <p className="text-[2rem] text-[#244D3F] font-semibold">10</p>
          <p className="text-[#64748B] text-lg">Total Friends</p>
        </div>

        <div className="bg-white rounded-lg shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center gap-2">
          <p className="text-[2rem] text-[#244D3F] font-semibold">3</p>
          <p className="text-[#64748B] text-lg">On Track</p>
        </div>

        <div className="bg-white rounded-lg shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center gap-2">
          <p className="text-[2rem] text-[#244D3F] font-semibold">6</p>
          <p className="text-[#64748B] text-lg">Need Attention</p>
        </div>

        <div className="bg-white rounded-lg shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center gap-2">
          <p className="text-[2rem] text-[#244D3F] font-semibold">12</p>
          <p className="text-[#64748B] text-lg">Interactions This Month</p>
        </div>
      </div>

      {/* FRIENDS */}
      <div className="max-w-278 mx-auto space-y-4">
        <h4 className="text-2xl font-semibold text-[#1F2937]">Your Friends</h4>
        <div>
            
        </div>
      </div>
    </div>
  );
}

export default HomePage;
