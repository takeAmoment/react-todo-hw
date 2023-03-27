import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { MainPage, TodoPage, ErrorPage } from "./pages";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
