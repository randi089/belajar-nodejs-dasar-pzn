import { Buffer } from "node:buffer";

const buffer = Buffer.from("Randi");

console.info(buffer.toString());

buffer.reverse();
console.info(buffer.toString());
