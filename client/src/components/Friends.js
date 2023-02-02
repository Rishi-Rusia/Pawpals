import React from "react";
import Card from "./Card";

export default function Friends() {
  return (
    <div className="friends">
      <div className="friends-h1">
        <h1>Let's meet your friends to be!</h1>
      </div>

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
    </div>
  );
}
