import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import RegisterPage from "./pages/RegisterPage";
import Navbar from "./components/shared/Navbar";
import LoginPage from "./pages/LoginPage";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route
          path="/"
          // TODO: this element should be the main page (might be login or home page)
          element={
            <h1 className="text-3xl font-bold underline text-center">
              Hello world!
            </h1>
          }
        />

        <Route
          // add routes like this
          path="/register"
          element={<RegisterPage />}
        />
        <Route path="/login" element={<LoginPage />} />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
