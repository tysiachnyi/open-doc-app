import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./constants/routes";
import Layout from "./components/Layout/Layout";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Register from "./routes/Register/Register";
import Login from "./routes/Login/Login";
import Auth from "./components/Auth/Auth";
import ProtectedRoutes from "./utils/ProtectedRoutes";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.REGISTER} element={<Register />} />

        <Route path={ROUTES.LOGIN} element={<Login />} />
        <Route path={ROUTES.ABOUT} element={<About />} />
        {/* Protected Routes START */}
        <Route element={<ProtectedRoutes />}>
          <Route path="/auth" element={<Auth />} />
        </Route>
        {/* Protected Routes END */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
