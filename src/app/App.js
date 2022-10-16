import React from "react";
import Header from "../widgets/page-header/Header";
import Body from "../widgets/page-body/Body";
import './styles.scss';

const App = () => {
  return (
    <>
      <div className="container">
        <Header />
        <Body />
      </div>
    </>
  );
};

export default App;
