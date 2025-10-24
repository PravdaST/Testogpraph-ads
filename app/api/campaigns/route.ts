import { NextResponse } from 'next/server';

export async function GET() {
  // Mock campaigns data based on advertorial strategy
  const campaigns = [
    {
      id: '1',
      name: 'Mystery Angle - Testosterone Secret',
      type: 'advertorial',
      angle: 'mystery',
      brandId: '1',
      url: '/advertorials/testosterone-secret',
      headline: 'Български ендокринолог разкрива: Ето защо силата ти е stuck въпреки 4 тренировки седмично',
      status: 'active',
      budget: 50,
      spent: 0,
      clicks: 0,
      conversions: 0,
      createdAt: '2025-01-15T00:00:00Z'
    },
    {
      id: '2',
      name: 'Expose Angle - Supplement Scam',
      type: 'advertorial',
      angle: 'expose',
      brandId: '1',
      url: '/advertorials/supplement-scam-expose',
      headline: 'Разследване: Защо 90% от "тесто бустерите" в България са пълна измама',
      status: 'draft',
      budget: 0,
      spent: 0,
      clicks: 0,
      conversions: 0,
      createdAt: '2025-01-15T00:00:00Z'
    },
    {
      id: '3',
      name: 'Natural Alternative Angle',
      type: 'advertorial',
      angle: 'solution',
      brandId: '1',
      url: '/advertorials/natural-testosterone',
      headline: 'Нова система позволява на мъже над 30 да вдигнат тестостерон с 40% без стероиди',
      status: 'draft',
      budget: 0,
      spent: 0,
      clicks: 0,
      conversions: 0,
      createdAt: '2025-01-15T00:00:00Z'
    },
    {
      id: '4',
      name: 'Value Comparison Angle',
      type: 'advertorial',
      angle: 'value',
      brandId: '1',
      url: '/advertorials/value-comparison',
      headline: 'Математиката е проста: Защо 67 лв за система бият 500 лв за отделни части',
      status: 'draft',
      budget: 0,
      spent: 0,
      clicks: 0,
      conversions: 0,
      createdAt: '2025-01-15T00:00:00Z'
    }
  ];

  return NextResponse.json(campaigns);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.type || !body.brandId) {
      return NextResponse.json(
        { error: 'Name, type, and brandId are required' },
        { status: 400 }
      );
    }

    // Mock response - in production, this would save to database
    const newCampaign = {
      id: Date.now().toString(),
      ...body,
      status: body.status || 'draft',
      budget: body.budget || 0,
      spent: 0,
      clicks: 0,
      conversions: 0,
      createdAt: new Date().toISOString()
    };

    return NextResponse.json(newCampaign, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
