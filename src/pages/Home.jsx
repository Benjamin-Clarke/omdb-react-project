import React from "react";
import Landing from "../components/Landing";
import Nav from "../components/Nav";

export default function Home({user}) {
  return (
    <>
      <Nav user={user}/>
      <Landing />
    </>
  );
}
