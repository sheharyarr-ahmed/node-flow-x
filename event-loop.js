const fs = required("fs");

setTimeout(() => console.log("timer is finished"), 0);
setImmediate(() => console.log("immediate 1 is finished"));

fs.readFile("test-file.txt", () => {
  console.log("I/) finished");

  setTimeout(() => console.log("timer 1 is finished"));
  setImmediate(() => console.log("immediate 1 is finished"));
});

console.log("hello from the top-level-code");
