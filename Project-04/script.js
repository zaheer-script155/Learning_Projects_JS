// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/ismartcoding/currency-api@main/latest/data.json";
// console.log(BASE_URL);
// const BASE_URL =
//   "https://cdn.jsdelivr.net/gh/ismartcoding/currency-api@main/latest/data.json";
// console.log(BASE_URL);
const BASE_URL ="https://2024-03-06.currency-api.pages.dev/v1/currencies"
console.log(BASE_URL);

const dropDown = document.querySelectorAll(".dropdown select");
console.log(dropDown);
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select")
const toCurr = document.querySelector(".to select")

for (const select of dropDown) {
  console.log(select);
  for (const currCode in countryList) {
    let newOption = document.createElement("option");
    newOption.innerText = currCode;
    newOption.value = currCode;
    select.append(newOption);
    if (select.name === "from" && currCode === "USD") {
      newOption.selected = "selected";
    } else if (select.name === "to" && currCode === "PKR") {
      newOption.selected = "selected";
    }
  }
  select.addEventListener("change", (evt) => {
    updateFlag(evt.target);
  });
}
const updateFlag = (element) => {
  console.log(element);
  let currCode = element.value;
  let countryCode = countryList[currCode];
  console.log(countryCode);
  let newSrc = `https://flagsapi.com/${countryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img");
  img.src = newSrc;
};
btn.addEventListener("click", async (evt) => {
  evt.preventDefault();
  let amount = document.querySelector(".amount input");
  let amtValue = amount.value;
  if (amtValue === "" || amtValue < 1) {
    amtValue = 1;
    amount.value = "1";
  }
  console.log(amtValue);
  console.log(fromCurr.value, toCurr.value);
  const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}/${toCurr.value.toLowerCase()}.json`
  // const URL = `${BASE_URL}`
  let response = await fetch(URL)
  let data = await response.json()
  console.log(data);
  
  
});
