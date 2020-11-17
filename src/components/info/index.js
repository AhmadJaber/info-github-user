import React, { useContext } from "react";
import { GithubContext } from "../../context/context";
import { FiUsers, FiUserPlus } from "react-icons/fi";
import { GoRepo, GoGist } from "react-icons/go";
import { Wrapper } from "./styles/info";
import InfoItem from "../info-item";

export default function UserInfo() {
  const {
    githubUser: { public_repos, followers, following, public_gists },
  } = useContext(GithubContext);

  const userInfo = [
    {
      id: 1,
      icon: <GoRepo className="icon" />,
      label: "repos",
      value: public_repos,
      color: "pink",
    },
    {
      id: 2,
      icon: <FiUsers className="icon" />,
      label: "followers",
      value: followers,
      color: "green",
    },
    {
      id: 3,
      icon: <FiUserPlus className="icon" />,
      label: "following",
      value: following,
      color: "purple",
    },
    {
      id: 4,
      icon: <GoGist className="icon" />,
      label: "gists",
      value: public_gists,
      color: "yellow",
    },
  ];

  return (
    <section className="section section--big">
      <Wrapper className="section-center">
        {userInfo.map((item) => (
          <InfoItem key={item.id} {...item} />
        ))}
      </Wrapper>
    </section>
  );
}
