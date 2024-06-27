import type { NextRequest } from "next/server";
import { NextResponse } from "next/server";
import { getToken } from "next-auth/jwt";

export async function middleware(req: NextRequest) {
    const token = await getToken({ req });
    const isAuthenticated = !!token;
    const isDashboardPage = req.nextUrl.pathname.startsWith("/dashboard");

    if (isDashboardPage && !isAuthenticated) {
        return NextResponse.rewrite(new URL('/api/auth/signin', req.url));
    }
}