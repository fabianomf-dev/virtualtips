
// Next.js Edge API Route Handlers: https://nextjs.org/docs/app/building-your-application/routing/router-handlers#edge-and-nodejs-runtimes

import type { NextRequest,NextResponse } from 'next/server'

import requestIp from 'request-ip';
export const runtime = 'edge'

export async function GET(request: NextRequest,response:NextResponse) {
  console.log(requestIp.getClientIp(response))
  const userIP = requestIp.getClientIp(request);
  return new Response(JSON.stringify({ name: 'John Doe', userIP }));
}
