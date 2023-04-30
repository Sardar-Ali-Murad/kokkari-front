import img3 from "../assets/cusine3.jpg";
import img4 from "../assets/cusine4.jpg";
import img5 from "../assets/cusine5.jpg";
import img6 from "../assets/cusine6.jpg";
import img7 from "../assets/cusine7.jpg";
import img8 from "../assets/cusine8.jpg";
import img9 from "../assets/cusine9.jpg";
import img10 from "../assets/cusine10.jpg";

import dining1 from "../assets/dining1.jpg";
import dining2 from "../assets/dining2.jpg";
import dining3 from "../assets/dining3.jpg";

import press1 from "../assets/press1.jpg";
import press2 from "../assets/press2.jpg";
import press3 from "../assets/press3.jpg";
import press4 from "../assets/press4.jpg";
import press5 from "../assets/press5.jpg";
import press6 from "../assets/press6.jpg";
import press7 from "../assets/press7.jpg";
import press8 from "../assets/press8.jpg";
import press9 from "../assets/press9.jpg";

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

let chips = [
  {
    role: "Managing Partner",
    names: [
      {
        name: "Paul Kirby",
        email: false,
      },
    ],
  },
  {
    role: "Chef/Partner",
    names: [
      {
        name: "Erik Cosselmon",
        email: true,
      },
    ],
  },
  {
    role: "General Manager",
    names: [{ name: "William Boumier", email: true }],
  },
  {
    role: "Chef de Cuisine ",
    names: [{ name: "Manuel Vera", email: false }],
  },
  {
    role: "Office Manager ",
    names: [{ name: "Molly Barrango", email: false }],
  },
  {
    role: "Sous Chefs",
    names: [
      { name: "Brian Beach", email: false },
      { name: "Miho Reis", email: false },
    ],
  },
  {
    role: "Pastry",
    names: [{ name: "Guillermo Coronado", email: true }],
  },
  {
    role: "Managers",
    names: [
      { name: "Bibi Bahador", email: true },
      { name: "Sous Chefs", email: false },
      { name: "Michele DiRuocco", email: false },
      { name: "Robin Kirby", email: false },
      { name: " Valerie Klein", email: false },
    ],
  },
  {
    role: "Wine Buyer ",
    names: [{ name: "Lyle Coffield", email: true }],
  },
  {
    role: "Event Manager",
    names: [{ name: "Melissa Lopez", email: false }],
  },
];

let dining = [
  {
    head: "OENOS ROOM",
    para: "Adjacent to the Kouzina is the Oenos or “wine” room.  This is one of Kokkari’s two private dining rooms.  This room features large windows that look out on to Jackson Street and a dramatic wall of wine racks that spans floor to ceiling.  The large, wood-framed, sliding glass doors that separate the Oenos Room from the main dining area allow guests to feel part of the restaurant while still being in a private space.  This room can accommodate 30 people.",
    pic: dining2,
  },
  {
    head: "Chef’s Table",
    para: "The focal point of the Kouzina is the Chef’s Table.  It is a beautiful 20 foot long hand-carved wooden table that can accommodate up to 20 people.  This space is ideal for celebrations, special family events and casual business functions that do not require a completely private space.",
    pic: dining1,
  },
  {
    head: "HANIA",
    para: "This unique private dining room is located downstairs and is completely separate from the main dining area.  The room has the feel of a wine cellar with warm wood accents and rich, tapestry carpets.  It features a rectangular polished wood table that accommodates up to 10 people comfortably.  The Hania Room is ideal for small business meetings and intimate family functions.",
    pic: dining3,
  },
];

let Press = [
  {
    heading:
      "Zagat releases 2015 San Francisco survey results: Kokkari, Danko on top",
    date: "December 10, 2014",
    para: " Zagat has released its annual survey results for San Francisco and the Bay Area — but you won’t see any of the new 2015 editions of the little red pamphlet on bookshelves or Amazon.",
    img: press1,
  },
  {
    heading: "What is “New American” food, anyway?",
    date: "Chicago Tribune, Jul 29, 2015",
    para: "Kokkari Estiatorio restaurant in San Francisco, another city on the cutting edge of food.",
    img: press2,
  },
  {
    heading: "Old favorite Kokkari again on top of its game",
    date: "SFGate, Jan 30, 2015",
    para: " When the 2015 edition of the Bay Area Zagat Survey came out in December, it contained a first: Kokkari was rated the region’s top restaurant.",
    img: press3,
  },
  {
    heading:
      "Zagat releases 2015 San Francisco survey results: Kokkari, Danko on top",
    date: "December 10, 2014",
    para: "  Zagat has released its annual survey results for San Francisco and the Bay Area — but you won’t see any of the new 2015 editions of the little red pamphlet on bookshelves or Amazon.",
    img: press4,
  },
  {
    heading: "Who bumped Gary Danko from No. 1 in S.F. Zagat survey?",
    date: "San Francisco Business Times, Dec 9, 2014",
    para: "Zagat announced its results for its 2015 survey today, and for the first time in five years.",
    img: press5,
  },
  {
    heading:
      "Interview With the Owners of Kokkari, Zagat 2014 Top-Rated Bay Area Restaurant",
    date: "Zagat, Dec 9, 2014",
    para: "Longtime Greek destination Kokkari Estiatorio has been a beloved SF institution since 1998 when founding partners George and Judy Marcus and Dr. Kenneth and Angie Frangadakis opened the restaurant (in 1995, they opened its sister restaurant, Evvia, in Palo Alto)..",
    img: press6,
  },
  {
    heading: "Fish for compliments: Kokkari chef’s deep secrets for grilling",
    date: "SFGate, Sep 3, 2014",
    para: " If you want good advice on how to grill a whole fish, ask a chef who has done it a few times. Even better, a few thousand. In the Bay Area, that would be Erik Cosselmon, executive chef at Kokkari.",
    img: press7,
  },
  {
    heading: "Comparing Kokkari and Evvia",
    date: "San Francisco Chronicle, Nov 14, 2013",
    para: "It’s always fun to see what one restaurant owner does with a similar concept in two different cities. Recently, I’ve been thinking about George Marcus’ pair of upscale Greek restaurants: Kokkari in San Francisco and Evvia in Palo Alto..",
    img: press8,
  },
  // {
  //   heading:"Patxi’s Plans Huge Expansion; Kokkari Cooks For Obamas",
  //   date:"Eater SF, Apr 10, 2014",
  //   para:"Chefs Erik Cosselmon of Kokkari and Mario Ortega of Evvia teamed up with White House chef Cristeta Comerford to cook lamb chops, grilled ….",
  // },
  {
    heading: "Kokkari Estiatorio, SF: a worthy destination",
    date: "San Francisco Chronicle, Mar 8, 2012",
    para: "Still a destination spot after 13 years, this San Francisco institution sets the bar for Greek dining in the city. Executive chef Erik Cosselmon offers …",
    img: press9,
  },
];

const gift = [
  {
    value: "1",
    label: "1",
  },
  {
    value: "2",
    label: "2",
  },
  {
    value: "3",
    label: "3",
  },
  {
    value: "4",
    label: "4",
  },
  {
    value: "5",
    label: "5",
  },
  {
    value: "6",
    label: "6",
  },
  {
    value: "7",
    label: "7",
  },
  {
    value: "8",
    label: "8",
  },
  {
    value: "9",
    label: "9",
  },
  {
    value: "10",
    label: "10",
  },
  {
    value: "11",
    label: "11",
  },
  {
    value: "12",
    label: "12",
  },
  {
    value: "13",
    label: "13",
  },
  {
    value: "14",
    label: "14",
  },
  {
    value: "14",
    label: "14",
  },
  {
    value: "15",
    label: "15",
  },
  {
    value: "16",
    label: "16",
  },
  {
    value: "17",
    label: "17",
  },
  {
    value: "18",
    label: "18",
  },
  {
    value: "19",
    label: "19",
  },
  {
    value: "20",
    label: "20",
  },
  {
    value: "21",
    label: "21",
  },
  {
    value: "22",
    label: "22",
  },
  {
    value: "23",
    label: "23",
  },
  {
    value: "24",
    label: "24",
  },
  {
    value: "25",
    label: "25",
  },
  {
    value: "26",
    label: "26",
  },
  {
    value: "27",
    label: "27",
  },
  {
    value: "28",
    label: "28",
  },
  {
    value: "29",
    label: "29",
  },
  {
    value: "30",
    label: "30",
  },
  {
    value: "31",
    label: "31",
  },
  {
    value: "32",
    label: "32",
  },
  {
    value: "33",
    label: "33",
  },
  {
    value: "34",
    label: "34",
  },
  {
    value: "35",
    label: "35",
  },
  {
    value: "36",
    label: "36",
  },
  {
    value: "37",
    label: "37",
  },
  {
    value: "38",
    label: "38",
  },
  {
    value: "39",
    label: "39",
  },
  {
    value: "40",
    label: "40",
  },
  {
    value: "41",
    label: "41",
  },
  {
    value: "42",
    label: "42",
  },
  {
    value: "43",
    label: "43",
  },
  {
    value: "44",
    label: "44",
  },
  {
    value: "45",
    label: "45",
  },
  {
    value: "46",
    label: "46",
  },
  {
    value: "47",
    label: "47",
  },
  {
    value: "48",
    label: "48",
  },
  {
    value: "49",
    label: "49",
  },
  {
    value: "50",
    label: "50",
  },
];

const countries = [
  { code: "AD", label: "Andorra", phone: "376" },
  {
    code: "AE",
    label: "United Arab Emirates",
    phone: "971",
  },
  { code: "AF", label: "Afghanistan", phone: "93" },
  {
    code: "AG",
    label: "Antigua and Barbuda",
    phone: "1-268",
  },
  { code: "AI", label: "Anguilla", phone: "1-264" },
  { code: "AL", label: "Albania", phone: "355" },
  { code: "AM", label: "Armenia", phone: "374" },
  { code: "AO", label: "Angola", phone: "244" },
  { code: "AQ", label: "Antarctica", phone: "672" },
  { code: "AR", label: "Argentina", phone: "54" },
  { code: "AS", label: "American Samoa", phone: "1-684" },
  { code: "AT", label: "Austria", phone: "43" },
  {
    code: "AU",
    label: "Australia",
    phone: "61",
    suggested: true,
  },
  { code: "AW", label: "Aruba", phone: "297" },
  { code: "AX", label: "Alland Islands", phone: "358" },
  { code: "AZ", label: "Azerbaijan", phone: "994" },
  {
    code: "BA",
    label: "Bosnia and Herzegovina",
    phone: "387",
  },
  { code: "BB", label: "Barbados", phone: "1-246" },
  { code: "BD", label: "Bangladesh", phone: "880" },
  { code: "BE", label: "Belgium", phone: "32" },
  { code: "BF", label: "Burkina Faso", phone: "226" },
  { code: "BG", label: "Bulgaria", phone: "359" },
  { code: "BH", label: "Bahrain", phone: "973" },
  { code: "BI", label: "Burundi", phone: "257" },
  { code: "BJ", label: "Benin", phone: "229" },
  { code: "BL", label: "Saint Barthelemy", phone: "590" },
  { code: "BM", label: "Bermuda", phone: "1-441" },
  { code: "BN", label: "Brunei Darussalam", phone: "673" },
  { code: "BO", label: "Bolivia", phone: "591" },
  { code: "BR", label: "Brazil", phone: "55" },
  { code: "BS", label: "Bahamas", phone: "1-242" },
  { code: "BT", label: "Bhutan", phone: "975" },
  { code: "BV", label: "Bouvet Island", phone: "47" },
  { code: "BW", label: "Botswana", phone: "267" },
  { code: "BY", label: "Belarus", phone: "375" },
  { code: "BZ", label: "Belize", phone: "501" },
  {
    code: "CA",
    label: "Canada",
    phone: "1",
    suggested: true,
  },
  {
    code: "CC",
    label: "Cocos (Keeling) Islands",
    phone: "61",
  },
  {
    code: "CD",
    label: "Congo, Democratic Republic of the",
    phone: "243",
  },
  {
    code: "CF",
    label: "Central African Republic",
    phone: "236",
  },
  {
    code: "CG",
    label: "Congo, Republic of the",
    phone: "242",
  },
  { code: "CH", label: "Switzerland", phone: "41" },
  { code: "CI", label: "Cote d'Ivoire", phone: "225" },
  { code: "CK", label: "Cook Islands", phone: "682" },
  { code: "CL", label: "Chile", phone: "56" },
  { code: "CM", label: "Cameroon", phone: "237" },
  { code: "CN", label: "China", phone: "86" },
  { code: "CO", label: "Colombia", phone: "57" },
  { code: "CR", label: "Costa Rica", phone: "506" },
  { code: "CU", label: "Cuba", phone: "53" },
  { code: "CV", label: "Cape Verde", phone: "238" },
  { code: "CW", label: "Curacao", phone: "599" },
  { code: "CX", label: "Christmas Island", phone: "61" },
  { code: "CY", label: "Cyprus", phone: "357" },
  { code: "CZ", label: "Czech Republic", phone: "420" },
  {
    code: "DE",
    label: "Germany",
    phone: "49",
    suggested: true,
  },
  { code: "DJ", label: "Djibouti", phone: "253" },
  { code: "DK", label: "Denmark", phone: "45" },
  { code: "DM", label: "Dominica", phone: "1-767" },
  {
    code: "DO",
    label: "Dominican Republic",
    phone: "1-809",
  },
  { code: "DZ", label: "Algeria", phone: "213" },
  { code: "EC", label: "Ecuador", phone: "593" },
  { code: "EE", label: "Estonia", phone: "372" },
  { code: "EG", label: "Egypt", phone: "20" },
  { code: "EH", label: "Western Sahara", phone: "212" },
  { code: "ER", label: "Eritrea", phone: "291" },
  { code: "ES", label: "Spain", phone: "34" },
  { code: "ET", label: "Ethiopia", phone: "251" },
  { code: "FI", label: "Finland", phone: "358" },
  { code: "FJ", label: "Fiji", phone: "679" },
  {
    code: "FK",
    label: "Falkland Islands (Malvinas)",
    phone: "500",
  },
  {
    code: "FM",
    label: "Micronesia, Federated States of",
    phone: "691",
  },
  { code: "FO", label: "Faroe Islands", phone: "298" },
  {
    code: "FR",
    label: "France",
    phone: "33",
    suggested: true,
  },
  { code: "GA", label: "Gabon", phone: "241" },
  { code: "GB", label: "United Kingdom", phone: "44" },
  { code: "GD", label: "Grenada", phone: "1-473" },
  { code: "GE", label: "Georgia", phone: "995" },
  { code: "GF", label: "French Guiana", phone: "594" },
  { code: "GG", label: "Guernsey", phone: "44" },
  { code: "GH", label: "Ghana", phone: "233" },
  { code: "GI", label: "Gibraltar", phone: "350" },
  { code: "GL", label: "Greenland", phone: "299" },
  { code: "GM", label: "Gambia", phone: "220" },
  { code: "GN", label: "Guinea", phone: "224" },
  { code: "GP", label: "Guadeloupe", phone: "590" },
  { code: "GQ", label: "Equatorial Guinea", phone: "240" },
  { code: "GR", label: "Greece", phone: "30" },
  {
    code: "GS",
    label: "South Georgia and the South Sandwich Islands",
    phone: "500",
  },
  { code: "GT", label: "Guatemala", phone: "502" },
  { code: "GU", label: "Guam", phone: "1-671" },
  { code: "GW", label: "Guinea-Bissau", phone: "245" },
  { code: "GY", label: "Guyana", phone: "592" },
  { code: "HK", label: "Hong Kong", phone: "852" },
  {
    code: "HM",
    label: "Heard Island and McDonald Islands",
    phone: "672",
  },
  { code: "HN", label: "Honduras", phone: "504" },
  { code: "HR", label: "Croatia", phone: "385" },
  { code: "HT", label: "Haiti", phone: "509" },
  { code: "HU", label: "Hungary", phone: "36" },
  { code: "ID", label: "Indonesia", phone: "62" },
  { code: "IE", label: "Ireland", phone: "353" },
  { code: "IL", label: "Israel", phone: "972" },
  { code: "IM", label: "Isle of Man", phone: "44" },
  { code: "IN", label: "India", phone: "91" },
  {
    code: "IO",
    label: "British Indian Ocean Territory",
    phone: "246",
  },
  { code: "IQ", label: "Iraq", phone: "964" },
  {
    code: "IR",
    label: "Iran, Islamic Republic of",
    phone: "98",
  },
  { code: "IS", label: "Iceland", phone: "354" },
  { code: "IT", label: "Italy", phone: "39" },
  { code: "JE", label: "Jersey", phone: "44" },
  { code: "JM", label: "Jamaica", phone: "1-876" },
  { code: "JO", label: "Jordan", phone: "962" },
  {
    code: "JP",
    label: "Japan",
    phone: "81",
    suggested: true,
  },
  { code: "KE", label: "Kenya", phone: "254" },
  { code: "KG", label: "Kyrgyzstan", phone: "996" },
  { code: "KH", label: "Cambodia", phone: "855" },
  { code: "KI", label: "Kiribati", phone: "686" },
  { code: "KM", label: "Comoros", phone: "269" },
  {
    code: "KN",
    label: "Saint Kitts and Nevis",
    phone: "1-869",
  },
  {
    code: "KP",
    label: "Korea, Democratic People's Republic of",
    phone: "850",
  },
  { code: "KR", label: "Korea, Republic of", phone: "82" },
  { code: "KW", label: "Kuwait", phone: "965" },
  { code: "KY", label: "Cayman Islands", phone: "1-345" },
  { code: "KZ", label: "Kazakhstan", phone: "7" },
  {
    code: "LA",
    label: "Lao People's Democratic Republic",
    phone: "856",
  },
  { code: "LB", label: "Lebanon", phone: "961" },
  { code: "LC", label: "Saint Lucia", phone: "1-758" },
  { code: "LI", label: "Liechtenstein", phone: "423" },
  { code: "LK", label: "Sri Lanka", phone: "94" },
  { code: "LR", label: "Liberia", phone: "231" },
  { code: "LS", label: "Lesotho", phone: "266" },
  { code: "LT", label: "Lithuania", phone: "370" },
  { code: "LU", label: "Luxembourg", phone: "352" },
  { code: "LV", label: "Latvia", phone: "371" },
  { code: "LY", label: "Libya", phone: "218" },
  { code: "MA", label: "Morocco", phone: "212" },
  { code: "MC", label: "Monaco", phone: "377" },
  {
    code: "MD",
    label: "Moldova, Republic of",
    phone: "373",
  },
  { code: "ME", label: "Montenegro", phone: "382" },
  {
    code: "MF",
    label: "Saint Martin (French part)",
    phone: "590",
  },
  { code: "MG", label: "Madagascar", phone: "261" },
  { code: "MH", label: "Marshall Islands", phone: "692" },
  {
    code: "MK",
    label: "Macedonia, the Former Yugoslav Republic of",
    phone: "389",
  },
  { code: "ML", label: "Mali", phone: "223" },
  { code: "MM", label: "Myanmar", phone: "95" },
  { code: "MN", label: "Mongolia", phone: "976" },
  { code: "MO", label: "Macao", phone: "853" },
  {
    code: "MP",
    label: "Northern Mariana Islands",
    phone: "1-670",
  },
  { code: "MQ", label: "Martinique", phone: "596" },
  { code: "MR", label: "Mauritania", phone: "222" },
  { code: "MS", label: "Montserrat", phone: "1-664" },
  { code: "MT", label: "Malta", phone: "356" },
  { code: "MU", label: "Mauritius", phone: "230" },
  { code: "MV", label: "Maldives", phone: "960" },
  { code: "MW", label: "Malawi", phone: "265" },
  { code: "MX", label: "Mexico", phone: "52" },
  { code: "MY", label: "Malaysia", phone: "60" },
  { code: "MZ", label: "Mozambique", phone: "258" },
  { code: "NA", label: "Namibia", phone: "264" },
  { code: "NC", label: "New Caledonia", phone: "687" },
  { code: "NE", label: "Niger", phone: "227" },
  { code: "NF", label: "Norfolk Island", phone: "672" },
  { code: "NG", label: "Nigeria", phone: "234" },
  { code: "NI", label: "Nicaragua", phone: "505" },
  { code: "NL", label: "Netherlands", phone: "31" },
  { code: "NO", label: "Norway", phone: "47" },
  { code: "NP", label: "Nepal", phone: "977" },
  { code: "NR", label: "Nauru", phone: "674" },
  { code: "NU", label: "Niue", phone: "683" },
  { code: "NZ", label: "New Zealand", phone: "64" },
  { code: "OM", label: "Oman", phone: "968" },
  { code: "PA", label: "Panama", phone: "507" },
  { code: "PE", label: "Peru", phone: "51" },
  { code: "PF", label: "French Polynesia", phone: "689" },
  { code: "PG", label: "Papua New Guinea", phone: "675" },
  { code: "PH", label: "Philippines", phone: "63" },
  { code: "PK", label: "Pakistan", phone: "92" },
  { code: "PL", label: "Poland", phone: "48" },
  {
    code: "PM",
    label: "Saint Pierre and Miquelon",
    phone: "508",
  },
  { code: "PN", label: "Pitcairn", phone: "870" },
  { code: "PR", label: "Puerto Rico", phone: "1" },
  {
    code: "PS",
    label: "Palestine, State of",
    phone: "970",
  },
  { code: "PT", label: "Portugal", phone: "351" },
  { code: "PW", label: "Palau", phone: "680" },
  { code: "PY", label: "Paraguay", phone: "595" },
  { code: "QA", label: "Qatar", phone: "974" },
  { code: "RE", label: "Reunion", phone: "262" },
  { code: "RO", label: "Romania", phone: "40" },
  { code: "RS", label: "Serbia", phone: "381" },
  { code: "RU", label: "Russian Federation", phone: "7" },
  { code: "RW", label: "Rwanda", phone: "250" },
  { code: "SA", label: "Saudi Arabia", phone: "966" },
  { code: "SB", label: "Solomon Islands", phone: "677" },
  { code: "SC", label: "Seychelles", phone: "248" },
  { code: "SD", label: "Sudan", phone: "249" },
  { code: "SE", label: "Sweden", phone: "46" },
  { code: "SG", label: "Singapore", phone: "65" },
  { code: "SH", label: "Saint Helena", phone: "290" },
  { code: "SI", label: "Slovenia", phone: "386" },
  {
    code: "SJ",
    label: "Svalbard and Jan Mayen",
    phone: "47",
  },
  { code: "SK", label: "Slovakia", phone: "421" },
  { code: "SL", label: "Sierra Leone", phone: "232" },
  { code: "SM", label: "San Marino", phone: "378" },
  { code: "SN", label: "Senegal", phone: "221" },
  { code: "SO", label: "Somalia", phone: "252" },
  { code: "SR", label: "Suriname", phone: "597" },
  { code: "SS", label: "South Sudan", phone: "211" },
  {
    code: "ST",
    label: "Sao Tome and Principe",
    phone: "239",
  },
  { code: "SV", label: "El Salvador", phone: "503" },
  {
    code: "SX",
    label: "Sint Maarten (Dutch part)",
    phone: "1-721",
  },
  {
    code: "SY",
    label: "Syrian Arab Republic",
    phone: "963",
  },
  { code: "SZ", label: "Swaziland", phone: "268" },
  {
    code: "TC",
    label: "Turks and Caicos Islands",
    phone: "1-649",
  },
  { code: "TD", label: "Chad", phone: "235" },
  {
    code: "TF",
    label: "French Southern Territories",
    phone: "262",
  },
  { code: "TG", label: "Togo", phone: "228" },
  { code: "TH", label: "Thailand", phone: "66" },
  { code: "TJ", label: "Tajikistan", phone: "992" },
  { code: "TK", label: "Tokelau", phone: "690" },
  { code: "TL", label: "Timor-Leste", phone: "670" },
  { code: "TM", label: "Turkmenistan", phone: "993" },
  { code: "TN", label: "Tunisia", phone: "216" },
  { code: "TO", label: "Tonga", phone: "676" },
  { code: "TR", label: "Turkey", phone: "90" },
  {
    code: "TT",
    label: "Trinidad and Tobago",
    phone: "1-868",
  },
  { code: "TV", label: "Tuvalu", phone: "688" },
  {
    code: "TW",
    label: "Taiwan, Republic of China",
    phone: "886",
  },
  {
    code: "TZ",
    label: "United Republic of Tanzania",
    phone: "255",
  },
  { code: "UA", label: "Ukraine", phone: "380" },
  { code: "UG", label: "Uganda", phone: "256" },
  {
    code: "US",
    label: "United States",
    phone: "1",
    suggested: true,
  },
  { code: "UY", label: "Uruguay", phone: "598" },
  { code: "UZ", label: "Uzbekistan", phone: "998" },
  {
    code: "VA",
    label: "Holy See (Vatican City State)",
    phone: "379",
  },
  {
    code: "VC",
    label: "Saint Vincent and the Grenadines",
    phone: "1-784",
  },
  { code: "VE", label: "Venezuela", phone: "58" },
  {
    code: "VG",
    label: "British Virgin Islands",
    phone: "1-284",
  },
  {
    code: "VI",
    label: "US Virgin Islands",
    phone: "1-340",
  },
  { code: "VN", label: "Vietnam", phone: "84" },
  { code: "VU", label: "Vanuatu", phone: "678" },
  { code: "WF", label: "Wallis and Futuna", phone: "681" },
  { code: "WS", label: "Samoa", phone: "685" },
  { code: "XK", label: "Kosovo", phone: "383" },
  { code: "YE", label: "Yemen", phone: "967" },
  { code: "YT", label: "Mayotte", phone: "262" },
  { code: "ZA", label: "South Africa", phone: "27" },
  { code: "ZM", label: "Zambia", phone: "260" },
  { code: "ZW", label: "Zimbabwe", phone: "263" },
];

export {
  cousine,
  northBay,
  eastBay,
  southBay,
  chips,
  dining,
  Press,
  gift,
  countries,
};
