import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/header";
import { RouterData } from "./index-data";
function RouterComponent() {
  return (
    <>
      <Header />
      <Routes>
        {RouterData.map((elem) => (
          <Route
            key={elem.id}
            path={elem.path}
            element={
              <Suspense fallback={<h1>Loading...</h1>}>
                {elem.component}
              </Suspense>
            }
          />
        ))}
      </Routes>
    </>
  );
}

export default RouterComponent;
