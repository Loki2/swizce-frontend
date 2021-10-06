import React from "react";
import Navigation from "../Partials/Navigation";
import Rightbar from "../Partials/Rightbar";
import Sidebar from "../Partials/Sidebar";


interface Props {}

const Messager = (props: Props) => {
  return (
    <div>
      <Navigation />
      {/* sidebar menu */}
      <Sidebar />
      <section className="main">
        {/* main container */}
        <div className="container">
          <h1>List Messager Over Here</h1>
        </div>
      </section>
      <Rightbar />
    </div>
  );
};

export default Messager;
