import React from "react";
import "./CookBook.css";
import cookBook from "../assets/cookbook.jpg";
import CookBookForm from "./CookBookForm";
const CookBook = () => {
  return (
    <div className="cookBookMain">
      <h1 className="cookBookHeaders">Cookbook and Gift Certificates</h1>
      <div className="cookBookContent">
        <p className="cookBookPara">Kokkari: Contemporary Greek Flavors</p>
        {/*  */}
        <div className="cookBookFlex">
          <div className="cookBookFlexContent">
            <div className="reservationLines">
              <div className="reservationLine"></div>
              <div className="reservationLine"></div>
            </div>
            <div className="cookBookFlexParas">
              <p>
                Long before fresh, seasonal, artisanal, and local became
                catchwords on every food-lovers lips, the Greeks had a developed
                as simple and irresistible cuisine based on the day’s catch from
                the sea, wild greens gathered on rocky hillsides, perfectly
                ripened orchard fruits, and patiently prepared feta cheese and
                thickened yogurt.
              </p>
              <p>
                Horta, Avgolemono, Tzatziki, Galaktoboureko. The brilliant
                flavors and unforgettable textures of bright lemon and fragile
                phyllo, the mouthwatering aroma of lamb roasting over an open
                fire resonate with every Greek heart and evoke strong memories
                of family gatherings and an age-old ethos of hospitality.
              </p>
              <p>
                Well into its second decade, Kokkari’s founders continue to
                greet the stranger as a friend and welcome diners in the best
                warm Greek fashion to a meal they won’t soon forget. Now they
                invite you to try some of their favorite dishes at home, and
                wish you a Greek bon appetit: kali orexi!
              </p>
            </div>
          </div>
          <div className="cookBookImage">
            <img src={cookBook} />
          </div>
        </div>
      </div>

      <CookBookForm />

      {/*  */}
    </div>
  );
};

export default CookBook;
