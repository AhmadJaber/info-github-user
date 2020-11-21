import React, { useContext } from "react";
import {
  Navbar,
  SearchField,
  UserInfo,
  User,
  Repos,
  Footer,
} from "../components";
import { GithubContext } from "../context/context";
import loaderGif from "../images/preloader.gif";

export default function Dashboard() {
  const { isLoading } = useContext(GithubContext);

  if (isLoading) {
    return (
      <main>
        <Navbar />
        <SearchField />
        <img src={loaderGif} alt="loading...." className="loading-img" />
      </main>
    );
  }

  return (
    <main>
      <Navbar />
      <SearchField />
      <UserInfo />
      <User />
      <Repos />
      <Footer />
    </main>
  );
}
