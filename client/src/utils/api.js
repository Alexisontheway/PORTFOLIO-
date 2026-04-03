const API_BASE = import.meta.env.VITE_API_URL || '';

export async function submitContactForm(data) {
  const response = await fetch(`${API_BASE}/api/contact`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const error = await response.json().catch(() => ({ message: 'Something went wrong' }));
    throw new Error(error.message || 'Failed to send message');
  }

  return response.json();
}
