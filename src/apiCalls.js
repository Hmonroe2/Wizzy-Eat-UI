const fetchData = async () => {
  return await fetch('http://localhost:3001/api/v1/restaurants')
}

export { fetchData }