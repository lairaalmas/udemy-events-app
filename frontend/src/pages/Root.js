import { Outlet, useNavigation } from "react-router-dom";

import MainNavigation from "../components/MainNavigation";

const RootLayout = () => {
  // should add useNavigation in page that is already loaded
  const navigation = useNavigation();

  /*
   navigation.state can be:
    - idle -> doest have any active transitions
    - loading -> having active transition and loading data
    - submitting -> submitting data
  */

  return (
    <>
      <MainNavigation />
      <main>
        {navigation.state === "loading" && <p>Loading...</p>}
        <Outlet />
      </main>
    </>
  );
};

export default RootLayout;
