import React from "react";

import TheCarousel from "../components/Carousel";
import TheTab from "../components/Tabs";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const HomeContent = () => {
  return (
    <>
      <TheCarousel fluid />
      <Container>
        <h1 class="h1-style">We do YAY things</h1>
        <p>
          Nam tincidunt, sapien nec congue porta, tellus risus ullamcorper mi, a
          rutrum justo eros pretium libero. Nullam vel enim id mauris eleifend
          finibus et ac orci. Aliquam metus massa, aliquam quis arcu sit amet,
          consectetur faucibus urna. Suspendisse massa diam, efficitur eu massa
          euismod, pretium lacinia magna. Donec mi orci, sollicitudin in luctus
          a, varius eget massa.
        </p>
        <TheTab />
      </Container>
    </>
  );
};

export default HomeContent;
