import React from "react";
import "./About.css";
import about from "../assets/about.jpg";
import { chips } from "./data";
import img2 from "../assets/about2.jpg";
import img3 from "../assets/about3.jpg";
import { Link } from "react-router-dom";

const About = () => {
  function mapOpen() {
    window.open(`https://maps.google.com/maps?q=Illinois USA.`);
  }
  return (
    <div className="aboutMain">
      {/*  */}
      <div>
        <h1>
          Philoxenia — <span>φιλοξενια</span>
        </h1>
        <div className="aboutLines">
          <div className="fancy-link"></div>
          <div className="fancy-link"></div>
        </div>
        <div className="aboutFlex">
          <div className="aboutContent">
            <p>
              At Kokkari Estiatorio, we are driven by the concept of philoxenia,
              the art of making a stranger a friend. This philosophy drives our
              efforts to create a cuisine fit for the gods with the hospitality
              of a proper Greek home — a restaurant that you would never want to
              leave.
            </p>
            <p>
              Named after a small fishing village on the island of Samos in the
              Aegean Sea, Kokkari is the sister restaurant to acclaimed Evvia
              Estiatorio in Palo Alto, California.
            </p>
            <p>
              Legendary Kokkari is the site where Orion, son of the Greek god
              Poseidon, fell in love with the daughter of the King of Chios. For
              her love, Orion foraged the island for wild game and seafood to
              prepare elaborate banquets: Cuisine fit for the gods.
            </p>
            <p>
              On entering Kokkari, guests experience the old-world charm of a
              rustic Mediterranean country inn. An inviting fireplace, extensive
              woodwork, hand-made pottery and freshly picked flowers all reflect
              the warmth and tradition of ages-old hospitality.
            </p>
          </div>
          <div className="aboutImage">
            <img src={about} />
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="resturantCards">
        <div className="resturantInfoCard">
          <p>KOKKARI ESTIATORIO</p>
          <div>
            <p>200 Jackson Street (at Front St.)</p>
            <p>San Francisco, CA 94111</p>
          </div>
          <div>
            <p>
              p:<span className="activeLink"> 415.981.0983</span>
            </p>
            <Link className="activeLink" to="/Reservations">
              <p>reservations & hours</p>
            </Link>
          </div>
          <div onClick={mapOpen}>
            <p className="activeLink">directions via mobile map</p>
          </div>
        </div>
        <div className="resturantCharacterCard">
          <div className="chipsMain">
            {chips?.map((chip) => {
              return (
                <div className="singleChip">
                  <h5>{chip?.role}</h5>
                  <div className="chipNames">
                    {chip?.names?.map((name) => (
                      <p className={name?.email && "activeLink"}>
                        {name?.name}
                      </p>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="aboutChartersDetail">
        <img src={img2} />
        <div className="aboutChartersDetailContent">
          <h3 className="activeLink">Paul Kirby</h3>
          <h5 className="activeLink">Managing Partner</h5>
          <p>
            Running a restaurant is all about taking care of people,” says Paul
            Kirby who has been at the helm of Kokkari Estiatorio since 2000.
            “From your staff to each and every guest that comes into your
            establishment, it is important to make everyone feel comfortable and
            welcome. Restaurant employees that are valued and respected take
            pride in their work and truly enjoy their jobs. This translates
            directly to the guest experience.
          </p>
          <p>
            While Paul may be soft-spoken and charming (qualities he attributes
            to his Southern upbringing), he is extremely driven. His dedicated,
            hands-on approach to management ensures the high standards of
            service and hospitality at the restaurant have stayed consistent for
            over 15 years. Under Kirby, Kokkari’s refreshing approach to service
            emphasizes the emotional elements of hospitality: Have a good time
            and above all, make sure the guests have a great time.
          </p>
          <p>
            Paul came to the West Coast after years managing waterfront
            restaurant properties in The Hamptons outside of New York City. His
            first job in San Francisco was working alongside acclaimed, Bay Area
            Chef, Reed Hearon as General Manager of Rose Pistola. After three
            years with Hearon he came to Kokkari Estiatorio bringing with him a
            genuine appreciation and knowledge of rustic Meditteranean cuisine
            and wines, an essential prerequisite for working at Kokkari. In 2006
            he was named Managing Partner of both Kokkari and Evvia in Palo
            Alto.
          </p>
        </div>
      </div>
      {/*  */}

      {/*  */}
      <div className="aboutChartersDetail">
        <div className="aboutChartersDetailContent">
          <h3 className="activeLink">Erik Cosselmon</h3>
          <h5 className="activeLink">Chef/Partner</h5>
          <p>
            Erik Cosselmon’s wide-ranging Mediterranean repertoire and strong,
            ingredient-driven style finds full expression in the Greek-inspired
            menus at Kokkari and sister restaurant Evvia in Palo Alto. Since
            being named Executive Chef of Kokkari in 2004, Cosselmon’s brand of
            casual tavern cuisine has attracted even more devotees, earning
            Kokkari top ratings in both local and National press publications.
            “The goal at Kokkari and Evvia is to offer as close to a true Greek
            restaurant experience as possible. Not only is it about good food,
            it’s about the people, the celebratory atmosphere and the Greek
            hospitality
          </p>
          <p>
            Erik grew up on a farm in Central Michigan helping his mom tend
            their extensive kitchen garden and his dad cook for the large
            parties the family would host. This introduction to farm-fresh
            ingredients and cooking cemented his desire to be a chef at an early
            age. After completing a degree at The Culinary Institute of America
            in Hyde Park, New York he moved to Manhattan and began his career
            working at notable restaurants such as Montrachet, Tribeca Grill, Le
            Bernardin and Daniel..
          </p>
          <p>
            Cosselmon moved to San Francisco and in 1996 joined Reed Hearon in
            opening his landmark Liqurian restaurant, Rose Pistola, in North
            Beach. In 1998 he was named Executive Chef. In 2001, ready for a new
            challenge, Erik left to run the kitchen at Cetrella Bistro & Café in
            Half Moon Bay where he garnered immediate and consistent critical
            praise for his rustic Mediterranean food.
          </p>
        </div>
        <img src={img3} />
      </div>
    </div>
  );
};

export default About;
