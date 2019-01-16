import mockyeah from "mockyeah";
import { repeat } from "./lib";
import { makePizza } from "./pizza";

mockyeah.get("/menu", {
  json: () => repeat(makePizza, 20)
});

mockyeah.post("/order", {
  json: () => ({
    status: 'success',
    deliveryTime: Math.round(Math.random() * 60) + 30
  }),
  latency: 3000
});