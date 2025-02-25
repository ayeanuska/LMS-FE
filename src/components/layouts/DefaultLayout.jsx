import react from "react";
import { Header } from "./Header";
import { Footer } from "./footer";
import { Outlet } from "react-router-dom";
import Hero from "./Hero";

export const DefaultLayout = () => {
  return (
    <div>
      {/* header */}

      <Header />

      <main className="main">
        <Outlet />
      </main>

      {/* footer */}
      <Footer />
    </div>
  );
};
