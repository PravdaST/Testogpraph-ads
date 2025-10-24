import { NextResponse } from 'next/server';

export async function GET() {
  // Mock brands data for TESTOGRAPH advertising system
  const brands = [
    {
      id: '1',
      name: 'TESTOGRAPH',
      description: 'Complete testosterone optimization system',
      website: 'https://shop.testograph.eu',
      logo: '/logos/testograph.png',
      status: 'active',
      createdAt: '2025-01-01T00:00:00Z'
    }
  ];

  return NextResponse.json(brands);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.description) {
      return NextResponse.json(
        { error: 'Name and description are required' },
        { status: 400 }
      );
    }

    // Mock response - in production, this would save to database
    const newBrand = {
      id: Date.now().toString(),
      ...body,
      status: body.status || 'active',
      createdAt: new Date().toISOString()
    };

    return NextResponse.json(newBrand, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
