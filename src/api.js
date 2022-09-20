
export async function responseApi() {
  const url = await fetch('https://api.mercadolibre.com/sites/MLB/categories')
  const responseApi = await url.json()
  return responseApi;
}

export async function responseApiId(product) {
  const url = await fetch(`https://api.mercadolibre.com/sites/MLB/search?q=${ product }`)
  const responseApi = await url.json()
  return responseApi;
}