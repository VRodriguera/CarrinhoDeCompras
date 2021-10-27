const fetchAllProducts = async () => {
  const response = await fetch('https://carts-64003-default-rtdb.firebaseio.com/carts.json');
  const result = await response.json();
  return result;
};

export default fetchAllProducts;
