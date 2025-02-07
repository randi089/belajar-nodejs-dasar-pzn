import fs from "fs";

const writer = fs.createWriteStream("target.log");
writer.write("Randi ");
writer.write("Febriadi ");
writer.write("Programmer");
writer.close();

const reader = fs.createReadStream("target.log");
reader.on("data", function (data) {
  console.info(data.toString());
  reader.close();
});
