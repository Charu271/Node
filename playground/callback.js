setTimeout(() => {
  console.log("Charu");
}, 2000);
function trial(val, callback) {
  setTimeout(() => {
    const data = {
      lat: 0,
      long: 0,
    };
    callback(data);
  }, 5000);
}
trial("charu", () => console.log("In callback function"));
function add(a, b, callback) {
  setTimeout(() => {
    const ans = a + b;
    callback(ans);
  }, 2000);
}
add(1, 4, (sum) => {
  console.log(sum);
});
