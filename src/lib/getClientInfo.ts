// Utility to get user's IP and device ID
export async function getClientInfo() {
  // Get IP address from a public API
  let ip = "";
  try {
    const res = await fetch("https://api.ipify.org?format=json");
    const data = await res.json();
    ip = data.ip;
  } catch {
    ip = "unknown";
  }
  // Use localStorage for device ID
  let deviceId = localStorage.getItem("deviceId");
  if (!deviceId) {
    deviceId = crypto.randomUUID();
    localStorage.setItem("deviceId", deviceId);
  }
  return { ip, deviceId };
}
