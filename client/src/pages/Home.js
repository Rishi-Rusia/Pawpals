import React from "react";
import Header from "../components/Header";
import Navbar from "../components/Navbar";
import Friends from "../components/Friends";
import Why from "../components/Why";
import Why2 from "../components/Why2";
export default function Home() {
  return (
    <div>
      <Navbar></Navbar>
      <Header></Header>

      <div className="home-body"></div>

      <Friends></Friends>

      <div className="whylist">
        <Why></Why>
        <Why2></Why2>
        {/* <Why></Why> */}
      </div>
    </div>
  );
}
