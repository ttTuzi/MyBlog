import NavBar from "./NavBar";
import Footer from "./Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="relative flex flex-col min-h-screen">
      {/* Background grid pattern with fixed positioning */}
      {/* <div className="fixed inset-0 w-full h-full z-0 pointer-events-none">
        <GridPattern />
      </div> */}

      <NavBar />
      <div className="flex-grow">
        <main className="mx-auto w-full ">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
