import React from "react";
import SideNavbar from "./SideNavbar";
import FirstPart from "./FirstPart";
import SecondPart from "./SecondPart"
import ImagePart from "./ImagePart"
import "../Dashboard.css";



const Main = () => (
    <div id="main">
        <SideNavbar />
        <FirstPart />
        <SecondPart />
        <ImagePart />
    </div>
);

export default Main;