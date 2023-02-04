const renderBar = (data, value) => {
  //calculate 100%
  const maxValue = Math.max(
    ...data.map((item) => {
      return item.amount;
    })
  );

  //convert each and every following the 100% value = 109px
  const convertValue = Math.round((value * 109) / maxValue);

  return convertValue;
};

export default renderBar;
