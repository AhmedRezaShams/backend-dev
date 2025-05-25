import { NextRequest } from 'next/server';

export function GET(request) {
  const searchParams = request.nextUrl.searchParams;
  const query = searchParams.get('query'); // e.g. `/api/search?query=hello`

  return new Response(
    JSON.stringify({ result: `You searched for: ${query}` }),
    {
      headers: { 'Content-Type': 'application/json' },
    },
  );
}