import { threadId, Worker } from "worker_threads";

const worker1 = new Worker("./worker.mjs");
const worker2 = new Worker("./worker.mjs");

worker1.addListener("message", function (message) {
  console.info(`thread ${threadId} receive message 1 : ${message}`);
});

worker2.addListener("message", function (message) {
  console.info(`thread ${threadId} receive message 2 : ${message}`);
});

worker1.postMessage(10);
worker2.postMessage(10);
