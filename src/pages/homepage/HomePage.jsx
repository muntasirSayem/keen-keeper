import AllFriends from "./AllFriends";
import Banner from "./Banner";
import Summary from "./Summary";

const friendsPromise = fetch("/friends.json").then((res) => res.json());

function HomePage() {
  return (
    <div className="py-20 space-y-10">
      {/* BANNER */}
      <Banner />

      {/* SUMMARY */}
      <Summary friendsPromise={friendsPromise} />

      {/* FRIENDS */}
      <AllFriends friendsPromise={friendsPromise} />
    </div>
  );
}

export default HomePage;
