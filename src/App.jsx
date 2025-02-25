import "./App.css";
import { Route, Routes } from "react-router-dom";
import { DefaultLayout } from "./components/layouts/DefaultLayout.jsx";
import HomePage from "./Pages/home/Homepage";
import SignInPage from "../src/Pages/auth/SignInPage.jsx";
import SignUpPage from "../src/Pages/auth/SignUpPage.jsx";

import "bootstrap/dist/css/bootstrap.min.css";

import Dashboard from "./Pages/dashboard/Dashboard";
import { UserLayout } from "./components/layouts/UserLayout";

function App() {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<DefaultLayout />}>
          <Route index element={<HomePage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/signin" element={<SignInPage />} />
        </Route>

        {/* private routes */}
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
