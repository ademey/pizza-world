import { pick, unique } from "./lib";
import { common, premium, legendary } from "./ingredients";

const adverbs = [
  "Big",
  "Thick",
  "Hungry",
  "Thin",
  "Chunky",
  "Jumping",
  "Kicking",
  "Screaming",
  "Spicy",
  "Juicy",
  "Creamy",
  "Gooey"
];
const names = ["Hank", "Sammy", "Georgie", "Lucy", "Pete", "Mr.", "Ms."];

const makeToppings = (list, min, max) => unique(pick(list), min, max);

export const makePizza = id => {
  let name = "unnamed";
  let toppings = makeToppings(common, 3, 5);
  let price = 1099 + toppings.length * 100;
  if (Math.random() > 0.6) {
    const pT = makeToppings(premium, 1, 4);
    toppings = [...toppings, ...pT];
    name = [pick(adverbs)(), pick(pT)()].join(" ");
    price += pT.length * 120;
  } else if (Math.random() > 0.5) {
    const lT = makeToppings(legendary, 1);
    toppings = [...toppings, ...lT];
    name = [
      Math.random() > 0.7 ? pick(names)() : "",
      pick(adverbs)(),
      pick(lT)()
    ].join(" ");
    price += lT.length * 199;
  } else {
    name = [
      pick(toppings)(),
      pick(["Surprise", "Special", "Pie", "Pizza", "", "", "", "", ""])()
    ].join(" ");
  }
  return {
    id: String(id + 1),
    name: name,
    ingredients: toppings,
    price
  };
};
