import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { CharactersPage } from "./pages/CharactersPage/Characters";
import { ErrorPage } from "./pages/ErrorPage/Error";
import { HomePage } from "./pages/HomePage/Home";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route element={<HomePage />} exact path="/" />
        <Route element={<CharactersPage />} path="/characters" />
        <Route element={<ErrorPage />} path="/*" />
      </Routes>
    </Router>
  );
};

export default App;