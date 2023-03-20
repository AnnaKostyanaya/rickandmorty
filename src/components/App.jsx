import { lazy } from "react";
import { Route, Routes } from "react-router-dom";

const Layout = lazy(() => import("../components/Layout/Layout"));
const Characters = lazy(() => import("../pages/Characters/Characters"));
const Character = lazy(() => import("../pages/Character/Character"));

export const App = () => {

return (
    <Routes>
      <Route path="/" element={<Layout />} >
        <Route path="/" element={<Characters />} />
          <Route path="/character/:id" element={<Character />} />
        <Route path="*" element={<Characters />} />
      </Route>
    </Routes>
);
}

export default App;