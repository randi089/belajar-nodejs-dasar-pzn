import { URL } from "url";

const pzn = new URL("https://www.programmerzamannow.com/belajar?kelas=nodejs");

console.info(pzn.toString());
console.info(pzn.protocol);
console.info(pzn.host);
console.info(pzn.pathname);
console.info(pzn.searchParams);
