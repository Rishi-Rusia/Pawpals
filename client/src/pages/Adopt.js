import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Card from "../components/Card";
import Basic from "../components/Basic";

export default function Adopt() {
  return (
    <div>
      <Navbar></Navbar>

      <Basic
        image="https://images.pexels.com/photos/87065/pexels-photo-87065.jpeg?auto=compress&cs=tinysrgb&w=600"
        title="ADOPT"
      ></Basic>
      <div className="friends-center">
        <div className="friends-cardlist">
          <Card
            image="https://images.pexels.com/photos/3687770/pexels-photo-3687770.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            title="WALDO"
            para="Waldo is a playful and affectionate pup who loves to explore and have fun. He has a lot of energy and enjoys playing fetch, going for walks, and cuddling with his favorite human..."
          ></Card>
          <Card
            image="https://images.pexels.com/photos/1805164/pexels-photo-1805164.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            title="KABOSU"
            para="Kabosu is a lively and playful Shiba Inu who loves to run, play and explore the world. With his charming personality and his adorable looks, he is sure to capture the hearts of..."
          ></Card>
          <Card
            image="https://images.pexels.com/photos/3397939/pexels-photo-3397939.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            title="MUFFINS"
            para="Muffins is a cheerful and affectionate pup who loves to be the center of attention. With his bright, sparkling eyes and wagging tail, he brings joy to everyone he meets..."
          ></Card>
        </div>
      </div>

      <div className="friends-center">
        <div className="friends-cardlist">
          <Card
            image="https://images.pexels.com/photos/3523317/pexels-photo-3523317.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="JACKY"
            para="JACKY is a playful and affectionate pup who loves to explore and have fun. He has a lot of energy and enjoys playing fetch, going for walks, and cuddling with his favorite human..."
          ></Card>
          <Card
            image="https://images.pexels.com/photos/130763/pexels-photo-130763.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="FLUFF"
            para="Fluff is a lively and playful doggo who loves to run, play and explore the world. With his charming personality and his adorable looks, he is sure to capture the hearts of..."
          ></Card>
          <Card
            image="https://images.pexels.com/photos/1407784/pexels-photo-1407784.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="BRUNO"
            para="Bruno is a cheerful and affectionate pup who loves to be the center of attention. With his bright, sparkling eyes and wagging tail, he brings joy to everyone he meets..."
          ></Card>
        </div>
      </div>

      <div className="friends-center">
        <div className="friends-cardlist">
          <Card
            image="https://images.pexels.com/photos/2326938/pexels-photo-2326938.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Parshmin"
            para="Parshmin is a playful and affectionate pup who loves to explore and have fun. He has a lot of energy and enjoys playing fetch, going for walks, and cuddling with his favorite human..."
          ></Card>
          <Card
            image="https://images.pexels.com/photos/2607544/pexels-photo-2607544.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="Snowy"
            para="Snowy is a lively and playful Wolfhound who loves to run, play and explore the world. With his charming personality and his adorable looks, he is sure to capture the hearts of..."
          ></Card>
          <Card
            image="https://images.pexels.com/photos/1490908/pexels-photo-1490908.jpeg?auto=compress&cs=tinysrgb&w=600"
            title="JimJam"
            para="Jimjam is a cheerful and affectionate pup who loves to be the center of attention. With his bright, sparkling eyes and wagging tail, he brings joy to everyone he meets..."
          ></Card>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
