import getElement from "./getElement.js";
import hoverDisplay from "./hoverDisplay.js";
import renderBar from "./renderBar.js";

const myBalance = 921.48;
const totalMonthDOM = getElement(".total-month");
const myBalanceDOM = getElement(".my-balance-amount");
const weekDays = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
const today = weekDays[new Date().getDay()];
const chartDOM = getElement(".chart");

const setupSpending = (data) => {
  //  setting up my balance
  myBalanceDOM.textContent = `$${myBalance}`;

  //  setting up chart
  const displayChart = data
    .map((item) => {
      const { day, amount } = item;
      const render = `style="height: ${renderBar(data, amount)}px;"`;
      return `<div class="chart-bar">
    <div class="hovered-price">
      <span>$${amount}</span>
    </div>
    <div class="bar ${today === day ? "today" : ""}" ${render}></div>
    <p class="day">${day}</p>
  </div>`;
    })
    .join("");
  chartDOM.innerHTML = displayChart;

  // setting up total month
  const totalMonth = data.reduce((total, current) => {
    return (total += current.amount);
  }, 0);
  totalMonthDOM.textContent = `$${totalMonth}`;

  // setting up hover effect
  const barList = [...chartDOM.childNodes];
  hoverDisplay(barList);
};

export default setupSpending;
