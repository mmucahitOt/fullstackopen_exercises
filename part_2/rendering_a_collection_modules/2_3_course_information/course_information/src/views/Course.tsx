import React from "react";
import { Content } from "./components/Content";
import Header from "./components/Header";
import Total from "./components/Total";

const Course = ({ course }) => {
  return (
    <div>
      <Header course={course} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </div>)
};

export default Course;

