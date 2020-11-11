import React, { useContext } from "react";
import { GithubContext } from "../../context/context";
import { Pie3D } from "../charts";
import { Wrapper } from "./styles/repos";

export default function Repos() {
  const { githubRepos } = useContext(GithubContext);

  let languages = githubRepos.reduce((accumulator, item) => {
    const { language } = item;

    if (!language) return accumulator;
    console.log(language);

    if (!accumulator[language]) {
      accumulator[language] = {
        label: language,
        value: 1,
      };
    } else {
      accumulator[language] = {
        ...accumulator[language],
        value: accumulator[language].value + 1,
      };
    }

    return accumulator;
  }, {});

  languages = Object.values(languages)
    .sort((a, b) => b.value - a.value)
    .slice(0, 5);
  console.log(languages);

  return (
    <section className="section">
      <Wrapper className="section-center">
        <Pie3D data={languages} />
      </Wrapper>
    </section>
  );
}
