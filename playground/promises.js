promisefxn = new Promise((resolve, reject) => {
  resolve("I have been resolved");
  reject("Not been resolved");
});
promisefxn
  .then((response) => {
    console.log(response);
  })
  .catch((error) => {
    console.log(error);
  });
