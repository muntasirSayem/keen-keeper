import NavBar from "../components/shared/Navbar/NavBar";
import { Outlet, useNavigation } from "react-router";
import Footer from "../components/shared/Footer/Footer";
import Loading from "../components/shared/Loading/Loading";

function MainLayout() {
  const navigation = useNavigation();

  const isNavigating = Boolean(navigation.location);

  return (
    <>
      <NavBar />
      {isNavigating && <Loading />}
      <Outlet />
      <Footer />
    </>
  );
}

export default MainLayout;
