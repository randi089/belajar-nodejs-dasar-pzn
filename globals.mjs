let ulang = setInterval(function () {
  console.info("Mantap");
}, 1000);

setTimeout(function () {
  console.info("Hello World");
  clearInterval(ulang);
}, 5000);
