import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
    // return timestamp
    return NextResponse.json({ timestamp: Date.now() });
}
