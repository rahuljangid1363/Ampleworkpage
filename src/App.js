import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import AllRoutes from "./routes/AllRoutes";
import DefaultLayout from "./layout/DefaultLayout";
// const loading = (
//   <div className="pt-3 text-center">
//     <div className="sk-spinner sk-spinner-pulse"></div>-
//   </div>
// );

// Containers
// const DefaultLayout = React.lazy(() => import("./layout/DefaultLayout"));

// Pages

const Page404 = React.lazy(() => import("./pages/page404/Page404"));
const Page500 = React.lazy(() => import("./pages/page500/Page500"));

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/404" name="Page 404" element={<Page404 />} />
        <Route exact path="/500" name="Page 500" element={<Page500 />} />
        <Route path="*" name="Home" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
