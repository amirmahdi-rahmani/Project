
const getData = async (endpoint) => {

    const res = await fetch(`https://az.pythonanywhere.com/${endpoint}`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default getData;
