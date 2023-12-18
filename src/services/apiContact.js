const url = `${process.env.NEXT_PUBLIC_APP_API_BASE_URL}/form/moneda`;

export async function contactApi(data) {
  try {
    const res = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      console.log(res);
      throw new Error(`${res.status}: ${res.statusText}`);
    }

    const resData = await res.json();

    return resData;
  } catch (err) {
    throw err;
  }
}
