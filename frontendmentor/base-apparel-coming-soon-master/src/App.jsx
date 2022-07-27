import React from "react";
import Header from "./components/Header";
import Content from "./components/Content";
import "./index.scss";

function App() {
  return (
    <div className="App">
      <div className="container-fluid h-100">
        <div className="row h-100">
          <div className="col-lg-7 h-100 coming-soon__left-container coming-soon__left-container__bg__color">
            <div className="coming-soon__left-container__bg h-100">
              <div className="coming-soon__left-wrapper">
                <Header />
              </div>
              <div className="coming-soon__mobile-bg"></div>
              <div className="coming-soon__left-wrapper">
                <Content />
              </div>
            </div>
          </div>
          <div className="col-lg-5 d-none d-lg-block p-5 coming-soon__right-container coming-soon__right-container__bg"></div>
        </div>
      </div>
    </div>
  );
}

export default App;
