import React, { useContext } from "react";
import { GithubContext } from "../../context/context";

export default function UserInfo() {
  const data = useContext(GithubContext);

  return <h3>UserInfo</h3>;
}
