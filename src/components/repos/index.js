import React, { useContext } from "react";
import { GithubContext } from "../../context/context";
import { Pie3D, Doughnut2D, Column3D } from "../charts";
import { Wrapper } from "./styles/repos";

export default function Repos() {
  const { githubRepos } = useContext(GithubContext);

  const languages = githubRepos.reduce((accumulator, item) => {
    const { language, stargazers_count } = item;

    if (!language) return accumulator;
    console.log(language);

    if (!accumulator[language]) {
      accumulator[language] = {
        label: language,
        value: 1,
        stars: stargazers_count,
      };
    } else {
      accumulator[language] = {
        ...accumulator[language],
        value: accumulator[language].value + 1,
        stars: accumulator[language].stars + stargazers_count,
      };
    }

    return accumulator;
  }, {});

  console.log(languages);

  const mostUsedlanguages = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  // calculate the laguages with most stars
  const mostStarredLanguages = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  // claculate the most starred & forked repos
  let { stars, forks } = githubRepos.reduce(
    (accumulator, item) => {
      const { stargazers_count, name, forks } = item;

      accumulator.stars[name] = { label: name, value: stargazers_count };

      return accumulator;
    },
    { stars: {}, forks: {} }
  );

  stars = Object.values(stars)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
  console.log(stars);

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
        <Pie3D data={mostUsedlanguages} />
        <Column3D data={stars} />
        <Doughnut2D data={mostStarredLanguages} />
      </Wrapper>
    </section>
  );
}
