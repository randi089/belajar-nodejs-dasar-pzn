import { json } from "stream/consumers";
import util from "util";

const firstName = "Randi";
const lastName = "Febriadi";

console.info(`Hello ${firstName} ${lastName}`);
console.info(util.format("Hello %s %s", firstName, lastName));

const person = {
  firstName: "Randi",
  lastName: "Febriadi",
};

console.info(`Person : ${JSON.stringify(person)}`);
console.info(util.format("Person : %j", person));
