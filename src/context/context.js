import React, { createContext, useEffect, useState } from "react";
import axios from "axios";
import { mockUser } from "./MockData/mockUser";
import { mockRepos } from "./MockData/mockRepos";
import { mockFollowers } from "./MockData/mockFollowers";
import { URL } from "../constants/url";

const GithubContext = createContext();

const GithubProvider = ({ children }) => {
  const [githubUser, setGithubUser] = useState(mockUser);
  const [githubRepos, setGithubRepos] = useState(mockRepos);
  const [githubFollowers, setGithubFollowers] = useState(mockFollowers);

  // handle request count
  const [requests, setRequests] = useState(0);
  // handle loading gif
  const [isLoading, setIsLoading] = useState(false);
  // handle errors
  const [error, setError] = useState({ show: false, msg: "" });

  // check if the request is over 60 or less
  // also this request doesn't count as request
  const checkRequests = () => {
    axios
      .get(`${URL}/rate_limit`)
      .then(({ data }) => {
        let {
          rate: { remaining },
        } = data;

        setRequests(remaining);

        // if remaining is zero, show a error message
        if (remaining === 0) {
          toggleError(
            true,
            "you exceeded your current request limit, try after an hour!!"
          );
        }
      })
      .catch(console.error);
  };

  // error handler
  const toggleError = (show = false, msg = "") => {
    setError({ show, msg });
  };

  // get githubuser, followers, repos
  const searchGithubUser = async (user) => {
    toggleError();
    setIsLoading(true);

    try {
      const response = await axios(`${URL}/users/${user}`);
      console.log(response);

      if (response) {
        setGithubUser(response.data);
        const { followers_url, repos_url } = response.data;

        await Promise.allSettled([
          axios(`${repos_url}?per_page=100`),
          axios(`${followers_url}?per_page=100`),
        ])
          .then((response) => {
            const [repos, followers] = response;
            const status = "fulfilled";

            if (repos.status === status) {
              setGithubRepos(repos.value.data);
            }

            if (followers.status === status) {
              setGithubFollowers(followers.value.data);
            }
          })
          .catch(console.error);
      } else {
        toggleError(true, "there is no user with that username");
      }

      checkRequests();
      setIsLoading(false);
    } catch (error) {
      console.error(error.message);
    }
  };

  useEffect(checkRequests, []);

  return (
    <GithubContext.Provider
      value={{
        searchGithubUser,
        githubUser,
        githubRepos,
        githubFollowers,
        requests,
        isLoading,
        error,
      }}
    >
      {children}
    </GithubContext.Provider>
  );
};

export { GithubContext, GithubProvider };
