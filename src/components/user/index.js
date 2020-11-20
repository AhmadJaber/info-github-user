import React from "react";
import { Wrapper } from "./styles/user";
import UserCard from "../user-card";
import UserFollowers from "../user-followers";

export default function User() {
  return (
    <section className="section section__padding--medium">
      <div className="section-center">
        <Wrapper>
          <UserCard />
          <UserFollowers />
        </Wrapper>
        <hr className="breaker" />
      </div>
    </section>
  );
}
