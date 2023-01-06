import { Route, Routes } from "react-router-dom";
import "./App.css";
import { ROUTES } from "./constants/routes";
import Layout from "./components/Layout/Layout";
import Home from "./routes/Home/Home";
import About from "./routes/About/About";
import Register from "./routes/Register/Register";
import Login from "./routes/Login/Login";
import ProtectedRoutes from "./utils/ProtectedRoutes";
import ViewDocumentation from "./routes/ViewDocumentation/ViewDocumentation";
import CreateDocumentation from "./routes/CreateDocumentation/CreateDocumentation";

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
          <Route
            path={ROUTES.VIEW_DOCUMENTATION}
            element={<ViewDocumentation />}
          />
          <Route
            path={ROUTES.CREATE_DOCUMENTATION}
            element={<CreateDocumentation />}
          />
        </Route>
        {/* Protected Routes END */}
        <Route path="*" element={<Home />} />
      </Route>
    </Routes>
  );
}

export default App;
