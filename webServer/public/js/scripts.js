console.log("Loggong from scripts");

const weatherForm = document.querySelector("form");
const input = document.querySelector("input");
const p1 = document.querySelector("#msg-1");
const p2 = document.querySelector("#msg-2");
weatherForm.addEventListener("submit", (e) => {
  const address = input.value;
  e.preventDefault();
  p1.textContent = "Loading...";
  p2.textContent = "";
  fetch("/weather?address=" + address).then((response) => {
    response.json().then((data) => {
      if (data.error) {
        p1.textContent = data.error;
      } else {
        p1.textContent = data.location;
        p2.textContent = data.forecast;
      }
    });
  });
});
