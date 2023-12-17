
const getData = async (endpoint) => {

    const res = await fetch(`http://localhost:5288/api/${endpoint}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default getData;
