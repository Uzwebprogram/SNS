import { Suspense } from "react";
import { Routes, Route } from "react-router-dom";
import Header from "../components/header";
import { RouterData } from "./index-data";
import { Wrapper } from "./styled-index";
import Footer from "../components/footer";
import styles from './style.module.css'
import HashLoader from "react-spinners/HashLoader";
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
                <Suspense fallback={<div className={styles.loader_wrapp}>
                  <HashLoader size={70} color="#368fd7" />
                </div>}>
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
