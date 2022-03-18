import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
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
          path="/test"
          element={<div> test page </div>}
        />
        <Route path="*" element={<div>Not found</div>} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
