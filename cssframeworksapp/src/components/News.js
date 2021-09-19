import React from "react";
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";
import TheCard from "../components/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import news1 from "../assets/News images/news-1.jpg";
import news2 from "../assets/News images/news-2.jpg";
import news3 from "../assets/News images/news-3.jpg";
import news4 from "../assets/News images/news-4.jpg";
import news5 from "../assets/News images/news-4.jpg";
import news6 from "../assets/News images/news-6.jpg";
import news7 from "../assets/News images/news-7.jpg";
import news8 from "../assets/News images/news-8.jpg";
const NewsContent = () => {
  return (
    <Container>
      <h1 className="h1-style">News</h1>
      <Pagination>
        <PageItem active>{1} </PageItem>
        <PageItem>2</PageItem>
        <PageItem>3</PageItem>
        <PageItem>4</PageItem>
      </Pagination>
      <div>
        <Container class="d-flex justify-content-between align-items-center mx-auto">
          <Row>
            <Col md={6} lg={3} sm={1}>
              <TheCard img={news1} />
            </Col>
            <Col md={6} lg={3} sm={1}>
              <TheCard img={news2} />
            </Col>
            <Col md={6} lg={3} sm={1}>
              <TheCard img={news3} />
            </Col>
            <Col md={6} lg={3} sm={1}>
              <TheCard img={news4} />
            </Col>
          </Row>
          <Row>
            <Col md={6} lg={3} sm={1}>
              <TheCard img={news5} />
            </Col>
            <Col md={6} lg={3} sm={1}>
              <TheCard img={news6} />
            </Col>
            <Col md={6} lg={3} sm={1}>
              <TheCard img={news7} />
            </Col>
            <Col md={6} lg={3} sm={1}>
              <TheCard img={news8} />
            </Col>
          </Row>
        </Container>
      </div>
      <Pagination>
        <PageItem active>{1}</PageItem>
        <PageItem>2</PageItem>
        <PageItem>3</PageItem>
        <PageItem>4</PageItem>
      </Pagination>
    </Container>
  );
};

export default NewsContent;
