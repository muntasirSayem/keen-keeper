import { useLoaderData, useParams } from "react-router";

function FriendDetails() {
  const { friendId } = useParams();

  const friends = useLoaderData();
  const expectedFriend = friends.find(
    (friend) => friend.id === Number(friendId),
  );
  const {
    id,
    name,
    picture,
    email,
    days_since_contact: daysSinceContact,
    status,
    tags,
    bio,
    goal,
    next_due_date: nextDueDate,
  } = expectedFriend;

  return (
    <div key={id} className="w-278 grid grid-cols-3 gap-6 mx-auto my-20">
      {/* LEFT COLUMN */}
      <div className="flex flex-col gap-4">
        {/* Profile Card */}
        <div className="bg-white rounded-lg p-6 flex flex-col items-center text-center gap-3 shadow-[0_3px_6px_0_rgba(0,0,0,0.08)]">
          <img src={picture} className="w-20 h-20" alt={name} />

          <div className="flex flex-col items-center gap-2">
            <h5 className="text-[#1F2937] font-semibold text-xl">{name}</h5>

            <button
              className={`text-xs font-medium p-2 rounded-full text-white ${
                status === "Overdue"
                  ? "bg-[#EF4444]"
                  : status === "On-Track"
                    ? "bg-[#244D3F]"
                    : "bg-[#EFAD44]"
              }`}
            >
              {status}
            </button>

            <div className="flex justify-center flex-wrap gap-2">
              {tags.map((tag, i) => (
                <button
                  key={i}
                  className="text-xs font-medium px-3 py-1 rounded-full bg-[#CBFADB] text-[#244D3F]"
                >
                  {tag.toUpperCase()}
                </button>
              ))}
            </div>
          </div>

          <p id="bio" className="text-[#64748B] text-[1rem] italic font-medium">
            "{bio}"
          </p>

          <p className="text-[#64748B] text-sm">
            <span className="font-semibold">Email:</span> {email}
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col gap-2">
          <button className="bg-white rounded-l p-4 flex items-center justify-center gap-2 text-[#1F2937] text-[1rem] font-medium transition hover:brightness-95 border border-[#E9E9E9] cursor-pointer">
            <i className="fa-regular fa-bell"></i> Snooze 2 Weeks
          </button>

          <button className="bg-white rounded-l p-4 flex items-center justify-center gap-2 text-[#1F2937] text-[1rem] font-medium transition hover:brightness-95 border border-[#E9E9E9] cursor-pointer">
            <i className="fa-solid fa-box-archive"></i> Archive
          </button>

          <button className="bg-white rounded-l p-4 flex items-center justify-center gap-2 text-[#EF4444] text-[1rem] font-medium transition hover:brightness-95 border border-[#E9E9E9] cursor-pointer">
            <i className="fa-regular fa-trash-can"></i> Delete
          </button>
        </div>
      </div>

      {/* RIGHT COLUMN */}
      <div className="col-span-2 flex flex-col gap-6">
        {/* Stats */}
        <div className="grid grid-cols-3 gap-6">
          <div className="bg-white rounded-lg px-4 py-8 flex flex-col items-center justify-center gap-2 text-center shadow-[0_1px_6px_0_rgba(0,0,0,0.08)]">
            <p className="text-[#244D3F] text-3xl font-semibold">
              {daysSinceContact}
            </p>
            <p className="text-[#64748B] text-lg">Days Since Contact</p>
          </div>

          <div className="bg-white rounded-lg px-4 py-8 flex flex-col items-center justify-center gap-2 text-center shadow-[0_1px_6px_0_rgba(0,0,0,0.08)]">
            <p className="text-[#244D3F] text-3xl font-semibold">{goal}</p>
            <p className="text-[#64748B] text-lg">Goal (Days)</p>
          </div>

          <div className="bg-white rounded-lg px-4 py-8 flex flex-col items-center justify-center gap-2 text-center shadow-[0_1px_6px_0_rgba(0,0,0,0.08)]">
            <p className="text-[#244D3F] text-3xl font-semibold">
              {nextDueDate}
            </p>
            <p className="text-[#64748B] text-lg">Next Due</p>
          </div>
        </div>

        {/* Relationship Goal */}
        <div className="bg-white rounded-lg p-6 flex flex-col justify-center gap-5 shadow-[0_1px_6px_0_rgba(0,0,0,0.08)]">
          <div className="flex items-center justify-between">
            <h4 className="text-[#244D3F] font-medium text-xl">
              Relationship Goal
            </h4>

            <button className="border border-[#E9E9E9] text-[#1F2937] text-sm font-medium px-4 py-2 rounded-l bg-[#F8FAFC] hover:brightness-95 transition cursor-pointer">
              Edit
            </button>
          </div>

          <p className="text-[#64748B] text-lg">
            Connect every
            <span className="font-bold text-[#1F2937]">
              <span> {goal}</span> days
            </span>
          </p>
        </div>

        {/* Quick Check-In */}
        <div className="bg-white rounded-lg p-6 flex flex-col gap-4 shadow-[0_1px_6px_0_rgba(0,0,0,0.08)]">
          <h4 className="text-[#244D3F] font-medium text-xl">Quick Check-In</h4>

          <div className="grid grid-cols-3 gap-4">
            {/* Call */}
            <button className="bg-[#F8FAFC] rounded-lg border border-[#E9E9E9] py-4 flex flex-col items-center justify-center gap-2 hover:brightness-95 transition cursor-pointer">
              <img src="/Images/icon/call.png" alt="Call" />
              <span className="text-[#1F2937] text-lg">Call</span>
            </button>

            {/* Text */}
            <button className="bg-[#F8FAFC] rounded-lg border border-[#E9E9E9] py-4 flex flex-col items-center justify-center gap-2 hover:brightness-95 transition cursor-pointer">
              <img src="/Images/icon/text.png" alt="Text" />
              <span className="text-[#1F2937] text-lg">Text</span>
            </button>

            {/* Video */}
            <button className="bg-[#F8FAFC] rounded-lg border border-[#E9E9E9] py-4 flex flex-col items-center justify-center gap-2 hover:brightness-95 transition cursor-pointer">
              <img src="/Images/icon/video.png" alt="Video" />
              <span className="text-[#1F2937] text-lg">Video</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendDetails;
