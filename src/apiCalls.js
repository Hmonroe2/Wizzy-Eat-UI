const fetchData = async (id) => {
  return await fetch(
    `https://wizzy-eats-api.vercel.app/api/v1/restaurants/${id}`
  );
};

export { fetchData };
