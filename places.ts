import { isSunday } from "date-fns";

import { CategoryType } from "./types";
import { PlaceProps } from "./components/Place";

const places: Record<CategoryType, PlaceProps[]> = {
  mexican: [
    {
      label: "Joyride Taco House",
      brandColor: "#ea6845",
      type: "restaurant",
      url: "https://joyridetacohouse.com/",
    },
    {
      label: "Isabel's Amor",
      brandColor: "#9BA400",
      type: "restaurant",
      url: "https://isabelsamor.com/",
    },
    {
      label: "Diego Pops",
      brandColor: "#f838a7",
      type: "restaurant",
      url: "https://www.diegopops.com/",
    },
    {
      label: "Chipotle",
      brandColor: "#a81612",
      type: "fastfood",
      url: "https://chipotle.com/",
    },
    {
      label: "Taco Bell",
      brandColor: "#682a8d",
      type: "fastfood",
      url: "https://www.tacobell.com/",
    },
    {
      label: "Los Favoritos",
      brandColor: "#3b0000",
      type: "fastfood",
      url: "https://www.losfavs.com/",
    },
  ],
  italian: [
    {
      label: "Picazzo's",
      brandColor: "#a4bf2f",
      type: "restaurant",
      url: "https://picazzos.com/",
    },
    {
      label: "Vito's",
      brandColor: "#232122",
      type: "restaurant",
      url: "https://vitospizza.com/",
    },
    {
      label: "Oregano's",
      brandColor: "#da291b",
      type: "restaurant",
      url: "https://oreganos.com/",
    },
    {
      label: "Venezia's",
      brandColor: "#da2429",
      type: "both",
      url: "https://www.venezias.com/",
    },
    {
      label: "Pieology",
      brandColor: "#61a610",
      type: "fastfood",
      url: "https://pieology.com/",
    },
    {
      label: "Barro's Pizza",
      brandColor: "#0a7d3e",
      type: "restaurant",
      url: "https://barrospizza.com/",
    },
    {
      label: "Sauce",
      brandColor: "#a93439",
      type: "restaurant",
      url: "https://www.saucepizzaandwine.com/",
    },
    {
      label: "Fired Pie",
      brandColor: "#dc2e26",
      type: "fastfood",
      url: "https://firedpie.com/",
    },
  ],
  american: [
    {
      label: "Joe's Farm Grill",
      brandColor: "#038849",
      type: "restaurant",
      url: "https://www.joesfarmgrill.com/",
    },
    {
      label: "The Habit Burger Grill",
      brandColor: "#b5252e",
      type: "fastfood",
      url: "https://www.habitburger.com/",
    },
    {
      label: "SmashBurger",
      brandColor: "#cc6633",
      type: "fastfood",
      url: "https://smashburger.com/",
    },
    {
      label: "OHSO",
      brandColor: "#ec8536",
      type: "restaurant",
      url: "https://ohsobrewery.com/gilbert/",
    },
    {
      label: "Zinburger",
      brandColor: "#1574c4",
      type: "restaurant",
      url: "https://www.zinburgeraz.com/locations/gilbert-az/",
    },
    {
      label: "Arizona Wilderness",
      brandColor: "#b6794a",
      type: "restaurant",
      url: "https://azwbeer.com/",
    },
    {
      label: "Matty G's",
      brandColor: "#6c492c",
      type: "restaurant",
      url: "https://matty-gs.com/",
    },
    {
      label: "Thirsty Lion",
      brandColor: "#950e0d",
      type: "restaurant",
      url: "https://www.thirstyliongastropub.com/santan-village",
    },
    {
      label: "Firebirds Wood Fired Grill",
      brandColor: "#4b8a91",
      type: "restaurant",
      url: "https://gilbert.firebirdsrestaurants.com/",
    },
    {
      label: "Higley Hot Dog Hut",
      brandColor: "#f4393a",
      type: "restaurant",
      url: "https://www.yelp.com/biz/higley-hot-dog-hut-gilbert?osq=burger",
    },
    {
      label: "Culinary Dropout",
      brandColor: "#a72825",
      type: "restaurant",
      url: "https://www.culinarydropout.com/locations/gilbert-az/",
    },
    {
      label: "McDonald's",
      brandColor: "#ffbc0c",
      type: "fastfood",
      url: "https://www.mcdonalds.com/us/en-us.html",
    },
    {
      label: "Chick-fil-A",
      brandColor: "#dd0031",
      type: "fastfood",
      url: "https://www.chick-fil-a.com/",
      show: () => !isSunday(new Date()),
    },
  ],
  chinese: [
    {
      label: "Panda Express",
      brandColor: "#c9232c",
      type: "fastfood",
      url: "https://www.pandaexpress.com/",
    },
    {
      label: "Great Wall Chinese Restaurant",
      brandColor: "#9e403e",
      type: "restaurant",
      url: "http://www.greatwallamy.com/",
    },
    {
      label: "Pei Wei",
      brandColor: "#669999",
      type: "both",
      url: "https://www.peiwei.com/arizona/9-gilbert/",
    },
  ],
  vietnamese: [],
  thai: [],
  barbecue: [],
  korean_bbq: [],
  sandwiches: [],
  salad: [],
};

export default places;
