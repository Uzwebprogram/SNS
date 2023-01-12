import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/header";
import { RouterData } from "./index-data";
import { Wrapper } from "./styled-index";
import Footer from "../components/footer";
function RouterComponent() {
  return (
    <>
      <Header />
      <Wrapper>
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
      </Wrapper>
      <Footer />
    </>
  );
}

export default RouterComponent;
