import mockyeah from "mockyeah";

mockyeah.get("/menu", {
  json: () => ({
    name: "Pizza World"
  })
});
