import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Basic from "../components/Basic";
import Paragraph from "../components/Paragraph";

export default function Donate() {
  return (
    <div>
      <Navbar></Navbar>
      <Basic
        image="https://images.pexels.com/photos/1125766/pexels-photo-1125766.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="DONATE"
      ></Basic>
      <Paragraph
        content={
          <>
            At Pawpals, we rely on the generosity of people like you to help us
            continue our mission of finding loving homes for abandoned and
            shelter dogs. Your donation will go towards providing care for our
            furry friends, including food, medical attention, and
            rehabilitation, as well as expanding our reach to find more dogs in
            need of a loving home. Every dollar counts and makes a real
            difference in the lives of these animals. By donating to Pawpals,
            you are not only helping individual dogs, but also making a positive
            impact on the lives of families who will one day welcome these dogs
            into their homes. So why not make a difference today and donate to
            Pawpals? Your generosity will be greatly appreciated by both us and
            the dogs we serve.
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
            At Pawpals, we are dedicated to rescuing and rehoming as many dogs
            as possible. Our mission is to give every dog a loving forever home,
            and we cannot do this without your support. Every donation, big or
            small, makes a difference and goes directly towards the care of our
            furry friends. Your generosity helps provide essential medical care,
            food, and shelter to the dogs in our care. Your donation will not
            only change the life of the dogs we rescue but also the lives of the
            families who adopt them. By donating to Pawpals, you become a part
            of the solution and help us continue our mission to provide love and
            comfort to dogs in need. Your donation is tax-deductible, and we
            will provide a receipt for your records. Thank you for your
            generosity and for supporting our mission to save lives.
            <br />
          </>
        }
      ></Paragraph>

      <div className="donate-button-container">
        <button className="donate-button">DONATE</button>
      </div>

      <Footer></Footer>
    </div>
  );
}
