function samplePromise() {
  return Promise.resolve("Randi");
}

async function run() {
  const name = await samplePromise();
  console.info(name);
}

run();
