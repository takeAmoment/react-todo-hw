import { HashRouter, Routes, Route } from "react-router-dom";
import { Layout, ProtectedRoute } from "./components";
import { MainPage, TodoPage, ErrorPage } from "./pages";

function App() {
  return (
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<MainPage />} />
          <Route
            path="/todo"
            element={
              <ProtectedRoute>
                <TodoPage />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="*" element={<ErrorPage />} />
      </Routes>
    </HashRouter>
  );
}

export default App;
