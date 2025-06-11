// API utility to send feedback to the backend
export async function sendFeedback({ sentiment, ip, deviceId }: { sentiment: "like" | "dislike"; ip: string; deviceId: string }) {
  // This assumes you will set up an API route at /api/feedback
  const res = await fetch("/api/feedback", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ sentiment, ip, deviceId })
  });
  if (!res.ok) throw new Error("Failed to send feedback");
  return res.json();
}
