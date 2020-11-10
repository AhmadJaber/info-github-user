import React, { useContext } from "react";
import { Wrapper } from "./styles/user-card";
import { GithubContext } from "../../context/context";
import { MdBusiness, MdLocationOn, MdLink } from "react-icons/md";

export default function UserCard() {
  const {
    githubUser: {
      avatar_url,
      bio,
      blog,
      company,
      html_url,
      name,
      location,
      twitter_username,
    },
  } = useContext(GithubContext);

  return (
    <Wrapper>
      <header>
        <img src={avatar_url} alt={name} />
        <div>
          <h4>{name}</h4>
          <p>@{twitter_username || "john doe"}</p>
        </div>
        <a href={html_url}>follow</a>
      </header>

      <p className="bio">{bio}</p>
      <div className="links">
        <p>
          <MdBusiness /> {company}
        </p>
        <p>
          <MdLocationOn /> {location || "earth"}
        </p>
        <a href={blog}>
          <MdLink /> {blog}
        </a>
      </div>
    </Wrapper>
  );
}
