import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Basic from "../components/Basic";
import Paragraph from "../components/Paragraph";

export default function About() {
  return (
    <div>
      <Navbar></Navbar>
      <Basic
        image="https://images.pexels.com/photos/1739125/pexels-photo-1739125.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="ABOUT"
      ></Basic>
      <Paragraph
        content={
          <>
            Pawpals is a dog adoption website that connects loving homes with
            the perfect canine companion. Our goal is to find loving and
            responsible homes for dogs in need and help create forever homes for
            them. The site is user-friendly and easy to navigate, allowing users
            to browse through a variety of dogs and learn more about each one.
            Our team of experts works tirelessly to ensure that all of the dogs
            featured on our site are healthy and well-adjusted, and that they
            receive proper care while they wait for their forever homes.
            <br />
            <br /> With a focus on matching dogs with families that are the best
            fit for their needs, we are confident that every adoption through
            our site will be a success. We believe that every dog deserves a
            chance to live a happy and fulfilled life, and we are dedicated to
            making that a reality for as many dogs as possible. Whether you're
            looking to adopt your first dog or add another furry friend to your
            family, we encourage you to visit Pawpals and see how we can help
            bring you and your new best friend.
            <br /> <br />
            Pawpals is dedicated to providing a platform where dog lovers can
            connect with rescue organizations and find their forever furry
            friends. We understand that adopting a dog is a big decision and
            that's why we strive to make the process as seamless as possible.
            Our website is designed to make it easy for users to search for
            their perfect dog based on breed, age, location, and personality
            traits.
            <br />
            <br /> Our goal is to connect dogs in need with loving families and
            create lifelong bonds. With a user-friendly interface and a team of
            dedicated animal lovers, Pawpals is the perfect place to start your
            search for the perfect canine companion. Whether you're looking for
            a cuddly lap dog or an energetic hiking buddy, we have a wide
            variety of dogs to choose from. So what are you waiting for? Start
            browsing now and find the pawfect match for you!{" "}
          </>
        }
      ></Paragraph>
      <Footer></Footer>
    </div>
  );
}
