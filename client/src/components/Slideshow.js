import React from "react";
import { useState } from "react";

export default function Slideshow() {
  const [activeSlide, setActiveSlide] = useState(0);

  const sliderArray = [
    {
      img: "https://images.pexels.com/photos/3985282/pexels-photo-3985282.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2",
      title: "Mary, Maurice, and Marsy",
      content: (
        <>
          As a single mother, my life was always hectic and busy. But everything
          changed when I adopted Marsy, a cheerful and loving dog, from the
          local animal shelter. My daughter, Maurice, had always wanted a pet of
          her own, and Marsy quickly became a beloved member of our family.
          <br /> <br />
          Despite the challenges of adjusting to a new family member, Marsy has
          brought so much joy and laughter into our home. She loves to play with
          Maurice and follows her everywhere she goes, making her the perfect
          playmate. Watching the two of them bond has been a true delight, and I
          couldn't be happier with our decision to adopt Marsy.
          <br /> <br />
          <button className="slideshow-read-more">Read more</button>
        </>
      ),
    },

    {
      img: "https://images.pexels.com/photos/13804397/pexels-photo-13804397.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Derek and Huffins",
      content: (
        <>
          Hi! My name is Derek and I have the best dog ever! His name is Huffins
          and he's so cool. I always wanted a dog, and finally, my parents got
          me one for my birthday. Huffins is a golden retriever and he's so
          friendly. He always greets me with wagging tail and lots of kisses
          when I get home from school.
          <br /> <br />
          We do lots of fun things together like playing fetch, going for walks,
          and cuddling on the couch. Huffins is also really smart, he can do
          lots of tricks like roll over, sit, and give me a high five. I'm so
          glad I have him, he's my best friend and always makes me smile
          <br /> <br />
          <button className="slideshow-read-more">Read more</button>
        </>
      ),
    },
    {
      img: "https://images.pexels.com/photos/5792905/pexels-photo-5792905.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "The warrens and Maliza",
      content: (
        <>
          We, the Warrens, are a loving family with a passion for adventure and
          a deep love for our furry companion, Maliza. Maliza is not just any
          ordinary dog, she is a loyal and intelligent Golden Retriever who has
          become a cherished member of our family. She joins us on all our
          outdoor expeditions and never fails to brighten up our days with her
          playful energy and unconditional love.
          <br /> <br />
          Maliza has an insatiable curiosity, which often leads her into
          mischief, but her kind heart and silly antics always win us over. Her
          obedience and eagerness to please never cease to amaze us, and she is
          always up for any challenge we throw her way.
          <br /> <br />
          <button className="slideshow-read-more">Read more</button>
        </>
      ),
    },
    {
      img: "https://images.pexels.com/photos/5733137/pexels-photo-5733137.jpeg?auto=compress&cs=tinysrgb&w=600",
      title: "Sammy and bocheck",
      content: (
        <>
          Sammy was looking for a new companion after the loss of her previous
          dog and found Bochieck, a lonely and abandoned pup, at a local animal
          shelter. Despite the challenges of adjusting to a new home and owner,
          Bochieck quickly won Sammy's heart with his charming personality and
          loyalty.
          <br /> <br />
          Bochieck has since been a constant source of love and comfort for
          Sammy and has even helped her through some tough times. In return,
          Sammy has given Bochieck a happy and loving home, filled with plenty
          of belly rubs, long walks, and cuddles on the couch. The two have
          formed a close bond and their adoption story is a reminder of the
          transformative power of love and companionship.
          <br /> <br />
          <button className="slideshow-read-more">Read more</button>
        </>
      ),
    },
  ];

  const sliderHandler = (sum) => {
    if (activeSlide + sum > sliderArray.length - 1) {
      setActiveSlide(0);
    } else if (activeSlide + sum < 0) {
      setActiveSlide(sliderArray.length - 1);
    } else {
      setActiveSlide(activeSlide + sum);
    }
  };
  return (
    <div className="slideshow-container">
      <div className="friends-h1">
        <h1>Heartwarming stories from pawpals</h1>
      </div>

      <div className="slideshow">
        {sliderArray.map((obj, index) => {
          return (
            <div
              className={
                index === activeSlide ? "slide" : "slide slide-inactive"
              }
            >
              <img src={obj.img} alt="" />

              <div className="slide-content">
                <h2 className="slide-title">{obj.title}</h2>
                <p className="slide-paragraph">{obj.content}</p>
              </div>
            </div>
          );
        })}
      </div>

      <div className="slider-buttons">
        <button
          className="slideshow-next"
          onClick={() => {
            sliderHandler(-1);
          }}
        >
          &larr;
        </button>
        <button
          className="slideshow-prev"
          onClick={() => {
            sliderHandler(1);
          }}
        >
          &rarr;
        </button>
      </div>
    </div>
  );
}
