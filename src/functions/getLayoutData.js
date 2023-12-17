const getLayoutData = async () => {
  const res = await fetch(`http://localhost:5288/api/menu`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default getLayoutData;
