
function Summary({ friends}) {

  const totalFriends = friends.length;

  const onTrack = friends.filter((friend) => friend.status === "On-Track").length;

  const overdue = friends.filter((friend) => friend.status === "Overdue").length;

  return (
    <div className="max-w-278 mx-auto grid grid-cols-4 gap-6 border-b border-[#E9E9E9] pb-10 mb-10">
      <div className="bg-white rounded-lg shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center gap-2">
        <p className="text-[2rem] text-[#244D3F] font-semibold">{totalFriends}</p>
        <p className="text-[#64748B] text-lg">Total Friends</p>
      </div>

      <div className="bg-white rounded-lg shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center gap-2">
        <p className="text-[2rem] text-[#244D3F] font-semibold">{onTrack}</p>
        <p className="text-[#64748B] text-lg">On Track</p>
      </div>

      <div className="bg-white rounded-lg shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center gap-2">
        <p className="text-[2rem] text-[#244D3F] font-semibold">{overdue}</p>
        <p className="text-[#64748B] text-lg">Need Attention</p>
      </div>

      <div className="bg-white rounded-lg shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] p-8 flex flex-col items-center text-center gap-2">
        <p className="text-[2rem] text-[#244D3F] font-semibold">12</p>
        <p className="text-[#64748B] text-lg">Interactions This Month</p>
      </div>
    </div>
  );
}

export default Summary;
