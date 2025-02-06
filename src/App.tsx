import { Route, Routes } from "react-router";
import Home from "./pages/Home";
import UserLayout from "./components/layouts/UserLayout";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<UserLayout />}>
          <Route index element={<Home />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
