import { NextUIProvider } from "@nextui-org/react";
import GridPattern from "./ui/animated-grid-pattern";
import NavBar from "./ui/NavBar";
import Footer from "./ui/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <NextUIProvider>
        <GridPattern />
        <main className="flex-grow light text-foreground bg-background">
          <NavBar />
        </main>
        <div className="overflow-auto">
          <main className="mx-auto max-w-3xl">
            <Outlet />
          </main>
        </div>
        <Footer />
      </NextUIProvider>
    </div>
  );
};

export default Layout;
