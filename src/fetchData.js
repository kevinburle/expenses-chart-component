const url = "https://github.com/kevinburle/expenses-chart-component/blob/main/data.json";

const fetchData = async () => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export default fetchData;
