import React from "react";
import { Navbar, SearchField, UserInfo, User, Repos } from "../components";

export default function Dashboard() {
  return (
    <main>
      <Navbar />
      <SearchField />
      <UserInfo />
      <User />
      <Repos />
    </main>
  );
}
