import { type NextRequest, NextResponse } from "next/server";

export async function GET(request: NextRequest): Promise<NextResponse> {
    const searchParams = request.nextUrl.searchParams

    // Convert searchParams to a plain object
    const queryParams = Object.fromEntries(searchParams.entries())
    
    // return timestamp formatted nicely
    return NextResponse.json({ timestamp: new Date().toISOString(), queryParams });
}
