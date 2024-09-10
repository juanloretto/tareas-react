import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import NavbarApp from "./components/NavbarApp";
import LoginScreen from "./vistas/LoginScreen";
import RoutesTwo from "./routes/RoutesTwo";

function App() {
  return (
    <BrowserRouter>
      <div className="w-100">
        <Routes>
          <Route path="/*" element={<RoutesTwo />} />
          <Route path="/login" element={<LoginScreen />} />
        </Routes>
      </div>

      {/*       <main className="min-vh-100 d-flex justify-content-center bg-secondary-subtle">
        <div className="col-md-8 h-100 bg-light shadow p-3 rounded">
          <h1 className="mt-3 mb-5 text-center">Agenda Diaria</h1>
          <ListaTareas />
        </div>
      </main> */}
    </BrowserRouter>
  );
}

export default App;
