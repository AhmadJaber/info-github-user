import React, { useContext, useState } from "react";
import { MdSearch } from "react-icons/md";
import { GithubContext } from "../../context/context";
import { Wrapper, ErrorWrapper } from "./styles/search";

export default function SearchField() {
  const [user, setUser] = useState("");
  const { requests, error, searchGithubUser, isLoading } = useContext(
    GithubContext
  );
  console.log(requests);

  const handleSubmit = (event) => {
    event.preventDefault();

    // if user typed in search-box do something, or nothing
    if (user) {
      searchGithubUser(user);
      console.log(user);

      // optional
      // setUser("");
    }
  };

  return (
    <div className="section">
      <Wrapper className="section-center">
        {error.show ? (
          <ErrorWrapper>
            <p>{error.msg}</p>
          </ErrorWrapper>
        ) : null}

        <form onSubmit={handleSubmit}>
          <div className="form-control">
            <MdSearch />
            <input
              type="text"
              value={user}
              placeholder="search for github user"
              onChange={(event) => setUser(event.target.value)}
            />
            {requests > 0 && !isLoading && (
              <button type="submit">search</button>
            )}
          </div>
        </form>

        <h3>requests: {requests} of 60</h3>
      </Wrapper>
    </div>
  );
}
