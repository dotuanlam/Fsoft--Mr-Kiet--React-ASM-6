import { Routes, Route } from "react-router-dom";
import Login from "./pages/Login/index";
import ListDetail from "./components/ListDetail/index";
import NotFound from "./pages/NotFound";
import DetailListCocktail from "./components/DetailListCocktail";
import Card from "./components/Card";
import PrivateRoute from "./components/PrivateRoute";
import AuthRoute from "./components/AuthRoute";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route element={<PrivateRoute />}>
          <Route path="/" element={<ListDetail />} />
          <Route path="/card" element={<Card />} />
          <Route path="/:id" element={<DetailListCocktail />} />
        </Route>
        <Route element={<AuthRoute />}>
          <Route path="/login" element={<Login />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </div>
  );
}

export default App;
