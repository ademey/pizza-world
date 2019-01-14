import mockyeah from "mockyeah";
import { repeat } from "./lib";
import { makePizza } from "./pizza";

mockyeah.get("/menu", {
  json: repeat(makePizza, 20)
});
