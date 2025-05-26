export async function GET(request: Request) {
  console.log({ request });

  const ENV_VARS = process.env;

  return Response.json({ hi: ENV_VARS });
}
