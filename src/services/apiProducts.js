export async function getProducts() {
  try {
    const res = await fetch(
      `${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/treasury/product`
    );

    const data = res.json();

    return data;
  } catch (err) {
    throw new Error('Failed to fetch products', err);
  }
}
