import React, { Fragment } from "react";

//components
import AddUser from "../../components/AddUser/";
import LeftBar from "../../components/LeftBar/";
import Map from "../../components/Map/";

const Main = () => (
  <Fragment>
    <Map />
    <LeftBar />
    <AddUser />
  </Fragment>
);

export default Main;
