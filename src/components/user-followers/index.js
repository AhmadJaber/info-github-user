import React, { useContext } from "react";
import { GithubContext } from "../../context/context";
import { Wrapper } from "./styles/user-followers";

export default function UserFollowers() {
  const { githubFollowers } = useContext(GithubContext);

  return (
    <Wrapper>
      <div className="followers">
        {githubFollowers.map((follower, index) => {
          const { avatar_url, html_url, login } = follower;

          return (
            <article key={index}>
              <img src={avatar_url} alt={login} />
              <div>
                <h4>{login}</h4>
                <a href={html_url}>{html_url}</a>
              </div>
            </article>
          );
        })}
      </div>
    </Wrapper>
  );
}
