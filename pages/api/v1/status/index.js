async function status(request, response) {
  const updatedAt = new Date().toISOString();
  const postgresVersion = pgVersion;
  const maxConnections = 
  const conectionsRunning = 
  response.status(200).json({
    updated_at: updatedAt,
    postgres_version:
    max_connections:
    conections_running:
  });
}
export default status;
