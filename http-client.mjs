import https from "https";

const endPoint = "https://hookb.in";
const request = https.request(
  endPoint,
  {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Accept: "application/json",
    },
  },
  (response) => {
    response.addListener("data", function (data) {
      console.info(`Receive data : ${data.toString()}`);
    });
  }
);

const body = JSON.stringify({
  firstName: "Randi",
  lastName: "Febriadi",
});

request.write(body);
request.end();
