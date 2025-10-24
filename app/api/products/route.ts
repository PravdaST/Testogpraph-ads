import { NextResponse } from 'next/server';

export async function GET() {
  // Mock products data for TESTOGRAPH offerings
  const products = [
    {
      id: '1',
      name: 'TESTOGRAPH Starter',
      brandId: '1',
      description: 'Complete testosterone optimization system for beginners',
      price: 67,
      currency: 'BGN',
      perfield_url: 'https://shop.testograph.eu/products/testograph-starter',
      features: [
        'Testosterone optimization supplement (12 natural ingredients)',
        '4 detailed protocols (training, nutrition, sleep, timing)',
        'Daily check-in application',
        'Progress tracking',
        'Private community support'
      ],
      stock: 'in_stock',
      status: 'active',
      createdAt: '2025-01-01T00:00:00Z'
    },
    {
      id: '2',
      name: 'TESTOGRAPH Pro',
      brandId: '1',
      description: 'Advanced system with premium supplements and 1-on-1 coaching',
      price: 179,
      currency: 'BGN',
      perfield_url: 'https://shop.testograph.eu/products/testograph-pro',
      features: [
        'Premium testosterone supplement (advanced formula)',
        'All Starter features',
        '1-on-1 coaching sessions (4 per month)',
        'Advanced analytics dashboard',
        'Priority community support',
        'Meal planning templates',
        'Video training library'
      ],
      stock: 'in_stock',
      status: 'active',
      createdAt: '2025-01-01T00:00:00Z'
    },
    {
      id: '3',
      name: 'TESTOGRAPH Elite',
      brandId: '1',
      description: 'Ultimate optimization system with complete personalization',
      price: 299,
      currency: 'BGN',
      perfield_url: 'https://shop.testograph.eu/products/testograph-elite',
      features: [
        'Premium supplement (3-month supply)',
        'All Pro features',
        'Weekly 1-on-1 coaching',
        'Custom meal plans',
        'Custom training programs',
        'Blood test analysis',
        'Lifetime community access'
      ],
      stock: 'limited',
      status: 'active',
      createdAt: '2025-01-01T00:00:00Z'
    }
  ];

  return NextResponse.json(products);
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    // Validate required fields
    if (!body.name || !body.brandId || !body.price) {
      return NextResponse.json(
        { error: 'Name, brandId, and price are required' },
        { status: 400 }
      );
    }

    // Mock response - in production, this would save to database
    const newProduct = {
      id: Date.now().toString(),
      ...body,
      currency: body.currency || 'BGN',
      stock: body.stock || 'in_stock',
      status: body.status || 'active',
      createdAt: new Date().toISOString()
    };

    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json(
      { error: 'Invalid request body' },
      { status: 400 }
    );
  }
}
