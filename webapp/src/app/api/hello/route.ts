/**
 * Handles GET requests by returning all environment variables in a JSON response.
 *
 * @param request - The incoming HTTP request.
 * @returns A JSON response containing all environment variables under the key `hi`.
 */
export async function GET(request: Request) {
  console.log({ request });

  const ENV_VARS = process.env;

  return Response.json({ hi: ENV_VARS });
}
