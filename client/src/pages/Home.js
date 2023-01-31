import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Friends from "../components/Friends";
import Why from "../components/Why";
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>

      <div className="home-body"></div>

      <Friends></Friends>
      <Why></Why>
    </div>
  );
}
