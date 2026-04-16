import { Link } from "react-router";

function AllFriends({ friends }) {
  return (
    <>
      <div className="max-w-278 mx-auto">
        <h3 className="text-2xl text-[#1F2937] font-semibold mb-4">
          Your Friends
        </h3>
        <div className="grid grid-cols-4 gap-6">
          {friends.map((friend) => {
            return (
              <Link
                to={`/friend-details/${friend.id}`}
                key={friend.id}
                className="bg-white rounded-lg shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] p-6 flex flex-col items-center text-center gap-3 cursor-pointer hover:brightness-95 transition duration-200 active:scale-95"
              >
                <img
                  src={friend.picture}
                  alt={friend.name}
                  className="w-20 h-20 rounded-full"
                />
                <div className="flex flex-col items-center text-center gap-2">
                  <h5 className="text-[#1F2937] font-semibold text-xl">
                    {friend.name}
                  </h5>
                  <p className="text-[#64748B] text-xs">
                    <span>{friend.days_since_contact}</span>d ago
                  </p>
                  <div className="flex justify-center flex-wrap gap-2">
                    {friend.tags.map((tag, i) => (
                      <button
                        key={i}
                        className="text-xs font-medium px-3 py-1 rounded-full bg-[#CBFADB] text-[#244D3F]"
                      >
                        {tag.toUpperCase()}
                      </button>
                    ))}
                  </div>
                  <button
                    className={`text-xs font-medium p-2 rounded-full text-white ${
                      friend.status === "Overdue"
                        ? "bg-[#EF4444]"
                        : friend.status === "On-Track"
                          ? "bg-[#244D3F]"
                          : "bg-[#EFAD44]"
                    }`}
                  >
                    {friend.status}
                  </button>
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </>
  );
}

export default AllFriends;
