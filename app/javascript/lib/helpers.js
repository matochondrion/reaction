function minutes_since(datetime) {
  datetime = new Date(datetime);
  const now = Date.now();

  const diffMs = now - datetime;

  // minutes from milliseconds
  return Math.round(((diffMs % 86400000) % 3600000) / 60000);
}

export { minutes_since };