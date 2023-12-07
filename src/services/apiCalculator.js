const url = `${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/treasury/exchange-rate/latest`;

export async function calculateUSD() {
  const res = await fetch(url);
  const data = res.json();

  return data;
}
