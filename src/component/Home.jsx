import { React, useState } from "react";
import bg from "../assets/Homebg.gif";
import Product from "./Product";
import book_one from "../assets/book_one.jpg";
import book_two from "../assets/book_two.png";
import book_three from "../assets/book_three.png";
import book_four from "../assets/book_four.jpg";
import book_five from "../assets/book_five.jpg";
import book_six from "../assets/book_six.gif";
import Navbar from "./Navbar";
import Footer from "./Footer";

function Home() {
  const [searchText, setSearchText] = useState("");

  const handleSearchChange = (e) => {
    setSearchText(e.target.value);
  };

  const data = [
    {
      Id: "0",
      Title:
        "A zombie film is not fun without a bunch of stupid people running around and observing how they fail to handle the situation.",
      Image: book_one,
      Price: 39,
      Rating: 4,
    },
    {
      Id: "1",
      Title:
        "When Neil Armstrong set foot on the moon, he said the famous words, One small step for man, one giant leap for mankind Or did he?",
      Image: book_two,
      Price: 39,
      Rating: 4,
    },
    {
      Id: "2",
      Title:
        " Forgiveness is a prominent theme in Don't Look Back. Olivia has to learn to forgive herself and others for past mistakes in order to heal and move forward.",
      Image: book_three,
      Price: 39,
      Rating: 4,
    },
    {
      Id: "3",
      Title:
        "Love as powerful as your mother’s for you leaves it’s own mark. To have been loved so deeply, even though the person who loved us is gone, will give us some protection forever",
      Image: book_four,
      Price: 39,
      Rating: 4,
    },
    {
      Id: "4",
      Title:
        "You haven’t got a letter on yours. I suppose she thinks you don’t forget your name. But we’re not stupid — we know we’re called Gred and Forge",
      Image: book_five,
      Price: 9,
      Rating: 4,
    },
    {
      Id: "5",
      Title:
        "Always remember that the crowd that applauds your coronation is the same crowd that will applaud your beheading. People like a show",
      Image: book_six,
      Price: 39,
      Rating: 4,
    },
  ];

  const filteredData = data.filter((row) =>
    Object.values(row).some((value) =>
      value.toString().toLowerCase().includes(searchText.toLowerCase())
    )
  );

  return (
    <>
      <div id="navbar-main" className="w-full z-30 fixed top-0 left-0">
        <Navbar
          searchText={searchText}
          handleSearchChange={handleSearchChange}
        />
      </div>
      <div id="main-home-container" className="w-full min-h-screen flex flex-col items-center p-4 sm:p-8 md:p-14 bg-gray-100">
        <div id="main-img-bg" className="w-full py-3 bg-yellow-300">
          <div className="flex flex-col md:flex-row items-center md:justify-between">
            <div id="bg-image" className="w-full md:w-1/2 lg:w-1/3 p-3">
              <img src={bg} alt="Background" className="w-full rounded-xl object-cover transition-transform duration-500 hover:scale-105" />
            </div>
            <div className="w-full md:w-1/2 lg:w-2/3 flex flex-col items-center text-center md:text-left p-4">
              <div className="flex flex-col items-center">
                <span className="text-xl md:text-2xl lg:text-3xl font-bold transition-opacity duration-500 hover:opacity-80">
                  A half-read book is a half-finished love affair
                </span>
                <span className="text-xl md:text-2xl lg:text-3xl font-bold text-cyan-900 mt-2">
                  - Uddeshya
                </span>
              </div>
            </div>
          </div>
        </div>

        <div id="content-container" className="w-full bg-blue-950 py-8">
          <div id="row-1" className="w-full flex flex-wrap justify-center gap-4 p-4">
            {filteredData.map((i) => (
              <div key={i.Id} className="bg-white rounded-xl p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 transition-transform duration-300 hover:scale-105">
                <Product
                  Id={i.Id}
                  Title={i.Title}
                  Image={i.Image}
                  Price={i.Price}
                  Rating={i.Rating}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
      <div id="footer" className="w-full">
        <hr className="my-8 border-blue-gray-50" />
        <Footer />
      </div>
    </>
  );
}

export default Home;
