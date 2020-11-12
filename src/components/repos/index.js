import React, { useContext } from "react";
import { GithubContext } from "../../context/context";
import { Pie3D, Doughnut2D } from "../charts";
import { Wrapper } from "./styles/repos";

export default function Repos() {
  const { githubRepos } = useContext(GithubContext);

  let languages = githubRepos.reduce((accumulator, item) => {
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

  const mostStarredLanguages = Object.values(languages)
    .sort((a, b) => b.stars - a.stars)
    .map((item) => {
      return { ...item, value: item.stars };
    })
    .slice(0, 5);

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={mostUsedlanguages} />
        <div></div>
        <Doughnut2D data={mostStarredLanguages} />
      </Wrapper>
    </section>
  );
}
