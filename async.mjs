function samplePromise() {
  return Promise.resolve("Randi");
}

const name = await samplePromise();
console.info(name);
