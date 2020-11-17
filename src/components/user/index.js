import React from "react";
import { Wrapper } from "./styles/user";
import UserCard from "../user-card";
import UserFollowers from "../user-followers";

export default function User() {
  return (
    <section className="section section--big">
      <Wrapper className="section-center">
        <UserCard />
        <UserFollowers />
      </Wrapper>
    </section>
  );
}
