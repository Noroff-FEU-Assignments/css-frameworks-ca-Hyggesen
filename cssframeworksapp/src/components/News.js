import React from "react";
import Pagination from "react-bootstrap/Pagination";
import PageItem from "react-bootstrap/PageItem";
import TheCard from "../components/Card";

const NewsContent = () => {
  return (
    <div>
      <h1>News</h1>
      <Pagination>
        <PageItem>1</PageItem>
        <PageItem>2</PageItem>
        <PageItem>3</PageItem>
        <PageItem>4</PageItem>
      </Pagination>
      <div>
        <TheCard />
        <TheCard />
        <TheCard />
        <TheCard />
        <TheCard />
        <TheCard />
        <TheCard />
        <TheCard />
      </div>
      <Pagination>
        <PageItem>1</PageItem>
        <PageItem>2</PageItem>
        <PageItem>3</PageItem>
        <PageItem>4</PageItem>
      </Pagination>
    </div>
  );
};

export default NewsContent;
