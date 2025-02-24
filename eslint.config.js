export const UserLayout = () => {
  return (
    <div>
      <Header />

      <div className="d-flex">
        <div className="left bg-dark text-white" style={{ width: "200px" }}>
          sidebar menu
        </div>

        <main className="main">
          <Outlet />
        </main>
      </div>
      <Footer />
    </div>
  );
};
