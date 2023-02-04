const hoverDisplay = (array) => {
  array.forEach((chartBar) => {
    const bar = chartBar.children[1];
    bar.addEventListener("mouseenter", function (e) {
      if (e.target.classList.contains("bar")) {
        e.target.parentElement.classList.add("hover");
      }

      chartBar.addEventListener("mouseout", function (e) {
        if (e.currentTarget.classList.contains("chart-bar")) {
          e.currentTarget.classList.remove("hover");
        }
      });
    });
  });
};

export default hoverDisplay;
