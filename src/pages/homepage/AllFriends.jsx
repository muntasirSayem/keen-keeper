import { use } from "react";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

function AllFriends() {
  const friends = use(friendsPromise);
  console.log(friends);

  return (
    <div class="max-w-278 mx-auto">
      <h3 class="text-2xl text-[#1F2937] font-semibold mb-4">Your Friends</h3>
      <div class="grid grid-cols-4 gap-6">
        {friends.map((friend) => {
          return (
            <div
              key={friend.id}
              class="bg-white rounded-lg shadow-[0_3px_6px_0_rgba(0,0,0,0.08)] p-6 flex flex-col items-center text-center gap-3"
            >
              <img
                src={friend.picture}
                alt={friend.name}
                class="w-20 h-20 rounded-full"
              />
              <div class="flex flex-col items-center text-center gap-2">
                <h5 class="text-[#1F2937] font-semibold text-xl">
                  {friend.name}
                </h5>
                <p class="text-[#64748B] text-xs">
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
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default AllFriends;
