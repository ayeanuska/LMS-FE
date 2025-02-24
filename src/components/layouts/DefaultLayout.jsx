import react from "react";

export const DefaultLayout = () => {
  return (
    <div>
      {/* header */}
      <h1> header</h1>
      <main className="main">
        <Outlet />
      </main>
      main component
      {/* footer */}
      <footer />
    </div>
  );
};
