const fetchData = async (id) => {
  return await fetch(`http://localhost:3001/api/v1/restaurants/${id}`)
}

export { fetchData }