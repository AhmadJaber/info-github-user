import React, { useContext } from "react";
import { GithubContext } from "../../context/context";
import { Pie3D } from "../charts";
import { Wrapper } from "./styles/repos";

export default function Repos() {
  const { githubRepos } = useContext(GithubContext);

  const chartData = [
    {
      label: "HTML",
      value: "90",
    },
    {
      label: "CSS",
      value: "260",
    },
    {
      label: "JAVASCRIPT",
      value: "380",
    },
  ];

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={chartData} />
      </Wrapper>
    </section>
  );
}
