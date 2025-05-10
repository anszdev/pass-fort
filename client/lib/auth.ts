export async function sendEmailCode(email: string) {
  const url = `${process.env.EXPO_BASE_URL}/api/auth/send-otp`;
  const response = await fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ email }),
  });

  /* if (response.status !== 200) {
    throw new Error('Error sending email code');
  } */

  const data = await response.json();
  if (data.error) {
    throw new Error(data.error);
  }
  return data;
}
