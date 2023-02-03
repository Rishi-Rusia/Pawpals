import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Basic from "../components/Basic";
import Paragraph from "../components/Paragraph";
import ContactMe from "../components/ContactMe";

export default function Contact() {
  return (
    <div>
      <Navbar></Navbar>
      <Basic
        image="https://images.pexels.com/photos/3523317/pexels-photo-3523317.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
        title="CONTACT"
      ></Basic>
      <Paragraph content="If you have any questions or comments, please don't hesitate to reach out to me. You can contact me via email at rishirusiayolo or by filling out the form on this page. I will do my best to respond to your inquiry as soon as possible. Thank you for visiting my website!"></Paragraph>

      <ContactMe></ContactMe>
      <Footer></Footer>
    </div>
  );
}
