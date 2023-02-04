import getElement from "./src/getElement.js";
import fetchData from "./src/fetchData.js";
import setupSpending from "./src/setupSpending.js";

const init = async () => {
  const data = await fetchData();
  setupSpending(data);
};

window.addEventListener("DOMContentLoaded", init);
