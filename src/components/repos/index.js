import React, { useContext } from "react";
import { GoRepo } from "react-icons/go";
import { GithubContext } from "../../context/context";
import { PieChart, DoughnutChart, ColumnChart, BarChart } from "../charts";
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
      accumulator.forks[name] = { label: name, value: forks };

      return accumulator;
    },
    { stars: {}, forks: {} }
  );

  stars = Object.values(stars)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  forks = Object.values(forks)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);

  return (
    <section className="section section__padding--medium">
      <div className="section-center">
        <div className="section__header">
          <span>
            <GoRepo className="icon" />
          </span>
          <div>
            <h3>Repo Info</h3>
          </div>
        </div>

        <Wrapper>
          <div className="chart__wrapper">
            <PieChart data={mostUsedlanguages} />
          </div>
          <div className="chart__wrapper">
            <ColumnChart data={stars} />
          </div>
          <div className="chart__wrapper">
            <DoughnutChart data={mostStarredLanguages} />
          </div>
          <div className="chart__wrapper">
            <BarChart data={forks} />
          </div>
        </Wrapper>
      </div>
    </section>
  );
}
