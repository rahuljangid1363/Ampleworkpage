import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import AllRoutes from "./routes/AllRoutes";
// import { SubCom1 } from "./components";
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
        {AllRoutes.map((route, key) => {


          return (
            route.element && (
              <Route
                key={key}
                path={route.path}
                name={route.name}
                element={route.element}
              />
            )
          );
        })}
        <Route exact path="/404" name="Page 404" element={<Page404 />} />
        {/* <Route exact path="/subcom1" name="Page 404" element={<SubCom1 />} /> */}
        <Route exact path="/500" name="Page 500" element={<Page500 />} />
        <Route path="*" name="Home" element={<DefaultLayout />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
