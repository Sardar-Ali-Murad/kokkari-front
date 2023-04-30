import img3 from "../assets/cusine3.jpg";
import img4 from "../assets/cusine4.jpg";
import img5 from "../assets/cusine5.jpg";
import img6 from "../assets/cusine6.jpg";
import img7 from "../assets/cusine7.jpg";
import img8 from "../assets/cusine8.jpg";
import img9 from "../assets/cusine9.jpg";
import img10 from "../assets/cusine10.jpg";


import dining1 from "../assets/dining1.jpg"
import dining2 from "../assets/dining2.jpg"
import dining3 from "../assets/dining3.jpg"

import press1 from "../assets/press1.jpg"
import press2 from "../assets/press2.jpg"
import press3 from "../assets/press3.jpg"
import press4 from "../assets/press4.jpg"
import press5 from "../assets/press5.jpg"
import press6 from "../assets/press6.jpg"
import press7 from "../assets/press7.jpg"
import press8 from "../assets/press8.jpg"
import press9 from "../assets/press9.jpg"

let cousine = [
  {
    head: "Olive Oil For Aroma And Body",
    para: "Olive oil is more than just a cooking medium in the Kokkari kitchen. Its the foundation on which almost every savory dish rests. Used liberally, olive oil adds a silky body and lush richness to braised dishes and greens.",
    img: img3,
  },
  {
    head: "Tomatoes And Other Sweet Notes",
    para: "Tomato sauce cloaks ground lamb in moussaka, ground beef in pastitsio, and adds sweetness to savory dishes. Green beans, zucchini, artichokes, fava beans and okra are routinely stewed with tomatoes. ",
    img: img4,
  },
  {
    head: "Lemons And Other Tangy Flavors",
    para: "Seafood requires lemon and our roasted meats are basted with lemon juice as its natural sugar helps the surface brown and crisp. Wine vinegar steps in with bolder tartness and yogurt supplies the acidity to marinades, dips like tzatziki, and simple sauces. ",
    img: img5,
  },
  {
    head: "Oregano and Other Aromatics",
    para: "Fresh herbs are everywhere in Greek cooking. We season braised rabbit with cinnamon, allspice, nutmeg, and cloves. We add cumin to meatballs and tripe. Our kitchen couldn’t function without dried oregano to scent roast chicken, tomato sauce, and summer vegetable stews.",
    img: img6,
  },
  {
    head: "Greens From The Field And Farm",
    para: "From peppery dandelions and mustard to cultivated spinach, beet greens, and chard, we savor wild greens for fillings and preparation of horta, or cooked seasonal greens.",
    img: img7,
  },
  {
    head: "Feta And Other Salty Elements",
    para: "Feta’s briny tang and creamy texture give many dishes their Greek personality. We rely on manouri when we want a milder cheese or myzithra as a firm option, yet feta is the cheese we sprinkle on roasted asparagus and peppers, blend with chiles for a spicy spread, and crumble over chilled watermelon.",
    img: img8,
  },
  {
    head: "Seafood",
    para: "Whole fish, sardines glistening, octopus plump and meaty; Grilled, fried or baked plaki style with tomato? Fish tastes better when cooked on the bone, and we’re happy to bring a selection to the table when asked as we know many of our guests want to look the whole fish right in the eye.",
    img: img9,
  },
  {
    head: "Lamb, The Favored Meat",
    para: "We’ve worked hard to find a source of lamb comparable to the mild lamb served in Greece. Our dry-aged  whole lamb comes from a single source who deliverers to us personally. Whole lambs come with bonus parts; spit roasted or skewered innards that Greek diners adore.",
    img: img10,
  },
];

const northBay = [
  "Take US-101 South towards San Francisco",
  "Go across the Golden Gate Bridge",
  "Take the US-101 South ramp towards DOWNTOWN/LOMBARD ST.",
  "Stay on LOMBARD ST. until VAN NESS AVE",
  "Turn RIGHT on VAN NESS AVE.",
  "Turn LEFT on BROADWAY ST.",
  "Take BROADWAY thru the BROADWAY TUNNEL.",
  "Proceed thru the major intersection of COLUMBUS and BROADWAY.",
  "Turn RIGHT on BATTERY ST.",
  "Turn LEFT on JACKSON ST.",
  "KOKKARI is at the corner of JACKSON ST. & FRONT ST.",
];

const eastBay = [
  "Go Westbound on the BAY BRIDGE (I-80)",
  "Take the FREMONT ST. exit.",
  "At the bottom of the exit ramp turn LEFT on FREMONT ST.",
  "Go ACROSS Market St.",
  "Turn LEFT on PINE ST.",
  "Turn RIGHT on SANSOME ST.",
  "Turn RIGHT on JACKSON",
  "KOKKARI is at the corner of JACKSON ST. & FRONT ST.",
];

const southBay = [
  "Take 280 NORTH to SAN FRANCISCO",
  "GET in LEFT LANE as you see the San Francisco cityscape",
  "LEFT off the ramp on to KING DRIVE",
  "Continue straight past PAC BELL PARK",
  "You are now on EMBARCADERO",
  "Pass under the Bay Bridge and past the FERRY PLAZA BUILDING.",
  "Turn LEFT on BROADWAY at stop light",
  "Turn LEFT on BATTERY ST.",
  "Turn LEFT on JACKSON ST.",
  "KOKKARI is at the corner of JACKSON ST. & FRONT ST.v",
];

let chips=[
  {
    role:"Managing Partner",
    names:["Paul Kirby"]
  },
  {
    role:"Chef/Partner",
    names:["Erik Cosselmon"]
  },
  {
    role:"General Manager",
    names:["William Boumier"]
  },
  {
    role:"Chef de Cuisine ",
    names:["Manuel Vera"]
  },
  {
    role:"Office Manager ",
    names:["Molly Barrango"]
  },
  {
    role:"Sous Chefs",
    names:["Brian Beach"," Miho Reis"]
  },
  {
    role:"Pastry",
    names:["Guillermo Coronado"]
  },
  {
    role:"Managers",
    names:["Bibi Bahador"," Iain Bates"," Michele DiRuocco","Robin Kirby"," Valerie Klein"]
  },
  {
    role:"Wine Buyer ",
    names:["Lyle Coffield"]
  },
  {
    role:"Event Manager",
    names:["Melissa Lopez"]
  },

]

let dining=[
  {
    head:"OENOS ROOM",
    para:"Adjacent to the Kouzina is the Oenos or “wine” room.  This is one of Kokkari’s two private dining rooms.  This room features large windows that look out on to Jackson Street and a dramatic wall of wine racks that spans floor to ceiling.  The large, wood-framed, sliding glass doors that separate the Oenos Room from the main dining area allow guests to feel part of the restaurant while still being in a private space.  This room can accommodate 30 people.",
    pic:dining2
  },
  {
    head:"Chef’s Table",
    para:"The focal point of the Kouzina is the Chef’s Table.  It is a beautiful 20 foot long hand-carved wooden table that can accommodate up to 20 people.  This space is ideal for celebrations, special family events and casual business functions that do not require a completely private space.",
    pic:dining1
  },
  {
    head:"HANIA",
    para:"This unique private dining room is located downstairs and is completely separate from the main dining area.  The room has the feel of a wine cellar with warm wood accents and rich, tapestry carpets.  It features a rectangular polished wood table that accommodates up to 10 people comfortably.  The Hania Room is ideal for small business meetings and intimate family functions.",
    pic:dining3
  },

]


let Press=[
  {
    heading:"Zagat releases 2015 San Francisco survey results: Kokkari, Danko on top",
    date:"December 10, 2014",
    para:" Zagat has released its annual survey results for San Francisco and the Bay Area — but you won’t see any of the new 2015 editions of the little red pamphlet on bookshelves or Amazon.",
    img:press1
  },
  {
    heading:"What is “New American” food, anyway?",
    date:"Chicago Tribune, Jul 29, 2015",
    para:"Kokkari Estiatorio restaurant in San Francisco, another city on the cutting edge of food.",
    img:press2
  },
  {
    heading:"Old favorite Kokkari again on top of its game",
    date:"SFGate, Jan 30, 2015",
    para:" When the 2015 edition of the Bay Area Zagat Survey came out in December, it contained a first: Kokkari was rated the region’s top restaurant.",
    img:press3
  },
  {
    heading:"Zagat releases 2015 San Francisco survey results: Kokkari, Danko on top",
    date:"December 10, 2014",
    para:"  Zagat has released its annual survey results for San Francisco and the Bay Area — but you won’t see any of the new 2015 editions of the little red pamphlet on bookshelves or Amazon.",
    img:press4
  },
  {
    heading:"Who bumped Gary Danko from No. 1 in S.F. Zagat survey?",
    date:"San Francisco Business Times, Dec 9, 2014",
    para:"Zagat announced its results for its 2015 survey today, and for the first time in five years.",
    img:press5
  },
  {
    heading:"Interview With the Owners of Kokkari, Zagat 2014 Top-Rated Bay Area Restaurant",
    date:"Zagat, Dec 9, 2014",
    para:"Longtime Greek destination Kokkari Estiatorio has been a beloved SF institution since 1998 when founding partners George and Judy Marcus and Dr. Kenneth and Angie Frangadakis opened the restaurant (in 1995, they opened its sister restaurant, Evvia, in Palo Alto)..",
    img:press6
  },
  {
    heading:"Fish for compliments: Kokkari chef’s deep secrets for grilling",
    date:"SFGate, Sep 3, 2014",
    para:" If you want good advice on how to grill a whole fish, ask a chef who has done it a few times. Even better, a few thousand. In the Bay Area, that would be Erik Cosselmon, executive chef at Kokkari.",
    img:press7
  },
  {
    heading:"Comparing Kokkari and Evvia",
    date:"San Francisco Chronicle, Nov 14, 2013",
    para:"It’s always fun to see what one restaurant owner does with a similar concept in two different cities. Recently, I’ve been thinking about George Marcus’ pair of upscale Greek restaurants: Kokkari in San Francisco and Evvia in Palo Alto..",
    img:press8
  },
  // {
  //   heading:"Patxi’s Plans Huge Expansion; Kokkari Cooks For Obamas",
  //   date:"Eater SF, Apr 10, 2014",
  //   para:"Chefs Erik Cosselmon of Kokkari and Mario Ortega of Evvia teamed up with White House chef Cristeta Comerford to cook lamb chops, grilled ….",
  // },
  {
    heading:"Kokkari Estiatorio, SF: a worthy destination",
    date:"San Francisco Chronicle, Mar 8, 2012",
    para:"Still a destination spot after 13 years, this San Francisco institution sets the bar for Greek dining in the city. Executive chef Erik Cosselmon offers …",
    img:press9
  },

]

export { cousine, northBay, eastBay, southBay,chips,dining,Press };
