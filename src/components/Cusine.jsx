import React from "react";
import "./Cusine.css";
import img1 from "../assets/cusine1.jpg";
import img2 from "../assets/cusine2.jpg";
import { cousine } from "./data";

const Cusine = () => {
  return (
    <div className="cusineMain">
      {/*  */}
      <div className="cusinePart1">
        <div className="cusinePart1Content">
          <p className="cusineHeader">
            Kouzina — <span>κουζίνα</span>
          </p>
          <div className="cusineLinesMain">
            <div className="cusineLines"></div>
            <div className="cusineLines"></div>
          </div>
          <div className="cusineParas">
            <p>
              Although we operate in San Francisco and draw on the bounty of
              Northern California, we owe our culinary aesthetic to Greece,
              where diners take more pleasure in quality ingredients than in
              artful embellishment.
            </p>
            <p>
              We have modernized many Greek dishes while staying true to the
              signature tastes of the Greek table, respecting the pure flavors
              of sweet baby lamb, tangy homemade yogurt, and the woodsy scent of
              wild oregano.
            </p>
            <p>
              While Greece is a country with dramatically varied landscapes and
              widely dispersed archipelagos, there is a singularly Greek flavor
              palette, a collection of ingredients and preparation, that define
              what we do at the Kokkari.
            </p>
            <p>
              The appetizing aroma of wood smoke, coming from our open hearth,
              charcoal grill, and wood-fired oven, perfumes our dishes and
              enhances the of warmth of family and friends.
            </p>
            <p>
              Our menu, showcasing seafood and game, features many of the most
              sought-after traditional Aegean dishes, as well as selections
              which have been modernized through the innovative blending of
              cultures and techniques. Horiatiki, the classic Greek salad is
              offered along side the Maroulosalata, a version of the chopped
              salad with a creamy feta dressing, pine nuts and Kalamata olives.
              Tender grilled octopus is garnished with lemon juice and olive
              oil; a classic Greek preparation, while calamari is stuffed with
              feta, fennel and orange; a more modern combination. Lamb chops are
              served straight from the mesquite grill with hints of garlic,
              oregano and lemon juice. While traditional soutzoukakia, or lamb
              meatballs, are enlivened with a hint of cumin and tangy Greek
              yogurt.
            </p>
          </div>
        </div>

        <div className="cusinePart1Image">
          <img src={img1} />
          <img src={img2} />
        </div>
      </div>

      {/*  */}

      <div className="cousineGrid">
        {cousine?.map((data) => {
          return (
            <div className="cousineCard">
              <img src={data?.img} />
              <div className="cousineContent">
                <h1>{data?.head}</h1>
                <p>{data?.para}</p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Cusine;
