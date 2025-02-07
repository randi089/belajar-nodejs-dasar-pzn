import { Buffer } from "node:buffer";

const buffer = Buffer.from("Randi", "utf8");

console.info(buffer.toString("base64"));
console.info(buffer.toString("hex"));

const buffer2 = Buffer.from("UmFuZGkgUHJvZ3JhbW1lciBIZWJhdA==", "base64url");

buffer.reverse();
console.info(buffer2.toString("utf8"));
