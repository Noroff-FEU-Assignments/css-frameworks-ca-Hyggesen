import React from "react";
import Tabs from "react-bootstrap/Tabs";
import Tab from "react-bootstrap/Tab";
import TheSonnet from "./Sonnet";
import tab1 from "../assets/Tab images/tab-1.jpg";
import tab2 from "../assets/Tab images/tab-2.jpg";
import tab3 from "../assets/Tab images/tab-3.jpg";
import facebook from "../assets/icons/facebook-f.png";
import twitter from "../assets/icons//twitter.png";

function TheTabs() {
  return (
    <div>
      <Tabs
        defaultActiveKey="first"
        id="uncontrolled-tab-example"
        className="mb-3 "
      >
        <Tab eventKey="first" title="First">
          <TheSonnet
            image={tab1}
            icon1={facebook}
            icon2={twitter}
            content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. "
          />
        </Tab>
        <Tab eventKey="second" title="Second">
          <TheSonnet
            image={tab2}
            icon1={facebook}
            icon2={twitter}
            content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. "
          />
        </Tab>
        <Tab eventKey="third" title="Third">
          <TheSonnet
            image={tab3}
            icon1={facebook}
            icon2={twitter}
            content="Morbi eget efficitur turpis. Vivamus pellentesque tortor massa, venenatis pharetra leo laoreet a. Nullam non eleifend justo, a ullamcorper turpis. Cras vehicula pharetra lectus non maximus. Sed condimentum mattis rhoncus. "
          />
        </Tab>
      </Tabs>
    </div>
  );
}

export default TheTabs;
