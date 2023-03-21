import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components";
import { MainPage, TodoPage } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route path="/todo" element={<TodoPage />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
