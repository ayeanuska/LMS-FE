import "./App.css";
import { Route, Routes } from "react-router-dom";

function App() {
  return (
    <>
      <Routes>
        {/* public routes */}
        <Route path="/" element={<DefaultPage />} />
        <Route index element={<Homepage />} />
        <Route path="signup" element={<SignUpPage />} />
        <Route path="signin" element={<SignInPage />} />
        <Route />

        {/* private routes */}
        <Route path="/user" element={<UserLayout />}>
          <Route index element={<Dashboard />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
