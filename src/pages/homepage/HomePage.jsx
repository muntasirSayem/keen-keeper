import AllFriends from "./AllFriends";
import Banner from "./Banner";
import Summary from "./Summary";
import { useLoaderData } from "react-router";


function HomePage() {
  const friends = useLoaderData();

  return (
    <div className="py-20 space-y-10">
      {/* BANNER */}
      <Banner />

      {/* SUMMARY */}
      <Summary friends={friends} />

      {/* FRIENDS */}
      <AllFriends friends={friends} />
    </div>
  );
}

export default HomePage;
