import AllFriends from "./AllFriends";
import Banner from "./Banner";
import Summary from "./Summary";

function HomePage() {
  return (
    <div className="py-20 space-y-10">
      {/* BANNER */}
      <Banner/>

      {/* SUMMARY */}
      <Summary/>

      {/* FRIENDS */}
      <AllFriends/>
    </div>
  );
}

export default HomePage;
