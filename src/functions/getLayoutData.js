const getLayoutData = async () => {
  const res = await fetch(`https://az.pythonanywhere.com`);

  if (!res.ok) {
    throw new Error("Failed to fetch data");
  }
  return res.json();
};

export default getLayoutData;
