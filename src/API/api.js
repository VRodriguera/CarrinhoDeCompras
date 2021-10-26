import carts from './cartApi'

const Api = () => {
  const json = JSON.stringify(carts)
  return json;
}

export default Api;
